import React from "react";

const categories = [
  "Home",
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-500 text-white">
        <div className="max-w-6xl mx-auto">
          <nav className="flex justify-center gap-6 py-3 text-sm font-semibold flex-wrap">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`pb-1 ${
                  cat === "Home"
                    ? "border-b-2 border-red-400"
                    : "hover:underline cursor-pointer "
                }`}
              >
                {cat}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Searching..."
          className="w-11/12 sm:w-2/3 md:w-1/2 border border-blue-400 px-4 py-2 rounded-md text-lg font-semibold text-gray-600"
        />
      </div>
    </div>
  );
};

export default App;
