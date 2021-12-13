import { Center, Button, Box, Link } from "@chakra-ui/react";

const Form = ({ formData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
          <Center flexDirection="column" justifyContent="center" p={5}>
            {formData}

            <Button colorScheme="teal" type="submit" mt={5} w="100%">
              Enviar
            </Button>
          </Center>
        </form>
      </Center>
      <Center mt={10}>
        <Button
          as={Link}
          href="/"
          children={"Volver"}
          colorScheme="teal"
          variant="ghost"
        />
      </Center>
    </Box>
  );
};

export default Form;