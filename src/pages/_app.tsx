import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      body: `'Lato', sans-serif`
    },
    colors: {
      textPrimary: "#151875",
      bgBlue: "#7E33E0",      // navbar
      bgPrimary: "#F6F5FF",   // product card
      bgSecondary: "#FB2E86", // red
      bgTertiary: "#F6F5FF",  // btn add to cart in product card
      bgHoverBlue: "#8852CF",
      divider: "#F3F4F5",
      border01: "#BFC9D9"
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
