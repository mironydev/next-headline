// this file was made to show the loading spinner only on the NEWS component
"use client";

import React, { Suspense } from "react";
import AllNews from "./AllNews";

const NewsContent = ({ allNews }) => {
  return allNews.length === 0 ? (
    <p className="text-center p-10 rounded-md text-2xl text-stone-400 bg-gray-100">
      No news available in this category.
    </p>
  ) : (
    allNews.map((news) => <AllNews news={news} key={news._id} />)
  );
};

const NewsSection = ({ allNews }) => {
  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <NewsContent allNews={allNews} />
      </Suspense>
    </div>
  );
};

export default NewsSection;
