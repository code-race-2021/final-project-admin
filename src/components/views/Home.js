import {
  Button,
  Text,
  Stack,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";
import  {formOptions}  from "../../utils/Constants";

const Home = () => {

  return (
    <Stack bg="teal" direction="row" p={20} justify="center" h="100vh">
      <VStack>
        <HStack justify align p={20}>
          <Text fontSize={24} fontWeight={700} color="white">
            Elegí un tipo de formulario
          </Text>
        </HStack>
        <HStack justify="center">
            { formOptions.map( option => <Button as={Link} href={`/create-form/${option}`} children={option}/>) }
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Home;