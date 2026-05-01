import NewsCardforErrorPage from "@/components/homepage/news/NewsCardforErrorPage";
import Link from "next/link";
import React from "react";
import { fetchNewsbyCategories } from "@/lib/fetch-functions";

const NotFoundPage = async () => {
  const news = await fetchNewsbyCategories("01");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="text-center my-10 sm:mt-24 sm:mb-16">
        <div className="relative">
          <h1 className="text-8xl font-extrabold text-gray-900 tracking-widest">
            404
          </h1>

          <p className="bg-red-500 text-white px-6 py-2 sm:text-3xl sm:-rotate-18 opacity-90 rounded-full -top-3 left-20 sm:absolute">
            Page Not Found :(
          </p>
        </div>

        <div className="mt-5 text-gray-600">
          <p>
            Looks like the news you&apos;re trying to read does not exist in
            this reality.
          </p>
          <p>Maybe downplay your hopes and read what we have?</p>
          <p className="text-xl mt-2 text-black">
            Here are some popular news you may be interested in:
          </p>
        </div>

        <div className="my-5 bg-base-300 p-3 rounded-sm space-y-1 flex flex-col">
          {news.map((n, i) => (
            <NewsCardforErrorPage i={i} key={n._id} id={n._id} n={n} />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
