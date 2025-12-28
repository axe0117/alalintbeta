"use client";

import { Box, Image, Flex, Drawer, Portal, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

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
      {/* Mobile Navigation Bar */}
      <Drawer.Root
        open={open}
        size={{ base: "xs", md: "md" }}
        placement="start"
        onOpenChange={(e) => setOpen(e.open)}
        initialFocusEl={() => null}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content backgroundColor="rgb(12, 60, 96)" userSelect="none">
              <Drawer.Body p={12}>
                <Link href="/">
                  <Text fontSize="2xl" fontWeight="bold" color="white" mb="20%">
                    ALGAR ALLY INTERNATIONAL
                  </Text>
                </Link>
                <Flex gap={12} flexDir="column">
                  {[
                    { name: "About", url: "/about" },
                    { name: "Explore Our Solutions", url: "/#solutions" }
                  ].map((link) => (
                    <Link href={link.url} key={link.url}>
                      <Text
                        color="white"
                        fontSize="2xl"
                        fontWeight="bold"
                        _hover={{
                          textShadow: "0 0 12px rgba(255,255,255,0.6)",
                          transition: "0.3s"
                        }}
                      >
                        {link.name}
                      </Text>
                    </Link>
                  ))}
                </Flex>
              </Drawer.Body>
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
          userSelect="none"
        >
          <Flex flexDir="row" alignItems="center" gap={2}>
            <Link href="/">
              <Image src="/algarlogo.png" alt="Logo" width="128px" height="128px" />
            </Link>
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
