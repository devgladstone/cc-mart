import { useState } from "react";
import { useMutation } from "urql";
import Loading from "./Loading";
import ItemForm from "./ItemForm";

const UPDATE_ITEM = `
mutation ($id: Int!, $input: item_set_input!) {
  update_item_by_pk(pk_columns: {id: $id}, _set: $input) {
    id
    name
  }
}

`;

export default function AdminItemEdit({
  id,
  name,
  description,
  cost,
  img_url,
  setExpanded,
}) {
  const [state, setState] = useState({
    name: name,
    description: description,
    cost: Number(cost.slice(1)),
    img_url: img_url,
  });
  const [isLoading, setLoading] = useState(false);

  const [, executeUpdate] = useMutation(UPDATE_ITEM);

  const onCancel = () => {
    setExpanded(false);
    setState({
      name: name,
      description: description,
      cost: Number(cost.slice(1)),
      img_url: img_url,
    });
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      await executeUpdate({
        id: id,
        input: {
          ...state,
          modified_on: new Date().toISOString(),
        },
      });
      setExpanded(false);
      setLoading(false);
      alert("Item updated!");
    } catch (err) {
      setLoading(false);
      alert("Error updating!");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading text="Updating item..." />
      ) : (
        <div className="border-t border-gray-200 px-4 py-5">
          <dl className="sm:divide-y sm:divide-gray-200">
            
            <ItemForm
              state={state}
              setState={setState}
              onCancel={onCancel}
              onSubmit={onSubmit}
            />
          </dl>
        </div>

        // <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        //   <dl className="sm:divide-y sm:divide-gray-200">
        //     <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        //       <dt className="text-sm font-medium text-gray-500">Image Url</dt>
        //       <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        //         <input
        //           required
        //           value={state.img_url}
        //           onChange={onChange}
        //           type="text"
        //           name="img_url"
        //           id="img_url"
        //           className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        //         />
        //       </dd>
        //     </div>
        //     <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        //       <dt className="text-sm font-medium text-gray-500">Cost</dt>
        //       <input
        //         required
        //         value={state.cost}
        //         onChange={onChange}
        //         type="number"
        //         name="cost"
        //         id="cost"
        //         className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        //       />
        //     </div>
        //     <div className="py-4 sm:py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
        //       <dt className="text-sm font-medium text-gray-500">Description</dt>
        //       <textarea
        //         required
        //         value={state.description}
        //         onChange={onChange}
        //         id="description"
        //         name="description"
        //         rows={3}
        //         className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
        //         defaultValue={""}
        //       />
        //     </div>
        //     <div className="px-4 py-4 sm:px-6 flex justify-end">
        //       <span className="flex divide-x space-x-2">
        //         <button
        //           className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-600 bg-gray-0 hover:bg-gray-50"
        //           onClick={() => setExpanded(false)}
        //           type="button"
        //         >
        //           Cancel
        //         </button>
        //         <button
        //           className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
        //           onClick={onSubmit}
        //           type="button"
        //         >
        //           Save
        //         </button>
        //       </span>
        //     </div>
        //   </dl>
        // </div>
      )}
    </>
  );
}
