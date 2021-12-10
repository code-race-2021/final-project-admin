import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const RadioButtons = ({ label, options }) => {

  const [value, setValue] = useState("");

  return (

    <FormControl>
      <FormLabel mt={10}>{label}</FormLabel>
      <RadioGroup colorScheme="teal" onChange={setValue} value={value}>
        <HStack spacing="24px">
          {options.map( opt => {
            return <Radio value={opt}>{opt}</Radio>;
          })}
        </HStack>
      </RadioGroup>
    </FormControl>

  );
};

export default RadioButtons;
