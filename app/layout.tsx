import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { NavigationBar } from "@/components/ui/layout/NavigationBar";
import { Box } from "@chakra-ui/react";
import { Footer } from "@/components/ui/layout/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Home | Alagar Ally International",
  description: "Algar Ally International is a visionary global cross-border accelerator committed to accelerating progress through the fusion of intelligent technologies and human-centered services. We partner with governments, businesses, and communities to deliver transformative solutions that address real-world challenges—at scale and across borders."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={montserrat.className} lang="en" suppressHydrationWarning>
      <body>
        <Provider defaultTheme="light">
          <NavigationBar />
          <Box mx="auto" minHeight="100vh">
            {children}
          </Box>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
