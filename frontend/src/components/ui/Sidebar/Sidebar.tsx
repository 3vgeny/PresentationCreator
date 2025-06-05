import { VStack } from '@chakra-ui/react';
import React from 'react';
import SidebarItem from './SidebarItem';
import { sidebar } from './config';

const Sidebar = () => {
  return (
    <VStack
      width={{ base: 0, md: '15%' }}
      minW={{ base: 0, md: '250px' }}
      opacity={{ base: 0, md: 1 }}
      overflow={'hidden'}
      align={'start'}
      padding={{ base: 0, md: 4 }}
      transition={'all 0.5s ease-in-out'}
    >
      {
        sidebar.map((item) => (
          <SidebarItem
            key={item.name}
            {...item}
          />
        ))
      }
    </VStack>
  );
};

export default Sidebar;