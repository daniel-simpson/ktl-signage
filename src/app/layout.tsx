import type { Metadata } from 'next'
import './globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Montserrat, Lato } from 'next/font/google';
import Autoplay from '@/components/Autoplay';

export const lato = Lato({ weight: "400", subsets: ["latin"] });
export const montserrat = Montserrat({ weight: "800", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kyneton Toy Library',
  description: 'Digital signage for Kyneton Toy library premises',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = (process.browser) && createTheme({
    typography: {
      fontFamily: lato.style.fontFamily,
      h1: {
        fontFamily: montserrat.style.fontFamily,
      },
      h2: {
        fontFamily: montserrat.style.fontFamily,
      },
    }
  }) || {};

  return (
    <html lang="en">
      <body className={lato.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
