// import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PerfumeCard from "../components/PerfumeCard.jsx";
import { useAuthContext } from "../context/AppContext.jsx";
import Loading from "../components/Smallcomps/Loading.jsx";

export default function Search() {
  const [data, setData] = useState([]);
  const { keyword } = useParams();
  const { searchPerfumes } = useAuthContext();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await searchPerfumes(keyword);
        setData(res?.data?.perfumes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [keyword]);
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
}
