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
    Box
  } from '@chakra-ui/react';
  import {useState} from 'react';

import { Link, useParams } from 'react-router-dom';

const Form = () => {

    const [sku, setSku] = useState('');
    const [type, setType] = useState('garantia');
    const [days, setDays] = useState(0);

    const handleSubmit = event => {
      event.preventDefault();
      alert(`SKU: ${sku}, type: ${type}, days of validity: ${days}`);
    };

    return ( 
        <Box w='100%' p='10%' m='auto'>
            <Center w='30%' m='auto' p={5} borderRadius={5} boxShadow="0px 0px 0px 2px rgba(0, 0, 0, 0.1)">
                <form onSubmit={handleSubmit} >
                <FormControl id='sku' >
                <FormLabel>Ingrese el SKU</FormLabel>
                    <Input type='sku'  placeholder='Ingrese letras y/o números.' onChange={event => setSku(event.currentTarget.value)}/>
                </FormControl>
                <FormControl id='type' >
                <FormLabel as='tipo' mt={10}>Elija un tipo de servicio</FormLabel>
                <RadioGroup  colorScheme='teal' onChange={setType} value={type}>
                    <HStack spacing='24px'>
                    <Radio value='garantia'>Garantía</Radio>
                    <Radio value='devolucion'>Devolución</Radio>
                    </HStack>
                </RadioGroup>
                </FormControl>
                <FormControl id='days' >
                <FormLabel mt={10}>Días de vigencia</FormLabel>
                    <Input type='number'  placeholder='' onChange={event => setDays(event.currentTarget.value)}/>
            </FormControl>
            <Button colorScheme='teal' mt={4} type="submit">
              Enviar
            </Button>
            </form>
            </Center>
            <Center mt={10}>
            <Link to='/'>
                <Button colorScheme='teal' variant='ghost'>Volver</Button>
            </Link>
            </Center>
        </Box>
     );
}
 
export default Form;