/* This example requires Tailwind CSS v2.0+ */
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useState } from "react";
import AdminItemEdit from "./AdminItemEdit";
import { useMutation } from "urql";

const DELETE_ITEM = `
mutation ($id: Int!) {
  delete_item_by_pk(id: $id) {
    id
  }
}
`;

export default function Admin({ item }) {
  const [editing, setEditing] = useState(false);
  const [, executeDelete] = useMutation(DELETE_ITEM);

  const onDelete = async () => {
    let confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      console.log(confirmed);
      try {
        await executeDelete({
          id: item.id,
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <span className="flex divide-x space-x-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {item.name}
          </h3>
          {/* <h3 className="pl-2 text-sm leading-6 font-medium text-gray-600 max-w-0 sm:max-w-xs lg:max-w-md truncate">
            {description}
          </h3> */}
        </span>
        <div>
          <button onClick={() => setEditing(!editing)} type="button">
            <PencilAltIcon
              className="flex-shrink-0 h-6 w-6 text-gray-600"
              aria-hidden="true"
            />
          </button>
          <button onClick={onDelete} type="button">
            <TrashIcon
              className="flex-shrink-0 h-6 w-6 text-red-600 ml-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      {editing && <AdminItemEdit {...item} setEditing={setEditing} />}
    </div>
  );
}
