import { useState } from "react";
import { useQuery } from "urql";
import Heading from "./Heading";
import UserItemList from "./UserItemList";
import CartSlideOver from "./CartSlideOver";

export default function UserPage() {
  const [cart, setCart] = useState({
    name: "",
    description: "",
    cost: 0,
    img_url: "",
    quantity: 0,
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
      <Heading
        text="Browse items"
        buttonText="View Cart"
        setState={setOpen}
      />
      <CartSlideOver cart={cart} open={open} setOpen={setOpen} />
      <UserItemList
        items={data.item}
        setOpen={setOpen}
        setCart={setCart}
      ></UserItemList>
    </div>
  );
}
