// import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PerfumeCard from "../components/PerfumeCard.jsx";
import { useAuthContext } from "../context/AppContext.jsx";

export default function Search() {
  // const { perfumes, isLoading, error } = getPerfumes();
  const [data, setData] = useState([]);
  const { keyword } = useParams();
  const { searchPerfumes } = useAuthContext();
  useEffect(() => {
    async function fetchData() {
      const res = await searchPerfumes(keyword);
      console.log("searching posts", res?.data?.perfumes);
      setData(res?.data?.perfumes);
    }
    fetchData();
  }, [keyword]);
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item, index) => (
          <PerfumeCard
            key={index}
            id={item?._id}
            image={item.image}
            name={item.name}
            price_Actual={item.price_Actual}
            price_Discounted={item.price_Discounted}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
}
