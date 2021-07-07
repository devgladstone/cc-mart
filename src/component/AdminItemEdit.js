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
  setEditing,
  setModal,
}) {
  const [state, setState] = useState({
    name: name,
    description: description,
    cost: cost,
    img_url: img_url,
  });
  const [isLoading, setLoading] = useState(false);

  const [, executeUpdate] = useMutation(UPDATE_ITEM);

  const onCancel = () => {
    setEditing(false);
    setState({
      name: name,
      description: description,
      cost: cost,
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
      setModal(true);
      setEditing(false);
      setLoading(false);
    } catch (err) {
      setEditing(false);
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
      )}
    </>
  );
}
