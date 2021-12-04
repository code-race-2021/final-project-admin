import { Box, Center, Button, ButtonGroup, Text, Stack, HStack, VStack } from '@chakra-ui/react'

const options = ['producto', 'cliente', 'vendedor', 'servicio', 'delivery']

const Home = () => {
    return ( 
        <Stack bg='tomato' direction='row' p={20} justify='center' >
            <VStack>
                <HStack justify align p={20}>
                    <Text fontSize={24} fontWeight={700} color='white'>¿Qué formulario querés crear?</Text>
                </HStack>
                <HStack justify='center'>
                    <ButtonGroup>
                        { options.map( option => { return <Button> { option } </Button> }) }
                    </ButtonGroup>
                </HStack>
            </VStack>
        </Stack>
     );
}
 
export default Home;