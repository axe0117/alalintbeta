import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <Box
      position="relative"
      backgroundImage="url(vroom.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100%"
      py="3%"
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(216, 232, 242, 0.8)",
        zIndex: 0
      }}
    >
      <Flex
        alignItems="center"
        flexWrap="wrap"
        maxWidth="1280px"
        mx="auto"
        flexDir="row"
        position="relative"
        justifyContent="space-between"
        zIndex={1}
        px={3}
      >
        <Text fontSize="5xl" color="rgb(7, 33, 54)" fontWeight="normal">
          Who We Are
        </Text>

        <Flex flexDir="column" gap={4}>
          <Text maxW="600px" color="rgb(7, 33, 54)">
            Algar Ally International is a global connector dedicated to
            integrating intelligent technologies with human-centered services.
            We partner with governments, hospitals, corporations, ministries,
            and communities to create sustainable, transformative solutions
            across borders.
          </Text>

          <Link href="/about">
            <Button
              w="full"
              variant="ghost"
              background="none"
              border="1px solid rgb(12, 60, 96)"
              borderRadius="none"
              size="lg"
              color="rgb(12, 60, 96)"
              fontWeight="bold"
              _hover={{ backgroundColor: "rgb(12, 60, 96)", color: "white" }}
            >
              Learn More
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
