import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { SidebarItemType } from './config';

type Props = SidebarItemType

const SidebarItem = ({ icon, name, path }: Props) => {
  const router = useRouter();

  const Icon = useMemo(() => {
    return icon;
  }, [icon]);

  return (
    <Button
      variant={'ghost'}
      width={'100%'}
      leftIcon={<Icon />}
      onClick={() => router.push(path)}
      justifyContent={'start'}
      fontWeight={500}
      isActive={router.pathname === path}
      _active={{
        bg: 'blue.500',
        color: 'white',
      }}
      _hover={{
        bg: 'blue.300',
        color: 'white',
      }}
    >
      {name}
    </Button>
  );
};

export default SidebarItem;