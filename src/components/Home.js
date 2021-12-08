import { Box, Center, Button, ButtonGroup, Text, Stack, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const formOptions = ['producto', 'cliente', 'vendedor', 'servicio', 'delivery']
    const [ selectedForm, setSelectedForm ] = useState()

    
    return ( 
        <Stack bg='teal' direction='row' p={20} justify='center' h='100vh'>
            <VStack>
                <HStack justify align p={20}>
                    <Text fontSize={24} fontWeight={700} color='white'>Elegí un tipo de formulario</Text>
                </HStack>
                <HStack justify='center'>
                    <ButtonGroup>
                        { formOptions.map( option => { 
                            return (    <Link to={`/create-form/${option}`}>
                                    <Button onClick={ ( ) => setSelectedForm( option ) }> { option } </Button>
                                </Link>)
                             })}
                    </ButtonGroup>
                </HStack>
            </VStack>
        </Stack>
     );
}
 
export default Home;