const Loader = ({ type }: LoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        type="button"
        className={
          'inline-flex items-center justify-center px-4 py-2 m-auto text-sm font-medium text-white  border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto' +
          (type === 'processing' ? 'bg-indigo-500' : 'bg-red-500')
        }
        disabled
      >
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </svg>
        Loading...
      </button>
    </div>
  );
};

interface LoaderProps {
  type: 'processing' | 'error';
}

export default Loader;
