import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, IconButton, Input, Select, Spinner, Text, useToast, VStack } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { IoReload } from 'react-icons/io5';
import CardList from './CardList';
import useCreateAIStore from '@/store/useCreativeAiStore';

type Props = {
  onBack: () => void
}

const CreateAI = ({ onBack }: Props) => {
  const toast = useToast();
  // const router = useRouter();
  const { currentAiPrompt, setCurrentAiPrompt, outlines, resetOutlines, addOutline, addMultipleOutLines } = useCreateAIStore();

  const [noOfCards, setNoOfCards] = React.useState(0);
  const [editingCard, setEditingCard] = React.useState<string | null>(null);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<string | null>(null);
  const [editText, setEditText] = React.useState('');

  const handleBack = () => {
    onBack();
  };

  const resetCards = () => {
    setEditingCard(null);
    setSelectedCard(null);
    setEditText('');

    setCurrentAiPrompt('');
    resetOutlines();
  };

  // const handleGenerate = () => {

  // };

  const generateOutline = () => {
    if (currentAiPrompt === '') {
      toast({
        title: 'Пустой запрос',
        description: 'Пожалуйста, введите запрос',
        status: 'error',
      });
      return;
    }
    setIsGenerating(true);
    //WIP: запрос
  };

  useEffect(() => {
    setNoOfCards(outlines.length);
  }, [outlines.length]);

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
      <Flex
        width={'full'}
        mx={'auto'}
        maxW={'4xl'}
        px={4}
        flexDir={'column'}
        gap={4}
        alignItems={'center'}
      >
        <VStack
          width={'full'}
          textAlign={'center'}
        >
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight={'bold'}
          >
            Генерировать с помощью {' '}
            <Text
              as={'span'}
              bgGradient={'linear(to-r, #7928CA, #FF0080)'}
              bgClip={'text'}
            >
              Create AI
            </Text>
          </Heading>
          <Text color={'gray.500'}>Что вы хотите сегодня создать?</Text>
        </VStack>
        <Flex
          width={'full'}
          borderRadius={'lg'}
          border={'1px solid'}
          borderColor={'gray.200'}
          padding={4}
        >
          <Input
            variant={'unstyled'}
            placeholder="Введите промпт и добавьте в карточки"
            value={currentAiPrompt}
            onChange={(e) => setCurrentAiPrompt(e.target.value)}
            required
          />
          <Flex
            align={'center'}
            gap={0}
          >
            <Select
              variant={'unstyled'}
              value={noOfCards}
              onChange={(e) => setNoOfCards(Number(e.target.value))}
              width={'max-content'}
            >
              {
                outlines.length ? (

                  Array.from({ length: outlines.length }, (_, index) => index + 1).map((num) => (
                    <option value={num}>{num} {num === 1 ? 'Карточка' : 'Карты'}</option>
                  ))

                ) : (
                  <option value="0">Нет карточек</option>
                )
              }
            </Select>
            <IconButton
              variant={'unstyled'}
              aria-label="Reset"
              icon={<IoReload/>}
              minW={0}
              onClick={resetCards}
            />
          </Flex>
        </Flex>
        <Button isDisabled={isGenerating}>
          Сгенерировать схему
        </Button>
        <CardList
          outlines={outlines}
          addOutline={addOutline}
          addMultipleOutLines={addMultipleOutLines}
          editingCard={editingCard}
          selectedCard={selectedCard}
          editText={editText}
          onEditChange={setEditText}
          onCardSelect={setSelectedCard}
          onCardDoubleClick={(id, title) => {
            setEditingCard(id);
            setEditText(title);
          }}
          setEditText={setEditText}
          setEditingCard={setEditingCard}
          setSelectedCard={setSelectedCard}
        />

        {
          outlines.length > 0 ? (
            <Button
              width={'full'}
              onClick={generateOutline}
              isDisabled={isGenerating}
            >
              {
                isGenerating ? (
                  <Spinner size={'sm'}/>
                ) : (
                  'Сгенерировать'
                )
              }
            </Button>
          ) : null
        }
      </Flex>
    </>
  );
};

export default CreateAI;