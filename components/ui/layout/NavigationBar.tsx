"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export function NavigationBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        // Show navbar when scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box
      py={8}
      backgroundColor="rgb(12, 60, 96)"
      position="sticky"
      top={0}
      zIndex={999}
      transition="transform 0.45s ease"
      transform={show ? "translateY(0)" : "translateY(-120%)"}
      boxShadow="md"
    >
      <Box maxWidth="1280px" px={3} mx="auto">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Text fontSize="xl" color="white">
              ALGAR ALLY INTERNATIONAL
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
