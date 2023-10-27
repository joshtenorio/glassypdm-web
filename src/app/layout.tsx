import "~/styles/globals.css";
import { ThemeProvider } from "~/ui/theme-provider";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <ThemeProvider attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
            {children}
            </ThemeProvider>
            </body>
      </html>
    )
  }