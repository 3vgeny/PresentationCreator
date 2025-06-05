import { Box, Button, Card, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { timeAgo } from '@/lib/utils';
import useCreateAIStore from '@/store/useCreativeAiStore';
import usePropmtStore from '@/store/usePropmtStore';

const RecentPrompts = () => {
  const { prompts, setPage } = usePropmtStore();
  const { addMultipleOutLines, setCurrentAiPrompt } = useCreateAIStore();

  const handleEdit = (id: string) => {
    const prompt = prompts.find((prompt) => prompt.id === id);

    if (prompt) {
      setPage('creative-ai');
      addMultipleOutLines(prompt.outlines);
      setCurrentAiPrompt(prompt.title);
    }
  };

  return (
    <VStack
      mt={8}
      width={'full'}
      maxWidth={'3xl'}
      gap={8}
    >
      <Heading >Ваши недавные промпты</Heading>
      <VStack
        gap={4}
        width={'full'}
      >
        {/* { prompts.map((prompt) => ( */}
        <Card
          width={'full'}
          padding={4}
          justify={'space-between'}
          // bgColor={'blackAlpha.50'}
          boxShadow={'base'}
          border={'1px solid'}
          borderColor={'blackAlpha.200'}
          alignContent={'space-between'}
          flexDir={'row'}
          alignItems={'center'}
        >
          <Box>
            <Heading size={'md'}>
              {/* {prompt.title}  */}
            This title
            </Heading>
            <Text color={'gray.500'}>
            date
              {/* {timeAgo(new Date(prompt?.createdAt))} */}
            </Text>
          </Box>
          <HStack gap={4}>
            <Text
              as={'span'}
              color="red.500"
            >Creative AI</Text>
            <Button
              size={'sm'}
              onClick={() => handleEdit(prompt?.id)}
              variant={'outline'}
              borderColor={'blackAlpha.400'}
            >
            Редактировать
            </Button>
          </HStack>

        </Card>

        {/* )) } */}
      </VStack>
    </VStack>
  );
};

export default RecentPrompts;