import type { AppProps } from "next/app"
import { FC } from "react"

import CartProvider from "@/components/CartProvider"

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

export default CustomApp
