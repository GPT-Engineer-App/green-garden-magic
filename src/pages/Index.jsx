import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaLeaf, FaWater, FaCut, FaSeedling } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-br, green.300, yellow.400)">
      <VStack spacing={4} p={5} bg="whiteAlpha.900" borderRadius="lg" boxShadow="md">
        <Heading as="h1" size="xl" color="green.600">
          RHS Garden Services
        </Heading>
        <Text fontSize="md" color="gray.600">
          Your Trusted Gardener
        </Text>
        <List spacing={3} textAlign="left" width="100%">
          <ListItem>
            <ListIcon as={FaCut} color="green.500" />
            Lawn Mowing
          </ListItem>
          <ListItem>
            <ListIcon as={FaLeaf} color="green.500" />
            Hedge Trimming
          </ListItem>
          <ListItem>
            <ListIcon as={FaSeedling} color="green.500" />
            Weeding
          </ListItem>
          <ListItem>
            <ListIcon as={FaWater} color="green.500" />
            Power Washing
          </ListItem>
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
