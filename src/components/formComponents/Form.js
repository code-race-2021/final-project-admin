import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Radio,
  RadioGroup,
  HStack,
  Center,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Form = ({ formData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('event', event)

      // TODO - send data somewhere
  };

  return (
    <Box w="100%" p="10%" m="auto">
      <Center
        w="30%"
        m="auto"
        p={5}
        borderRadius={5}
        boxShadow="0px 0px 0px 2px rgba(0, 0, 0, 0.1)"
      >
        <form onSubmit={handleSubmit}>
          {formData}
          <Button colorScheme="teal" mt={4} type="submit">
            Enviar
          </Button>
        </form>
      </Center>
      <Center mt={10}>
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">
            Volver
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default Form;
