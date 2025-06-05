import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../feature/home/Header';
import Sidebar from '../ui/Sidebar/Sidebar';

const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <VStack align={'start'}>
      <Header/>
      <HStack
        width={'full'}
        align={'start'}
        gap={{ base: 0, md: 4 }}
      >
        <Sidebar/>
        <Box
          width={'full'}
          height={'full'}
          p={6}
        >
          {children}
        </Box>
      </HStack>
    </VStack>
  );
};

export default AppLayout;