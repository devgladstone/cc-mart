import { useState } from "react";
import { useQuery } from "urql";
import Heading from "../Layout/Heading";
import UserItemList from "./UserItemList";
import CartSlideOver from "./Cart/CartSlideOver";

export default function UserPage() {
  const [cart, setCart] = useState({
    list: [],
    ids: new Set(),
  });
  const [open, setOpen] = useState(false);

  const [result] = useQuery({
    query: `
      query {
        item {
          id
          name
          description
          cost
          img_url
        }
      }
    `,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="space-y-2">
      <Heading text="Browse items" buttonText="View Cart" setState={setOpen} />
      <CartSlideOver
        cartList={cart.list}
        open={open}
        setOpen={setOpen}
        cart={cart}
        setCart={setCart}
      />
      <UserItemList
        items={data.item}
        setOpen={setOpen}
        setCart={setCart}
      ></UserItemList>
    </div>
  );
}
