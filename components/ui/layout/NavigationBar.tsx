"use client";

import {
  Box,
  Image,
  Flex,
  Text,
  Drawer,
  Portal,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export function NavigationBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

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
    <>
      <Drawer.Root
        open={open}
        size={{ base: "xs", md: "md" }}
        placement="start"
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content backgroundColor="rgb(7, 33, 54)">
              <Drawer.Header>
                <Drawer.Title fontSize="2xl" fontWeight="bold" color="white">
                  ALGAR ALLY INTERNATIONAL
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body></Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      <Box
        py={8}
        backgroundColor="rgb(7, 33, 54)"
        position="sticky"
        top={0}
        zIndex={999}
        transition="transform 0.45s ease"
        transform={show ? "translateY(0)" : "translateY(-120%)"}
        boxShadow="md"
      >
        <Flex
          maxWidth="1280px"
          mx="auto"
          px={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexDir="row" alignItems="center" gap={2}>
            <Image src="/logo.png" alt="Logo" width="48px" height="48px" />
          </Flex>
          <Icon
            onClick={() => setOpen(true)}
            color="white"
            width="32px"
            height="32px"
            cursor="pointer"
          >
            <GiHamburgerMenu />
          </Icon>
        </Flex>
      </Box>
    </>
  );
}
