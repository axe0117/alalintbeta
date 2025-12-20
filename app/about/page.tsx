import {
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Span,
  Text,
  VStack
} from "@chakra-ui/react";

export default function About() {
  return (
    <Flex mt="2%" p={3} flexDir="column" maxWidth="1280px" mx="auto" gap={3}>
      <Text fontSize="5xl" color="rgb(7, 33, 54)">
        About
      </Text>
      <Text color="rgb(7, 33, 54)" fontSize="4xl">
        Algar Ally International is...
      </Text>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={3}>
        <GridItem colSpan={{ base: 2 }}>
          <VStack gap={12} alignItems="flex-start">
            <Text>
              A global connector and multidisciplinary solutions company
              dedicated to bridging nations, industries, and communities through
              purpose-driven innovation. Founded on the belief that progress is
              strongest when technology and humanity move together, we bring a
              unique blend of advanced systems, global workforce solutions, and
              faith-rooted service to every partnership.
            </Text>
            <Text>
              We empower businesses and institutions across countries by
              integrating intelligent AI healthcare systems, establishing
              high-performance BPO and call center operations, and recruiting
              top-tier medical professionals worldwide. Our work extends beyond
              business into community upliftment through smart housing
              development and faith ministry that strengthens families and
              creates safer, smarter, and more resilient communities.
            </Text>
            <Text>
              At Algar Ally International, we see the world not as divided
              markets, but as interconnected opportunities for growth, healing,
              and transformation. Our mission is to serve as the bridge—linking
              people with purpose, nations with innovation, and communities with
              hope.
            </Text>
            <Text>
              We are more than a company.
              <br />
              <Span fontWeight="bold" textDecor="underline" fontSize="xl">
                We are a global ally for the future.
              </Span>
            </Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 2 }}>
          <Image src="/about.jpg" />
        </GridItem>

      </SimpleGrid>
    </Flex>
  );
}
