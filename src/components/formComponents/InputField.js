import { FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const InputField = ({ type, label, placeholder, validate, invalidMsg }) => {
  const [value, setValue] = useState(placeholder);

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={(event) => setValue(event.currentTarget.value)}
        value={value}
        errorBorderColor="red.500"
        isInvalid={validate(value)}
      />
      {validate(value) && <Text color="red">{invalidMsg}</Text>}
    </>
  );
};

export default InputField;
