import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { NavigationBar } from "@/components/ui/layout/NavigationBar";
import { Box } from "@chakra-ui/react";
import { Footer } from "@/components/ui/layout/Footer";
import { Montserrat } from "next/font/google";

const bricolage = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Alagar Ally International",
  description: "Test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={bricolage.className} lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <NavigationBar />
          <Box mx="auto">{children}</Box>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
