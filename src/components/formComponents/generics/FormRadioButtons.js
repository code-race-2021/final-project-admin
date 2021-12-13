import {
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
  FormControl
} from "@chakra-ui/react";
import { useState } from "react";

const RadioButtons = ({ required, label, options }) => {
  const [value, setValue] = useState("");

  return (
    <FormControl isRequired={required}>
      <FormLabel mt={10}>{label}</FormLabel>
      <RadioGroup colorScheme="teal" onChange={setValue} value={value}>
        <HStack spacing="24px">
          {options.map((opt) => {
            return <Radio value={opt}>{opt}</Radio>;
          })}
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
