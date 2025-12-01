"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Footer() {
  return (
    <Box backgroundColor="rgb(7, 33, 54)">
      <Flex
        flexDir="column"
        maxWidth="1280px"
        px={3}
        py={10}
        mx="auto"
        gap={4}
        color="white"
      >
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Flex flexDir="column" gap={4}>
            <Link href="/">
              <Text fontWeight="bold">ALGAR ALLY INTERNATIONAL</Text>
            </Link>

            <Box>
              <Text>Philippines: </Text>
              <Text>1668 Meriton One, Room 202</Text>
              <Text>Quezon City Ave., Brgy. South Triangle</Text>
              <Text>Quezon City, Metro Manila</Text>
            </Box>

            <Box>
              <Text>USA: </Text>
              <Text>1040 N Kings Highway, Suite 400</Text>
              <Text>Cherry Hill, NJ 08002</Text>
            </Box>
          </Flex>
          <Flex flexDir="column" gap={4} color="white">
            <Text fontWeight="bold">COMPANY</Text>
            <Link href="/about">
              <Text>About</Text>
            </Link>
          </Flex>
        </Flex>
        <Text>© ALGAR ALLY INTERNATIONAL, {new Date().getFullYear()}</Text>
      </Flex>
    </Box>
  );
}
