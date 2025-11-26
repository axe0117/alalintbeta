import { ColorModeButton } from "@/components/ui/color-mode";
import { Landing } from "./Landing";
import { WhoWeAre } from "./WhoWeAre";
import { AlgarFramework } from "./AlgarFramework";
import { WhatWeDo } from "./WhatWeDo";
import { WhyPartnersChooseUs } from "./WhyPartnersChooseUs";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Landing />
      <WhoWeAre />
      <AlgarFramework />
      <VStack gap={12}>
        <WhatWeDo />
        <WhyPartnersChooseUs />
      </VStack>
      <ColorModeButton />
    </>
  );
}
