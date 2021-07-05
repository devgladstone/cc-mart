import { useState } from "react";
import { useQuery } from "urql";
import AdminItemCreate from "./AdminItemCreate";
import AdminItemList from "./AdminItemList";
import AdminItem from "./AdminItem";
import Heading from "./Heading";

export default function AdminPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [result, reexecuteQuery] = useQuery({
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
    <div className="space-y-4">
      <Heading
        text="Add items"
        buttonText="Add new item"
        setState={setIsCreating}
      />
      <div className="pb-4">
        {isCreating && <AdminItemCreate setIsCreating={setIsCreating} />}
      </div>
      {/* <AdminItemList items={data.item}></AdminItemList> */}
      {data.item.map((item) => (
        <AdminItem key={item.id} item={item} />
      ))}
    </div>
  );
}
