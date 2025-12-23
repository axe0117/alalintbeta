import {
  Box,
  Card,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
  Image
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
    { text: "AI Innovation That Works In Real Life", icon: <FaRobot /> },
    {
      text: "World-Class Healthcare & Workforce Expertise",
      icon: <FaUserDoctor />,
    },
    { text: "Community Impact at Scale", icon: <RiCommunityFill /> },
    { text: "Faith-rooted Integrity and Purpose", icon: <FaCross /> },
  ];

  return (
    <Box
    backgroundColor="rgb(12, 60, 96)"
    width="100%">
    <Flex
      my="3%"
      maxWidth="1280px"
      justifyContent="space-around"
      mx="auto"
      flexWrap="wrap"
      gap={3}
      flexDir="column"
      
    >
      <Text fontSize="5xl" color="white"
                      textShadow="0 0 12px rgba(255,255,255,0.6)">
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
                  <Text textAlign="center" fontWeight="bold" fontSize="xl"
                  color="white"
                      textShadow="0 0 12px rgba(255,255,255,0.6)">
                    {reason.text}
                  </Text>
                </Card.Body>
              </Card.Root>
            </GridItem>
            
          );
          
        })}
        <GridItem colSpan={{ base: 3}} display ={{base: 'none', md: 'block' }}>
                  <Image src="/walltablet.png"/>
                </GridItem>
      </SimpleGrid>
    </Flex>
    </Box>
  );
}
