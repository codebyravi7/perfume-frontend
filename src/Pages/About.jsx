import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-8 flex items-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-10">
          About Essence Elegance
        </h1>

        <div className="mb-8 p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-pink-700">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded in 2010, Essence Elegance began as a small, family-owned
            boutique in Paris. Our passion for exquisite scents and dedication
            to quality quickly earned us a reputation among perfume enthusiasts.
            Today, we're proud to be a global brand, bringing the art of fine
            perfumery to discerning customers worldwide.
          </p>
        </div>

        <div className="mb-8 p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-pink-700">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Essence Elegance, our mission is to create unforgettable
            olfactory experiences that inspire confidence and evoke emotions. We
            believe that the right scent can transform not just how you smell,
            but how you feel and how others perceive you.
          </p>
        </div>

        <div className="p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-pink-700">
            What Sets Us Apart
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <span className="font-semibold">Artisanal craftsmanship:</span>{" "}
              Each fragrance is meticulously crafted by our master perfumers.
            </li>
            <li>
              <span className="font-semibold">Sustainable sourcing:</span> We
              prioritize ethically sourced, natural ingredients.
            </li>
            <li>
              <span className="font-semibold">Innovative blends:</span> Our
              unique combinations create scents you won't find anywhere else.
            </li>
            <li>
              <span className="font-semibold">Personalized experience:</span>{" "}
              Our fragrance consultants help you find your perfect signature
              scent.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
