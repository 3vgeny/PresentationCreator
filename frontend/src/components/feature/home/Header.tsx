import { SearchIcon } from '@chakra-ui/icons';
import { Heading, HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import AuthModal from './AuthModal';
import NewProjectButton from '@/components/global/new-project-button';

const Header = () => {
  return (
    <HStack
      padding={6}
      boxShadow={'base'}
      width={'full'}
      justify={{ base: 'start', md: 'space-between' }}
      wrap={{ base: 'wrap', md: 'nowrap' }}
      gap={4}
    >
      <Heading
        display={'flex'}
        size={'md'}
        whiteSpace={'nowrap'}
        minW={'300px'}
      >Document Creator</Heading>
      <InputGroup>
        <Input
          variant={'filled'}
          placeholder="Поиск..."
        />
        <InputRightElement>
          <SearchIcon/>
        </InputRightElement>
      </InputGroup>
      <HStack>
        <NewProjectButton/>
        <AuthModal isDisplay/>
      </HStack>
    </HStack>
  );
};

export default Header;