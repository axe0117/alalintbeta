import {
  Box,
  Card,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";
import { FaCross, FaRobot, FaUserDoctor } from "react-icons/fa6";
import { RiCommunityFill, RiGovernmentLine } from "react-icons/ri";

export function WhyPartnersChooseUs() {
  const reasons = [
    { text: "Truly Global Reach", icon: <CiGlobe /> },
    {
      text: "Strong Government & Enterprise Alliances",
      icon: <RiGovernmentLine />,
    },
    { text: "AI Innovation That Works in Real Life", icon: <FaRobot /> },
    {
      text: "World-Class Healthcare & Workforce Expertise",
      icon: <FaUserDoctor />,
    },
    { text: "Community Impact at Scale", icon: <RiCommunityFill /> },
    { text: "Faith-rooted integrity and purpose", icon: <FaCross /> },
  ];

  return (
    <Flex
      maxWidth="1280px"
      justifyContent="space-around"
      alignItems="center"
      mx="auto"
      flexWrap="wrap"
      p={3}
      flexDir="column"
    >
      <Text fontSize="4xl" fontWeight="bold" color="rgb(7, 33, 54)">
        Why Partners Choose Us
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={3}>
        {reasons.map((reason, index) => {
          return (
            <GridItem key={index}>
              <Card.Root
                height="100%"
                borderRadius="none"
                background="none"
                border="none"
              >
                <Card.Body p={3} alignItems="center">
                  <Icon size="2xl" width="75px" height="75px">
                    {reason.icon}
                  </Icon>
                  <Text textAlign="center" fontWeight="bold" fontSize="xl">
                    {reason.text}
                  </Text>
                </Card.Body>
              </Card.Root>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
