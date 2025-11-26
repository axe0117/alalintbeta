import { Box, Button, Flex, Text } from "@chakra-ui/react";

export function WhoWeAre() {
  return (
    <Box
      position="relative"
      backgroundImage="url(/mountains.jpg)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100%"
      py={{ base: 16, md: 24 }}
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(216, 232, 242, 0.8)",
        zIndex: 0,
      }}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
        position="relative"
        zIndex={1}
        textAlign="center"
        px={3}
      >
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          color="rgb(7, 33, 54)"
          fontWeight="bold"
        >
          Who We Are
        </Text>

        <Text
          maxW="600px"
          fontSize={{ base: "md", md: "lg" }}
          color="rgb(7, 33, 54)"
        >
          Algar Ally International is a global connector dedicated to
          integrating intelligent technologies with human-centered services. We
          partner with governments, hospitals, corporations, ministries, and
          communities to create sustainable, transformative solutions across
          borders.
        </Text>

        <Button
          variant="ghost"
          background="none"
          border="1px solid rgb(12, 60, 96)"
          borderRadius="none"
          size="lg"
          color="rgb(12, 60, 96)"
          _hover={{ backgroundColor: "rgb(12, 60, 96)", color: "white" }}
        >
          Learn More
        </Button>
      </Flex>
    </Box>
  );
}
