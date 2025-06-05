import { VStack } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuid } from 'uuid';
import AddCardButton from './AddCardButton';
import Card from './Card';
import { OutlineCard } from '@/types/projects.type';

type Props = {
  outlines: OutlineCard[]
  editingCard: string | null
  selectedCard: string | null
  editText: string
  addOutline: (outline: OutlineCard) => void
  onEditChange: (value: string) => void
  onCardSelect: (id: string) => void
  onCardDoubleClick: (id: string, title: string) => void
  setEditText: (text: string) => void
  setEditingCard: (id: string | null) => void
  setSelectedCard: (id: string | null) => void
  addMultipleOutLines: (outlines: OutlineCard[]) => void
}

const CardList = ({
  outlines,
  editingCard,
  selectedCard,
  editText,
  addOutline,
  onEditChange,
  onCardSelect,
  onCardDoubleClick,
  setEditText,
  setEditingCard,
  setSelectedCard,
  addMultipleOutLines,
}: Props) => {
  const [draggedItem, setDraggedItem] = React.useState<OutlineCard | null>(null);
  const [dragOverIndex, setDragOverIndex] = React.useState<number | null>(null);
  const dragOffsetY = React.useRef<number | null>(0);

  const onAddCard = (index: number) => {
    const newCard: OutlineCard = {
      id: uuid(),
      title: editText || 'New Card',
      order: index + 1,
    };

    const updateCard = index !== undefined
      ? [
        ...outlines.slice(0, index + 1),
        newCard,
        ...outlines.slice(index + 1).map((card) => ({ ...card, order: card.order + 1 })),
      ]
      : [...outlines, newCard];

    addMultipleOutLines(updateCard);
    setEditText('');
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if(!draggedItem) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const threshold = rect.height / 2;

    if (y < threshold) {
      setDragOverIndex(index);
    } else {
      setDragOverIndex(index + 1);
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if(!draggedItem || dragOverIndex === null) return;

    const updateCards = [...outlines];
    const draggedIndex = updateCards.findIndex((card) => card.id === draggedItem.id);

    if (draggedIndex === -1 || draggedIndex === dragOverIndex) return;

    const [removedCard] = updateCards.splice(draggedIndex, 1);
    updateCards.splice(
      dragOverIndex > draggedIndex ? dragOverIndex - 1 : dragOverIndex,
      0,
      removedCard
    );

    addMultipleOutLines(
      updateCards.map((card, index) => ({ ...card, order: index + 1 }))
    );

    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const onCardUpdate = (id: string, newTitle?: string) => {
    addMultipleOutLines(
      outlines.map((card) =>
        card.id === id ? { ...card, title: newTitle || card.title } : card
      )
    );
    setEditingCard(null);
    setSelectedCard(null);
    setEditText('');
  };

  const onDeleteClick = (id: string) => {
    addMultipleOutLines(
      outlines
        .filter((card) => card.id !== id)
        .map((card, index) => ({ ...card, order: index + 1 }))
    );
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, card: OutlineCard) => {
    setDraggedItem(card);
    e.dataTransfer.effectAllowed = 'move';

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    dragOffsetY.current = e.clientY - rect.top;

    const draggedElement = e.currentTarget.cloneNode(true) as HTMLElement;
    draggedElement.style.position = 'absolute';
    draggedElement.style.top = `-1000px`;
    draggedElement.style.opacity = '0.8';
    draggedElement.style.width = `${(e.currentTarget as HTMLElement).offsetWidth}px`;
    document.body.appendChild(draggedElement);
    e.dataTransfer.setDragImage(draggedElement, 0, dragOffsetY.current);

    setTimeout(() => {
      setDragOverIndex(outlines.findIndex((c) => c.id === card.id));
      document.body.removeChild(draggedElement);
    }, 0);
  };

  const onDragEnd = () => {
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const getDragOverStyles = (cardIndex: number) => {
    if (dragOverIndex === null || draggedItem === null) return {};
    if (cardIndex === dragOverIndex) {
      return {
        borderTop: '2px solid #000',
        marginTop: '0.5rem',
        transition: 'margin 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
      };
    } else if (cardIndex === dragOverIndex - 1) {
      return {
        borderBottom: '2px solid #000',
        marginBottom: '0.5rem',
        transition: 'margin 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
      };
    }

    return {};
  };

  return (
    <VStack
      width={'full'}
      onDragOver={(e) => {
        e.preventDefault();
        if (outlines.length === 0 || e.clientY > e.currentTarget.getBoundingClientRect().bottom - 20) {
          onDragOver(e, outlines.length);
        }
      }}
      onDrag={(e) => {
        e.preventDefault();
        onDrop(e);
      }}
    >
      {
        outlines?.map((card, index) =>(
          <>
            <Card
              key={index}
              card={card}
              onDragOver={(e) => onDragOver(e, index)}
              isEditing={editingCard === card.id}
              isSelected={selectedCard === card.id}
              editText={editText}
              onEditChange={onEditChange}
              onEditBlur={() => onCardUpdate(card.id, editText)}
              onEditKeyDown={(e) => {
                if(e.key === 'Enter') {
                  onCardUpdate(card.id, editText);
                }
              }}
              onCardClick={() => onCardSelect(card.id)}
              onCardDoubleClick={() => onCardDoubleClick(card.id, card.title)}
              onDeleteClick={() => onDeleteClick(card.id)}
              dragHandlers={{
                onDragStart: (e) => onDragStart(e, card),
                onDragEnd: onDragEnd,
              }}
              dragOverStyles={getDragOverStyles(index)}
            />
            <AddCardButton onAddCard={() => onAddCard(index)} />
          </>)
        )
      }
    </VStack>
  );
};

export default CardList;