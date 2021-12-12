import { FormLabel, FormControl, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const FormInputField = ({ required, type, label, placeholder, validate, invalidMsg }) => {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false)

  const handleOnChange = (event) => {
    let newValue = event.target.value
    let fieldIsFilled = newValue !== ""
    setValue(newValue)
    setIsInvalid(fieldIsFilled && validate(newValue))
  }

  return (
    <FormControl isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        errorBorderColor="red.500"
        isInvalid={isInvalid}
      />
      {isInvalid && <Text color="red">{invalidMsg}</Text>}
    </FormControl>
  );
};

export default FormInputField;
