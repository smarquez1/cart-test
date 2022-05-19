import { useRouter } from "next/router"
import { useEffect } from "react"
import { useCart } from "react-use-cart"

import Product from "@/components/Product"

export default function Shop() {
  const shop = {
    name: "Shop",
    slug: "slug",
  }

  const products = [
    {
      id: "1",
      name: "One product",
      price: 100,
    },
    {
      id: "2",
      name: "Another product",
      price: 101,
    },
  ]

  const router = useRouter()
  const { totalUniqueItems, isEmpty, setCartMetadata, metadata, emptyCart } =
    useCart()
  const { name, slug } = shop

  useEffect(() => {
    if (slug != metadata?.slug) {
      setCartMetadata({ slug })
      emptyCart()
    }
  }, [metadata, setCartMetadata, emptyCart, slug])

  return (
    <>
      <h1>{name}</h1>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <hr />

      <button disabled={isEmpty} onClick={() => router.push("/cart")}>
        Revisar mi pedido {totalUniqueItems}
      </button>
    </>
  )
}
