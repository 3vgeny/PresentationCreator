import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, HStack, IconButton, Input, Select, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { IoReload } from 'react-icons/io5';
import { v4 as uuid } from 'uuid';
import CardList from './CardList';
import useScratchStore from '@/store/useScratchStore';
import { useSlideStore } from '@/store/useSlideStore';
import { OutlineCard } from '@/types/projects.type';

type Props = {
  onBack: () => void
}

const ScratchPage = ({ onBack }: Props) => {
  const router = useRouter();
  const { resetOutlines, addMultipleOutLines, addOutline, outlines } = useScratchStore();
  const { setProject } = useSlideStore();
  const [editText, setEditText] = React.useState('');
  const [editingCard, setEditingCard] = React.useState<string | null>(null);
  const [selectedCard, setSelectedCard] = React.useState<string | null>(null);

  const handleBack = () => {
    resetOutlines();
    onBack();
  };

  const resetCard = () => {
    setEditText('');

    resetOutlines();
  };

  const handleaddCard = () => {
    const newCard: OutlineCard = {
      id: uuid(),
      title: editText || 'New Card',
      order: outlines.length || 1,
    };

    setEditText('');
    addOutline(newCard);
  };

  const handleGenerate = () => {
    //генерация пезентации
    // if (res.data) {
    //   setProject(res.data);
    //   resetOutlines();
    //   //Вывести toast
    // }
  };

  return (
    <>
      <Button
        variant={'link'}
        leftIcon={<ChevronLeftIcon/>}
        onClick={handleBack}
        colorScheme="blue"
        mb={8}
      >
        Назад
      </Button>
      <VStack
        width={'full'}
        maxW={'4xl'}
        mx={'auto'}
        px={4}
        gap={4}
      >
        <Heading>Prompt</Heading>
        <Flex
          width={'full'}
          backgroundColor={'blackAlpha.100'}
          padding={4}
          borderRadius={'lg'}
          justify={'space-between'}
        >
          <HStack width={'full'}>
            <Input
              variant={'unstyled'}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              placeholder="Введите текст"
            />

            <Select
              variant={'unstyled'}
              width={'max-content'}
              value={outlines.length > 0 ? outlines.length.toString() : '0'}
              placeholder="Выберите кол-во карточек"
            >
              {
                outlines.length === 0 ? (
                  <option value="Нет карточек">Нет карточек</option>
                ) : (
                  Array.from({ length: outlines.length }, (_, index) => index + 1)
                    .map((index) => (
                      <option
                        key={index}
                        value={index}
                      >
                        {index} {index === 1 ? 'карточка' : 'карточек'}
                      </option>
                    ))
                )
              }
            </Select>
            <IconButton
              variant={'unstyled'}
              aria-label="Reset"
              icon={<IoReload/>}
              minW={0}
              onClick={resetCard}
            />
          </HStack>
        </Flex>
        <CardList
          outlines={outlines}
          editingCard={editingCard}
          selectedCard={selectedCard}
          editText={editText}
          addOutline={addOutline}
          onEditChange={setEditText}
          onCardSelect={setSelectedCard}
          onCardDoubleClick={(id, title) => {
            setEditingCard(id);
            setEditText(title);
          }}
          setEditText={setEditText}
          setEditingCard={setEditingCard}
          setSelectedCard={setSelectedCard}
          addMultipleOutLines={addMultipleOutLines}
        />
        <Button
          onClick={handleaddCard}
          width={'full'}
          colorScheme="blue"
        >
          Добавить карточку
        </Button>

        {
          outlines.length > 0 ? (
            <Button
              onClick={handleGenerate}
              width={'full'}
              colorScheme="orange"
            >
              Создать проект
            </Button>
          ) : null
        }
      </VStack>
    </>
  );
};

export default ScratchPage;