import { Button, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import InputForm from '@/components/ui/InputForm';

const RegisTab = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    console.log({ login, password, firstName, lastName });
  };

  return (
    <VStack
      width={'full'}
      gap={5}
      pt={8}
      flex={1}
    >
      <InputForm
        label="Имя"
        value={firstName}
        onChange={setFirstName}
        type="text"
      />
      <InputForm
        label="Фамилия"
        value={lastName}
        onChange={setLastName}
        type="text"
      />
      <InputForm
        label="Логин"
        value={login}
        onChange={setLogin}
        type="text"
      />
      <InputForm
        label="Пароль"
        value={password}
        onChange={setPassword}
        type="text"
      />
      <Button
        width={'100%'}
        onClick={onSubmit}
      >
        Зарегистрироваться
      </Button>
    </VStack>
  );
};

export default RegisTab;