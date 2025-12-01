import {
  Box,
  Card,
  Flex,
  GridItem,
  List,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

export function WhatWeDo() {
  const items = [
    {
      number: "01",
      title: "AI Healthcare Integration",
      list: [
        "Smart EMR systems",
        "Telehealth platforms",
        "AI diagnostics & analytics"
      ]
    },
    {
      number: "02",
      title: "BPO & Call Center Operations",
      list: [
        "Multilingual support",
        "Healthcare RCM",
        "Customer success & tech support"
      ]
    },
    {
      number: "03",
      title: "Medical & International Workforce Recruitment",
      list: [
        "Nurses, Physical Therapists",
        "Credentialing pipelines",
        "US/Canada placements"
      ]
    },
    {
      number: "04",
      title: "Smart Housing & Community Development",
      list: [
        "AI-enabled housing",
        "Affordable sustainable townships",
        "Medical community integration"
      ]
    },
    {
      number: "05",
      title: "Faith Ministry & Community Empowerment",
      list: [
        "Missions",
        "Leadership Development",
        "Family and spiritual programs"
      ]
    }
  ];

  return (
    <Box maxWidth="1280px" mx="auto" p={3} my="3%" id="solutions">
      <Text fontSize="5xl" color="rgb(7, 33, 54)">
        What We Do
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3}>
        {items.map((content, index) => (
          <GridItem key={index}>
            <Card.Root
              borderRadius="none"
              height="100%"
              backgroundColor="rgb(12, 60, 96)"
            >
              <Card.Body p={3} gap={2}>
                <Box height="100px">
                  <Text fontSize="3xl" color="white" textShadow="0 0 12px rgba(255,255,255,1.0)">
                    {content.number}.
                  </Text>
                  <Text fontSize="xl" color="white" textShadow="0 0 12px rgba(255,255,255,1.0)">
                    {content.title}
                  </Text>
                </Box>
                <List.Root>
                  {content.list.map((item, index) => (
                    <List.Item
                      key={index}
                      ml={8}
                      fontSize="md"
                      fontWeight="bold"
                      color="white"
                      textShadow="0 0 12px rgba(255,255,255,0.6)"
                    >
                      {item}
                    </List.Item>
                  ))}
                </List.Root>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
