import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const InputField = ({ type, label, placeholder, defaultValue, validate, invalidMsg }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={(event) => setValue(event.currentTarget.value)}
        value={value}
        errorBorderColor='red.500'
        isInvalid={validate(value)  ? true : false}
        
      />
      {validate(value) &&
      <Text color='red'>{invalidMsg}</Text> }
    </FormControl>
  );
};

export default InputField;
