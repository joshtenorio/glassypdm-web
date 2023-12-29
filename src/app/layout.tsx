import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import { ThemeProvider } from "../ui/theme-provider";
import Navbar from "./Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
            <ThemeProvider attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
              <Navbar/>
            {children}
            </ThemeProvider>
            </body>
      </html>
      </ClerkProvider>
    )
  }