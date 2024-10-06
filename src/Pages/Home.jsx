import { useEffect, useState } from "react";
import PerfumeCard from "../components/PerfumeCard.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AppContext.jsx";

export default function Home() {
  const { key } = useParams();
  const [data, setData] = useState([]);
  const { navigate } = useNavigate();
  const { getPerfumes } = useAuthContext();

  useEffect(() => {
    async function fetchData() {
      const res = await getPerfumes(key);
      setData(res?.data?.perfumes);
    }
    fetchData();
  }, [key]);
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((item) => (
          <PerfumeCard
            key={item?._id}
            id={item?._id}
            image={item?.image}
            name={item?.name}
            price_Actual={item?.price_Actual}
            price_Discounted={item?.price_Discounted}
            discount={item?.discount}
          />
        ))}
      </div>
    </div>
  );
}
