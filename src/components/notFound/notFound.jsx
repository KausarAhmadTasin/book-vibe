const NotFound = () => {
  return (
    <div className="flex work-sans-font items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-medium text-gray-600 mt-4">
          Page Not Found
        </p>
        <p className="text-lg text-gray-500 mt-2">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
