import { Box, Button, Flex, Text } from "@chakra-ui/react";

export function Landing() {
  return (
    <Box
      backgroundImage="url(/landing.jpg)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="100vh"
      width="100%"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gap={4}
        height="100%"
        textAlign="center"
      >
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          color="white"
          textShadow="0 0 12px rgba(255,255,255,0.6)"
        >
          Global Vision. Human Impact.
        </Text>

        <Text
          whiteSpace="nowrap"
          fontSize={{ base: "2xl", md: "6xl" }}
          color="white"
          textShadow="0 0 12px rgba(255,255,255,0.6)"
        >
          ALGAR ALLY INTERNATIONAL
        </Text>

        <Flex gap={3} mt={4}>
          <Button
            boxShadow="0 0 12px rgba(255,255,255,0.6)"
            color="rgb(12, 60, 96)"
            backgroundColor="white"
            borderRadius="none"
            fontSize="md"
            fontWeight="bold"
            size={{ base: "md", md: "lg" }}
            _hover={{
              backgroundColor: "rgb(12, 60, 96)",
              color: "white",
              transition: "0.3s",
            }}
          >
            Explore Our Solutions
          </Button>

          <Button
            boxShadow="0 0 12px rgba(255,255,255,0.6)"
            color="rgb(12, 60, 96)"
            backgroundColor="white"
            borderRadius="none"
            fontSize="md"
            fontWeight="bold"
            size={{ base: "md", md: "lg" }}
            _hover={{
              backgroundColor: "rgb(12, 60, 96)",
              color: "white",
              transition: "0.3s",
            }}
          >
            Partner with Us
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
