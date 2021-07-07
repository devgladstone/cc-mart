import { TrashIcon } from "@heroicons/react/solid";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function CartItem({
  id,
  img_url,
  name,
  cost,
  quantity,
  setCart,
}) {
  const onDecrease = (id) => {
    if (quantity === 1) {
      onDelete(id);
    } else {
      setCart((cart) => {
        const newList = cart.list.map((item) =>
          id === item.id ? { ...item, quantity: item.quantity - 1 } : item
        );
        return {
          ...cart,
          list: newList,
        };
      });
    }
  };

  const onIncrease = (id) => {
    setCart((cart) => {
      const newList = cart.list.map((item) =>
        id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...cart,
        list: newList,
      };
    });
  };

  const onDelete = (id) => {
    setCart((cart) => {
      const newIds = new Set(cart.ids);
      newIds.delete(id);
      return {
        list: cart.list.filter((item) => item.id !== id),
        ids: newIds,
      };
    });
  };

  return (
    <div>
      <div className="flow-root mt-6">
        <ul className="-my-5 divide-y divide-gray-200">
          {/* {people.map((cart) => ( */}
          <li key={id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 object-cover rounded-full bg-black"
                  src={img_url}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {formatter.format(cost)}
                </p>
              </div>
              <div>
                <button
                  onClick={() => onDecrease(id)}
                  className="inline-flex items-center shadow-sm px-2.5 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                  -
                </button>

                <span className="inline-flex items-center shadow-sm mx-1 px-2.5 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white">
                  Qty: {quantity}
                </span>
                <button
                  onClick={() => onIncrease(id)}
                  className="inline-flex items-center shadow-sm px-2.5 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <div>
                <button onClick={() => onDelete(id)} type="button">
                  <TrashIcon
                    className="inline-flex items-center flex-shrink-0 h-6 w-6 text-red-600 ml-4"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </li>
          {/* ))} */}
        </ul>
      </div>
    </div>
  );
}
