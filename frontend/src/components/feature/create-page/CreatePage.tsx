import { Button, Card, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import RecentPrompts from './GenerateAI/RecentPrompts';
import { CreatePageCard } from '@/lib/constants';
import usePropmtStore from '@/store/usePropmtStore';

type Props = {
  onSelectption: (option: string) => void
}

const CreatePage = ({ onSelectption }: Props) => {
  const { prompts } = usePropmtStore();

  return (
    <VStack
      width={'full'}
      align={'center'}
    >
      <Heading>Как бы ты хотел начать?</Heading>
      <Text
        color={'gray.600'}
        mb={8}
      >Выберите предпочитаемый вами метод для начала работы</Text>
      <Flex
        width={'full'}
        flexDir={{ base: 'column', md: 'row' }}
        gap={4}
      >
        {
          CreatePageCard.map((option) => (
            <Card
              key={option.title}
              borderRadius={'md'}
              backgroundColor={'blackAlpha.50'}
              padding={4}
              gap={4}
              sx={option.highlight ? {
                border: '2px solid',
                borderColor: '#FF0080',
                'h1': {
                  bgGradient: 'linear(to-b, #7928CA, #FF0080)',
                  bgClip: 'text',
                },
              }: {
                border: '1px solid',
                borderColor: 'gray.300',
              }}
              _hover={{
                transform: 'translateX(5px) rotate(1deg)',
                boxShadow: 'lg',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Heading size={'sm'} >{option.title}</Heading>
              <Heading
                as={'h1'}
                size={'lg'}
              >{option.highlightedText}</Heading>
              <Text >{option.description}</Text>
              <HStack justify={'flex-end'}>
                <Button
                  border={'1px solid'}
                  borderColor={'blackAlpha.300'}
                  variant={'outline'}
                  onClick={() => onSelectption(option.type)}
                >
                  {option.highlight ? 'Генерация' : 'Выбрать'}
                </Button>
              </HStack>
            </Card>
          ))
        }
      </Flex>
      {prompts.length ? <RecentPrompts/> : null}
    </VStack>
  );
};

export default CreatePage;