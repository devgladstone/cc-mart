import { useState } from "react";
import { useQuery } from "urql";
import AdminItemCreate from "./AdminItemCreate";
import AdminItem from "./AdminItem";
import Heading from "./Heading";
import Modal from "./Modal";

export default function AdminPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [modal, setModal] = useState(false);
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
    <div className="space-y-4">
      <Modal
        open={modal}
        setOpen={setModal}
        text="Success!"
        buttonText="Continue"
      ></Modal>
      <Heading
        text="Add items"
        buttonText="Add new item"
        setState={setIsCreating}
      />
      <div className="pb-4">
        {isCreating && (
          <AdminItemCreate setIsCreating={setIsCreating} setModal={setModal} />
        )}
      </div>
      {data.item.map((item) => (
        <AdminItem key={item.id} item={item} setModal={setModal} />
      ))}
    </div>
  );
}
