import { useState } from "react";
import { useMutation } from "urql";
import Loading from "./Loading";

export const CREATE_ITEM = `
  mutation($object: item_insert_input!) {
    insert_item_one(object: $object) {
      id
    }
  }
`;

export default function CreateForm({ setIsCreating }) {
  const [state, setState] = useState({
    name: "",
    cost: 0,
    img_url: "",
    description: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [, executeCreate] = useMutation(CREATE_ITEM);

  const onChange = ({ target }) =>
    setState({
      ...state,
      [target.name]: target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await executeCreate({
        object: {
          name: state.name,
          cost: state.cost,
          description: state.description,
          img_url: state.img_url,
        },
      });
      setIsCreating(false);
      setLoading(false);
      alert("Item saved!");
    } catch (err) {
      setLoading(false);
      alert("Error adding!");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading text="Adding item..." />
      ) : (
        <form
          className="space-y-8 divide-y divide-gray-200"
          onSubmit={onSubmit}
        >
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Please fill out all fields with your item's information.
                </h3>
              </div>

              <div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        value={state.name}
                        onChange={onChange}
                        type="text"
                        name="name"
                        id="name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="cost"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cost
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        $
                      </span>
                      <input
                        required
                        value={state.cost}
                        onChange={onChange}
                        type="number"
                        name="cost"
                        id="cost"
                        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="img_url"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Image Url
                    </label>
                    <div className="mt-1">
                      <input
                        value={state.img_url}
                        onChange={onChange}
                        type="text"
                        name="img_url"
                        id="img_url"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        required
                        value={state.description}
                        onChange={onChange}
                        id="description"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                onClick={() => setIsCreating(false)}
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
