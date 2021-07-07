import { useState } from "react";
import { useMutation } from "urql";
import Loading from "../Layout/Loading";
import ItemForm from "./ItemForm";

const CREATE_ITEM = `
  mutation($object: item_insert_input!) {
    insert_item_one(object: $object) {
      id
    }
  }
`;

export default function AdminItemCreate({ setIsCreating, setModal }) {
  const [state, setState] = useState({
    name: "",
    cost: 0,
    img_url: "",
    description: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [, executeCreate] = useMutation(CREATE_ITEM);

  const onCancel = () => {
    setIsCreating(false);
    setState({
      name: "",
      cost: 0,
      img_url: "",
      description: "",
    });
  };

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
      setModal(true);
      setIsCreating(false);
      setLoading(false);
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
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Please fill out all fields with your item's information.
          </h3>
          <ItemForm
            state={state}
            setState={setState}
            onCancel={onCancel}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </>
  );
}
