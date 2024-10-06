import React from "react";
// import { Facebook, Twitter, Mail, WhatsApp, Send } from "lucide-react"; // Example icons from Lucide React

const ProductDescription = () => {
  return (
    <div className="p-2 w-full mt-8">
      {/* Categories and Tags */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="font-semibold">Categories: </span>
        <span className="text-purple-600">Niche Perfumes, Perfume</span>
      </div>
      <div className="text-sm text-gray-600 mb-4">
        <span className="font-semibold">Tags: </span>
        <span className="text-purple-600">Creed, Perfume, Rs.5000 & Above</span>
      </div>

      {/* Share Options */}
      <div className="flex text-gray-500 mb-6">
        <span className="font-semibold">Share: </span>
        <a href="#" className="hover:text-blue-600">
          {/* <Facebook size={20} /> */}
        </a>
        <a href="#" className="hover:text-blue-400">
          {/* <Twitter size={20} /> */}
        </a>
        <a href="#" className="hover:text-red-500">
          {/* <Mail size={20} /> */}
        </a>
        <a href="#" className="hover:text-green-500">
          {/* <WhatsApp size={20} /> */}
        </a>
        <a href="#" className="hover:text-blue-500">
          {/* <Send size={20} /> */}
        </a>
      </div>

      {/* Product Description */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Creed Aventus Eau De Perfume For Men – 100ml
      </h2>
      <p className="text-gray-600 mb-4">
        The best carefully selected ingredients, tradition, and exceptional
        quality come together in this legendary niche fragrance. Creed Aventus
        Eau de Parfum is a provocative, virile, optimistic perfume created
        through a joint effort of a father and son.
      </p>

      {/* Fragrance Notes */}
      <h3 className="font-semibold text-lg text-gray-800 mb-2">
        Fragrance Notes:
      </h3>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>
          <strong>Top Notes:</strong> Apple, Bergamot, Black Currant, Pineapple
        </li>
        <li>
          <strong>Middle Notes:</strong> Birch, Jasmine, Patchouli, Rose
        </li>
        <li>
          <strong>Base Notes:</strong> Amber, Moss, Musk, Vanilla
        </li>
      </ul>

      {/* Full Description */}
      <p className="text-gray-600 mb-6">
        This Eau de Parfum is the celebration of power, success, and courage.
        The fragrance was inspired by the dramatic life of Napoleon Bonaparte,
        one of the most interesting men in history. That’s why Creed Aventus
        conveys war, peace, and love.
      </p>
      <p className="text-gray-600 mb-6">
        Creed uses a high percentage of natural ingredients in their niche
        fragrances. Because the climatic and seasonal conditions during harvest
        tend to change, the properties of the aroma and color of the fragrance
        sometimes change, resulting in slight variations in the product itself
        or its color.
      </p>
      <p className="text-gray-600 mb-6">
        This Eau de Parfum is the celebration of power, success, and courage.
        The fragrance was inspired by the dramatic life of Napoleon Bonaparte,
        one of the most interesting men in history. That’s why Creed Aventus
        conveys war, peace, and love.
      </p>
      <p className="text-gray-600 mb-6">
        Creed uses a high percentage of natural ingredients in their niche
        fragrances. Because the climatic and seasonal conditions during harvest
        tend to change, the properties of the aroma and color of the fragrance
        sometimes change, resulting in slight variations in the product itself
        or its color.
      </p>
      <p className="text-gray-600 mb-6">
        This Eau de Parfum is the celebration of power, success, and courage.
        The fragrance was inspired by the dramatic life of Napoleon Bonaparte,
        one of the most interesting men in history. That’s why Creed Aventus
        conveys war, peace, and love.
      </p>
      <p className="text-gray-600 mb-6">
        Creed uses a high percentage of natural ingredients in their niche
        fragrances. Because the climatic and seasonal conditions during harvest
        tend to change, the properties of the aroma and color of the fragrance
        sometimes change, resulting in slight variations in the product itself
        or its color.
      </p>

      {/* Additional Info */}
      <h3 className="font-semibold text-lg text-gray-800 mb-2">About Creed:</h3>
      <p className="text-gray-600 mb-6">
        Creed is the king of perfume and the perfume of kings. For more than 250
        years, the brand has been creating extraordinary fragrances for royal
        families and other customers of exquisite taste. The company was founded
        in 1760 by James Henry Creed and has been helmed by the family ever
        since.
      </p>

      {/* Conclusion */}
      <p className="text-gray-600 mb-6">
        Whichever Creed perfume you choose, you’ll get timeless beauty and a
        modern approach to traditional methods and values.
      </p>
    </div>
  );
};

export default ProductDescription;
