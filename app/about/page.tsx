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
              A visionary global cross-border accelerator committed to 
              accelerating progress through the fusion of intelligent technologies 
              and human-centered services. We partner with governments, businesses, 
              and communities to deliver transformative solutions that address 
              real-world challenges—at scale and across borders.
            </Text>
            <Text>
              Guided by a mission to bridge innovation with impact, we design and 
              deploy sustainable, scalable systems that uplift lives, strengthen 
              institutions, and drive inclusive growth. Our work spans sectors and 
              continents, uniting diverse stakeholders through strategic partnerships 
              that turn bold ideas into measurable outcomes.
            </Text>
            <Text>
              At our core, Algar Ally is more than a connector—
              <br />
              <Span fontWeight="bold" textDecor="underline" fontSize="xl">
                We are a catalyst for global resilience, equity, and advancement.
              </Span>
            </Text>

            <Text color="rgb(7, 33, 54)" fontSize="4xl">
              Mission Statement
            </Text>
            <Text>
              To accelerate global progress by integrating intelligent technologies 
              with human-centered services—empowering governments, businesses, and communities 
              through transformative solutions and visionary partnerships. Algar Ally International 
              exists to bridge innovation with impact, delivering sustainable, scalable systems that 
              uplift lives, strengthen institutions, and drive inclusive growth across borders.
            </Text>

            <Text color="rgb(7, 33, 54)" fontSize="4xl">
              Vision Statement
            </Text>
            <Text>
              To be the world’s most trusted bridge between innovation and impact—empowering nations, 
              industries, and communities to thrive through transformative solutions, inclusive 
              collaboration, and sustainable growth.
            </Text>
            <Span></Span>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 2 }}>
          <Image src="/about.jpg" />
        </GridItem>

      </SimpleGrid>
    </Flex>
  );
}
