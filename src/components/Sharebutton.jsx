import React, { useState } from "react";
import { X, Facebook, Twitter, Linkedin, Link } from "lucide-react";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShareModal = ({ isOpen, onClose, productUrl }) => {
  if (!isOpen) return null;

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      productUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      productUrl
    )}&text=${encodeURIComponent("Check out this amazing perfume!")}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      productUrl
    )}&title=${encodeURIComponent("Essence of Elegance Parfum")}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(productUrl).then(() => {
      
      toast.success("Link copied to clipboard", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-800">
            Share This Product
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X />
          </button>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => window.open(shareUrls.facebook, "_blank")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded flex items-center"
          >
            <Facebook className="mr-2" /> Share on Facebook
          </button>
          <button
            onClick={() => window.open(shareUrls.twitter, "_blank")}
            className="w-full bg-sky-400 hover:bg-sky-500 text-white py-2 rounded flex items-center"
          >
            <Twitter className="mr-2" /> Share on Twitter
          </button>
          <button
            onClick={() => window.open(shareUrls.linkedin, "_blank")}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded flex items-center"
          >
            <Linkedin className="mr-2" /> Share on LinkedIn
          </button>
          <button
            onClick={copyToClipboard}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded flex items-center"
          >
            <Link className="mr-2" /> Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};
