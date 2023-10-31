import { GeistSans } from "geist/font";
import "~/styles/globals.css";
import { ThemeProvider } from "~/ui/theme-provider";
import Navbar from "./Navbar";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
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
    )
  }