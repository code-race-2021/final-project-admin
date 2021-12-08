import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

const InputField = ({ type, label, placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={(event) => setValue(event.currentTarget.value)}
        value={value}
      />
    </FormControl>
  );
};

export default InputField;
