import { useState } from "react";
import { useQuery } from "urql";
import CreateForm from "./CreateForm";
import AdminItemList from "./AdminItemList";

export default function AdminPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [result, reexecuteQuery] = useQuery({
    query: `
      query {
        item {
          id
          name
          description
          cost
        }
      }
    `,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <div className="pb-4">
        {isCreating ? (
          <CreateForm setIsCreating={setIsCreating} />
        ) : (
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600"
            onClick={() => setIsCreating(true)}
          >
            Create new item
          </button>
        )}
      </div>
      <AdminItemList items={data.item}></AdminItemList>
    </div>
  );
}
