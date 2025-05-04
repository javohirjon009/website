import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const paginationSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: Math.min(totalPages, 5),
    slidesToScroll: 1,
    focusOnSelect: false,
    arrows: false,
    beforeChange: (_, newIndex) => setPage(newIndex + 1),
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ----  Header ----- */}
      <header className="bg-blue-500 text-white">
        <nav className="max-w-6xl mx-auto px-4">
          <ul className="flex space-x-6 py-4 text-sm font-medium">
            {[
              "Home",
              "Business",
              "Entertainment",
              "General",
              "Health",
              "Science",
              "Sports",
              "Technology",
            ].map((cat) => (
              <li key={cat} className={cat === "Home" ? "text-red-400" : ""}>
                <button className="hover:underline">{cat}</button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ----  Cardlar ---- */}
      <main className="max-w-6xl mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow"
            >
              <div className="h-48 bg-gray-200 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="px-2 -mt-4">
                <span className="bg-white text-xs px-2 py-1 rounded shadow text-gray-600">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold leading-snug mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">
                  Floyd Miles · 3 Days Ago
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ----  Pagination ------ */}

        <div className="max-w-xs mx-auto mb-16">
          <Slider {...paginationSettings}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <div key={i} className="px-2">
                <button
                  onClick={() => setPage(i + 1)}
                  className={`w-full text-sm py-2 rounded-md ${
                    page === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
}
