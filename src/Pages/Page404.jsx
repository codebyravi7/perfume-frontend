import React from "react";
import { AlertTriangle, Home, Search } from "lucide-react";

const Page404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <div>
          <AlertTriangle className="mx-auto h-24 w-24 text-pink-600" />
          <h1 className="mt-6 text-4xl font-extrabold text-purple-900 sm:text-5xl">
            404 - Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Oops! It seems the fragrance you're looking for has evaporated.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-500">
            Don't worry, let's help you find your way back to our aromatic
            collection.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <Home className="mr-2 -ml-1 h-5 w-5" />
              Return Home
            </a>
            <a
              href="/search"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <Search className="mr-2 -ml-1 h-5 w-5" />
              Search Fragrances
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact our customer
            support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page404;
