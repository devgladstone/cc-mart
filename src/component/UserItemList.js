/* This example requires Tailwind CSS v2.0+ */
import UserItem from "./UserItem";

export default function UserItemList({ items, setOpen, setCart }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <UserItem key={item.id} item={item} setOpen={setOpen} setCart={setCart}/>
      ))}
    </ul>
  );
}
