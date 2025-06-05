import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const NewProjectButton = () => {
  const router = useRouter();

  return (
    <Button
      leftIcon={<AddIcon/>}
      onClick={() => router.push('/create-page')}
    >
      Новый проект
    </Button>
  );
};

export default NewProjectButton;