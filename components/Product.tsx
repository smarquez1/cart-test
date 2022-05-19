import { useEffect, useState } from "react"
import { useCart } from "react-use-cart"

import type { Product as ProductType } from "types"

type Props = {
  product: ProductType
}

const Product = ({ product }: Props) => {
  const { addItem, getItem, updateItemQuantity } = useCart()
  const { id, name, price } = product
  const [amount, setAmount] = useState(0)
  const [item, setItem] = useState({ quantity: amount })
  const { quantity } = item

  useEffect(() => setItem(getItem(id)), [getItem, setItem, id])

  const updateAmount = (x: number) => {
    if (x < 1) return
    if (!getItem(id)) addItem(product)

    updateItemQuantity(id, x)
  }

  return (
    <div>
      {name}

      <div>{quantity}</div>
      <div>{`$${price}`}</div>

      <div>
        <button onClick={() => setAmount(amount - 1)}>-</button>
        {amount}
        <button onClick={() => setAmount(amount + 1)}>+</button>
        <button onClick={() => updateAmount(amount)}>Add</button>
      </div>
    </div>
  )
}

export default Product
