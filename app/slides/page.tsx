import {
  Flex,
  Image,
  Text,
  Button,
  Link
} from "@chakra-ui/react";

export default function Slides() {
  return (
    <Flex mt="2%" p={3} flexDir="column" maxWidth="1260px" mx="auto" gap={3}>
      <Text fontSize="5xl" color="rgb(7, 33, 54)">
              Events
            </Text>
      <Image src="/Slide1.PNG/">

      </Image>
      <Image src="/Slide2.PNG/">

      </Image>
      <Image src="/Slide3.PNG/">

      </Image>
      <Image src="/Slide4.PNG/">

      </Image>
      <Image src="/Slide5.PNG/">

      </Image>
      <Image src="/Slide6.PNG/">

      </Image>
      <Image src="/Slide7.PNG/">

      </Image>
      <Image src="/Slide8.PNG/">

      </Image>
      <Image src="/Slide9.PNG/">

      </Image>
      <Image src="/Slide10.PNG/">

      </Image>
      <Image src="/Slide11.PNG/">

      </Image>
      <Image src="/Slide12.PNG/">

      </Image>
      <Image src="/Slide13.PNG/">

      </Image>
      <Image src="/Slide14.PNG/">

      </Image>
      <Image src="/Slide15.PNG/">

      </Image>
      <Image src="/Slide16.PNG/">

      </Image>
      <Image src="/Slide17.PNG/">

      </Image>
      <Image src="/Slide18.PNG/">

      </Image>
      <Image src="/Slide19.PNG/">

      </Image>

      <Link href="https://form.jotform.com/253626865726065">
          <Button
            boxShadow="0 0 12px rgba(255,255,255,0.6)"
            color="rgb(12, 60, 96)"
            backgroundColor="white"
            borderRadius="none"
            fontSize="md"
            fontWeight="bold"
            size={{ base: "md", md: "lg" }}
            _hover={{
              backgroundColor: "rgb(12, 60, 96)",
              color: "white",
              transition: "0.3s"
            }}
          >
            Attendee Registration
          </Button>
          </Link>

          <Link href="https://form.jotform.com/253626561802154">
          <Button
            boxShadow="0 0 12px rgba(255,255,255,0.6)"
            color="rgb(12, 60, 96)"
            backgroundColor="white"
            borderRadius="none"
            fontSize="md"
            fontWeight="bold"
            size={{ base: "md", md: "lg" }}
            _hover={{
              backgroundColor: "rgb(12, 60, 96)",
              color: "white",
              transition: "0.3s"
            }}
          >
            Exhibitor Application
          </Button>
          </Link>
    </Flex>
  );
}
