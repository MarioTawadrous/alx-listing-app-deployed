import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            LuxStay
          </Link>

          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded hover:bg-gray-100">
              Sign in
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>

        <div className="mt-4 flex space-x-6 overflow-x-auto py-2">
          {[
            "Rooms",
            "Mansion",
            "Countryside",
            "Beachfront",
            "Luxury",
            "Cabins",
          ].map((item) => (
            <button
              key={item}
              className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
