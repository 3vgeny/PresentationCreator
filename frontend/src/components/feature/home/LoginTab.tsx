import { Button, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import InputForm from '@/components/ui/InputForm';

const LoginTab = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log({ login, password });
  };

  return (
    <VStack
      gap={5}
      pt={8}
      flex={1}
    >
      <InputForm
        label="Логн"
        value={login}
        onChange={setLogin}
        type="text"
      />
      <InputForm
        label="Пароль"
        value={password}
        onChange={setPassword}
        type="password"
      />
      <Button
        width={'100%'}
        onClick={onSubmit}
      >
        Войти
      </Button>
    </VStack>
  );
};

export default LoginTab;