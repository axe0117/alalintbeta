import { ColorModeButton } from "@/components/ui/color-mode";
import { Landing } from "./components/Landing";
import { WhoWeAre } from "./components/WhoWeAre";
import { AlgarFramework } from "./components/AlgarFramework";
import { WhatWeDo } from "./components/WhatWeDo";
import { WhyPartnersChooseUs } from "./components/WhyPartnersChooseUs";

export default function Home() {
  return (
    <>
      <Landing />
      <WhoWeAre />
      <AlgarFramework />
      <WhatWeDo />
      <WhyPartnersChooseUs />
      <ColorModeButton />
    </>
  );
}
