import { ShoppingCartIcon } from "@heroicons/react/solid";

export default function UserItem({ item, setOpen, setCart }) {
  const addToCart = () => {
    setCart({
      ...item,
      quantity: 1
    });
    setOpen(true);
  };

  return (
    <li
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="flex-1 flex flex-col p-8">
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto bg-black text-white rounded-full"
          src={item.img_url || "https://covalentcareers3.s3-accelerate.amazonaws.com/media/images/company/CovalentCreative_Linkedin-Profile-Image.png"}
          alt="Image not found"
        />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">{item.name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Description</dt>
          <dd className="text-gray-500 text-sm truncate">
            {item.description}
          </dd>
          <dt className="sr-only">Cost</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">
              {item.cost}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex">
          <div className="-ml-px w-0 flex-1 flex">
            <button
              onClick={addToCart}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <ShoppingCartIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
