import { Box, Button, Flex, Heading, Textarea } from '@chakra-ui/react'

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Box as="header" bg="gray.900" py={4}>
        <Heading textAlign="center" color="gray.100">TTS demo</Heading>
      </Box>
      <Flex flex="1" align="center" justify="center" p={4}>
        <Box bg="gray.700" p={6} borderRadius="md" w="50%">
          <Textarea placeholder="Enter text" h="20vh" mb={4} />
          <Button bg="gray.200" color="gray.800" _hover={{ bg: 'gray.300' }}>
            Generate
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default App
