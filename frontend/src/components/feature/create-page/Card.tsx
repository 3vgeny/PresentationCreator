import { Box, Button, Card as ChakraCard, HStack, Input, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { IoTrash } from 'react-icons/io5';
import { OutlineCard } from '@/types/projects.type';

type Props = {
  card: OutlineCard,
  isEditing: boolean,
  isSelected: boolean
  editText: string
  onEditChange: (value: string) => void
  onEditBlur: () => void
  onEditKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onCardClick: () => void
  onCardDoubleClick: () => void
  onDeleteClick: () => void
  dragHandlers: {
    onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragEnd: () => void;
  }
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  dragOverStyles: React.CSSProperties
}

const Card = ({
  card,
  isEditing,
  isSelected,
  editText,
  onEditChange,
  onEditBlur,
  onEditKeyDown,
  onCardClick,
  onCardDoubleClick,
  onDeleteClick,
  dragHandlers,
  onDragOver,
  dragOverStyles,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Box
      width={'full'}
      draggable
      style={dragOverStyles}
      onDragOver={onDragOver}
      {...dragHandlers}
    >
      <ChakraCard
        onClick={onCardClick}
        onDoubleClick={onCardDoubleClick}
        cursor={'pointer'}
        backgroundColor={isSelected ? 'gray.100' : 'blackAlpha.50'}
        border={isSelected ? '2px solid blue' : '0px solid gray'}
        justify={'space-between'}
        align={'center'}
        width={'full'}
        flexDir={'row'}
        padding={4}
      >
        <HStack width={'full'}>
          {
            isEditing ? (
              <Input
                ref={inputRef}
                value={editText}
                onChange={(e) => onEditChange(e.target.value)}
                onBlur={onEditBlur}
                onKeyDown={onEditKeyDown}
              />
            ) : (
              <>
                <Box
                  backgroundColor={isEditing || isSelected ? 'blue.100' : 'blackAlpha.300'}
                  p={2}
                  borderRadius={'md'}
                  textAlign={'center'}
                  px={4}
                >
                  {card.order}
                </Box>
                <Text>{card.title}</Text>
              </>
            )
          }
        </HStack>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onDeleteClick();
          }}
          leftIcon={<IoTrash/>}
          colorScheme={'red'}
          size={'sm'}
          px={4}
        >
            Удалить
        </Button>
      </ChakraCard>
    </Box>
  );
};

export default Card;