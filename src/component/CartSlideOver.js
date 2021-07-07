/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import Modal from "./Modal";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function CartSlideOver({
  cartList,
  open,
  setOpen,
  cart,
  setCart,
}) {
  const total = cart.list.reduce((accum, currentValue) => {
    return currentValue.cost * currentValue.quantity + accum;
  }, 0);

  const [checkingout, setCheckingout] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setCheckingout(false);
  }, [open]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={open}
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Cart
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <Modal
                      open={modal}
                      setOpen={setModal}
                      text="Order placed successfully!"
                      href="/"
                      buttonText="Continue"
                    ></Modal>
                    {checkingout ? (
                      <CheckoutForm
                        setCheckingout={setCheckingout}
                        setModal={setModal}
                      />
                    ) : cartList.length > 0 ? (
                      <>
                        {cartList.map((item) => (
                          <CartItem
                            key={item.id}
                            setCart={setCart}
                            setCheckingout={setCheckingout}
                            {...item}
                          ></CartItem>
                        ))}
                        <div className="mt-6 w-full flex items-center justify-between">
                          <span>Total: {formatter.format(total)}</span>
                          <button
                            onClick={() => setCheckingout(true)}
                            className="inline-flex justify-between items-center p-2.5  shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                          >
                            <ShoppingCartIcon
                              className="w-5 h-5 text-white"
                              aria-hidden="true"
                            />
                            <span className="ml-1.5 text-md">Checkout</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <p>Your cart is empty.</p>
                    )}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
