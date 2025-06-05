import { Flex } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren

const Layout = ({ children }: Props) => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      overflowX={'hidden'}
    >
      {children}
    </Flex>
  );
};

export default Layout;