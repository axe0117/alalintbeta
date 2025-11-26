import { Card, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

export function AlgarFramework() {
  return (
    <Flex
      mx="auto"
      flexDir="row"
      maxWidth="1280px"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      p={3}
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={3}>
        <GridItem
          colSpan={{ base: 1, md: 2 }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            mt={{ base: "0%", md: "40%" }}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            color="rgb(7, 33, 54)"
          >
            The ALGAR Framework
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Flex flexDir="column" gap={4}>
            {[
              {
                title: "A - Alliance Building",
                description:
                  "Forging global partnerships across governments, industries, and institutions to expand opportunities and create worldwide networks.",
              },
              {
                title: "L - Leadership in Innovation",
                description:
                  "Implementing AI healthcare systems, digital platforms, BPO technologies, and smartsolutions that accelerate growth and efficiency.",
              },
              {
                title: "G - Global Workforce Excellence",
                description:
                  "Recruiting, training, and mobilizing top-tier medical professionals, call center specialists,and international talent.",
              },
              {
                title: "A - Advanced Community Development",
                description:
                  "Designing smart, sustainable housing and healthcare infrastructures that strengthen cities and improve quality of life.",
              },
              {
                title: "R - Redemptive Service & Faith Ministry",
                description:
                  "Serving communities and partners with compassion, purpose, and faith-centered values that foster hope, empowerment, and ethical leadership.",
              },
            ].map((content, index) => (
              <Card.Root
                key={index}
                borderRadius="none"
                backgroundColor="rgb(12, 60, 96)"
              >
                <Card.Body p={3} gap={2}>
                  <Text fontWeight="bold" fontSize="xl" color="white">
                    {content.title}
                  </Text>
                  <Text fontWeight="thin" color="white">
                    {content.description}
                  </Text>
                </Card.Body>
              </Card.Root>
            ))}
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
}
