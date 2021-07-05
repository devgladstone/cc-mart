/* This example requires Tailwind CSS v2.0+ */
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useState } from "react";
import AdminItemEdit from "./AdminItemEdit"

export default function Admin({ item }) {
  const [expanded, setExpanded] = useState(false);

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
          <button onClick={() => setExpanded(!expanded)} type="button">
            <PencilAltIcon
              className="flex-shrink-0 h-6 w-6 text-gray-600"
              aria-hidden="true"
            />
          </button>
          <button onClick={() => setExpanded(!expanded)} type="button">
            <TrashIcon
              className="flex-shrink-0 h-6 w-6 text-red-600 ml-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      {expanded && (
        <AdminItemEdit {...item} setExpanded={setExpanded} />
      )}
    </div>
  );
}
