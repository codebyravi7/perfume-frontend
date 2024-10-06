import React, { useState, useRef, useEffect } from "react";
import { ShoppingCart, ExternalLink } from "lucide-react"; // Example icon from Lucide React
import i1 from "../../public/1.1.jpg";
import i2 from "../../public/1.2.jpg";
import i3 from "../../public/1.3.jpg";
import i4 from "../../public/1.4.jpg";
import { useParams } from "react-router-dom";
import i5 from "../../public/1.5.jpeg";
import ProductDescription from "../components/Productdescription";
import { calculatePriceDifference } from "../components/utility.js";
const ZoomableImage = ({ src, alt }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      className="overflow-visible cursor-zoom-in relative mb-4 rounded-lg aspect-square"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {isZoomed && (
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: backgroundPosition,
            backgroundSize: "250%",
          }}
        />
      )}
    </div>
  );
};
import { ShareModal } from "../components/Sharebutton.jsx";
import { useAuthContext } from "../context/AppContext.jsx";
const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const images = [i1, i2, i3, i4, i5]; // Array of imported images
  const currentUrl = window?.location?.href;
  const productUrl = currentUrl;
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { getOnePerfume } = useAuthContext();
  useEffect(() => {
    async function fetchData() {
      const res = await getOnePerfume(id);
      setData(res?.data?.perfume);
      console.log("perfum: ", res?.data?.perfume);
    }
    fetchData();
  }, []);
  const { image, name, price_Actual, price_Discounted, discount } = data || [];
  images?.unshift(image);
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Slider with Zoom */}
            <div>
              <ZoomableImage
                src={images[currentImage]}
                alt={`Product image ${currentImage + 1}`}
              />
              <div className="hide-scrollbar flex space-x-2 overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                      index === currentImage ? "ring-2 ring-pink-500" : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-purple-800 mb-4">
                {name}
              </h1>
              <p className="text-gray-600 mb-4">
                Indulge in the luxurious scent of Essence of Elegance. This
                exquisite parfum combines notes of jasmine, vanilla, and
                sandalwood to create a captivating fragrance that lasts all day.
              </p>
              {price_Discounted ? (
                <>
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-pink-600">
                      {price_Discounted}
                    </span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {price_Actual}
                    </span>
                  </div>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-green-500">
                      You just saved -
                    </span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {calculatePriceDifference(
                        price_Actual,
                        price_Discounted
                      ) + " ₹"}
                    </span>
                  </div>
                </>
              ) : (
                <div className="mb-6">
                  <span className="text-2xl font-bold text-pink-600">
                    {price_Actual}
                  </span>
                </div>
              )}
              <button
                className="mb-6 flex items-center text-2xl font-bold text-pink-600 hover:text-pink-900"
                onClick={() => setIsShareModalOpen(true)}
              >
                Share <ExternalLink className="ml-2" />
              </button>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Size</h3>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                      30ml
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                      50ml
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                      100ml
                    </button>
                  </div>
                </div>
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded flex items-center justify-center">
                  <ShoppingCart className="mr-2" /> Add to Cart
                </button>
              </div>
            </div>

            {/* Product Description */}
          </div>
          <div className="product-Description">
            <ProductDescription />
          </div>
        </div>
      </div>
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        productUrl={productUrl}
      />
    </div>
  );
};

export default ProductPage;
