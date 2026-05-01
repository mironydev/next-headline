import NewsDetail from "@/components/homepage/news/NewsDetail";
import { fetchNewsDetails } from "@/lib/fetch-functions";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await fetchNewsDetails(id);

  return { title: `NextHeadline | ${news.title}`, description: "" };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await fetchNewsDetails(id);
  return (
    <div>
      <NewsDetail news={news} key={news._id} />
    </div>
  );
};

export default NewsDetailsPage;
