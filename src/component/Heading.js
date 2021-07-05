/* This example requires Tailwind CSS v2.0+ */
export default function Heading({ text, setState }) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {text}
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <button
          onClick={() => setState(true)}
          type="button"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          View cart
        </button>
      </div>
    </div>
  );
}
