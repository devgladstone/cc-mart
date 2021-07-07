import { useState } from "react";

export default function CheckoutForm({ setCheckingout, setModal }) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    code: "",
  });
  const [isLoading, setLoading] = useState(false);

  const onChange = ({ target }) =>
    setState({
      ...state,
      [target.name]: target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Shipping Information
            </h3>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.firstName}
                  onChange={onChange}
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.lastName}
                  onChange={onChange}
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.email}
                  onChange={onChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country / Region
              </label>
              <div className="mt-1">
                <select
                  required
                  value={state.country}
                  onChange={onChange}
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Street address
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.street}
                  onChange={onChange}
                  type="text"
                  name="street"
                  id="street"
                  autoComplete="street"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.city}
                  onChange={onChange}
                  type="text"
                  name="city"
                  id="city"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.state}
                  onChange={onChange}
                  type="text"
                  name="state"
                  id="state"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP / Postal
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.zip}
                  onChange={onChange}
                  type="text"
                  name="zip"
                  id="zip"
                  autoComplete="postal-code"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Payment Method
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="cardName"
                className="block text-sm font-medium text-gray-700"
              >
                Cardholder Name
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.cardName}
                  onChange={onChange}
                  type="text"
                  name="cardName"
                  id="cardName"
                  autoComplete="cardName"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Credit Card Number
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.cardNumber}
                  onChange={onChange}
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  autoComplete="cardNumber"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="month"
                className="block text-sm font-medium text-gray-700"
              >
                Month
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.month}
                  onChange={onChange}
                  placeholder="Enter 1-12"
                  type="number"
                  name="month"
                  id="month"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700"
              >
                Year
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.year}
                  onChange={onChange}
                  placeholder="2021"
                  type="number"
                  name="year"
                  id="year"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-700"
              >
                Security Code
              </label>
              <div className="mt-1">
                <input
                  required
                  value={state.code}
                  onChange={onChange}
                  type="number"
                  name="code"
                  id="code"
                  autoComplete="postal-code"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={() => setCheckingout(false)}
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
}
