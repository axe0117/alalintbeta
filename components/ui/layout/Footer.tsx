"use client";

import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Footer() {
  return (
    <Box backgroundColor="rgb(7, 33, 54)">
      <Box maxWidth="1280px" px={3} py={10} mx="auto">
        <Link href="/">
          <Text color="white">ALGAR ALLY INTERNATIONAL</Text>
        </Link>

        <Box color="white" my={2}>
          <Text>Philippines: </Text>
          <Text>1668 Meriton One Room 202</Text>
          <Text>Quezon City Ave. Brgy South Triangle</Text>
          <Text>Quezon City</Text>
        </Box>

        <Box color="white">
          <Text>USA: </Text>
          <Text>1040 N. Kings Highway Suite 400</Text>
          <Text>Cherry Hill NJ 08002</Text>
        </Box>
      </Box>
    </Box>
  );
}
