import { Box, Button, Flex, Text } from "@chakra-ui/react";

export function Landing() {
  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src="/compressed_earth.mp4" type="video/mp4" />
      </video>
      <Flex
        mt={{ base: "50%", md: "10%" }}
        p={3}
        flexDir="column"
        maxWidth="1280px"
        mx="auto"
        position="relative"
        zIndex={1}
        color="white"
      >
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          textShadow="0 0 12px rgba(255,255,255,0.6)"
        >
          Global Vision.
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          textShadow="0 0 12px rgba(255,255,255,0.6)"
        >
          Human Impact.
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "6xl" }}
          color="white"
          textShadow="0 0 12px rgba(255,255,255,0.6)"
        >
          ALGAR ALLY INTERNATIONAL
        </Text>

        <Flex gap={2}>
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
