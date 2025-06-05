import { FormControl, FormLabel, Input } from '@chakra-ui/react';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: 'text' | 'password';
}

const InputForm = ({ label, value, onChange, type }: Props) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>onChange(e.target.value)}
        placeholder={label}
      />
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
    </FormControl>
  );
};

export default InputForm;