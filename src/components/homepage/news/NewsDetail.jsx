import React from "react";
import RightSidebar from "./RightSidebar";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const NewsDetail = ({ news }) => {
  return (
    <div className="container mx-auto flex flex-col md:grid md:grid-cols-4 gap-10 mt-5">
      <div className="md:col-span-3">
        <p className="mb-2 font-bold hidden md:block">News</p>
        <div className=" md:border border-black/10 rounded-md md:p-10 space-y-3">
          <Image
            priority
            src={news.image_url}
            width={900}
            height={500}
            alt=""
            className="w-full"
          ></Image>
          <p className="text-stone-600 text-xs px-4 md:px-0">
            {news.author.published_date}
          </p>
          <h1 className="font-bold text-3xl text-stone-800 px-4 md:px-0">
            {news.title}
          </h1>
          <p className="text-stone-700 px-4 md:px-0">{news.details}</p>
          <Link
            href={`/category/${news.category_id}`}
            className="text-white bg-rose-700 rounded-none font-semibold btn mx-4 md:mx-0"
          >
            <BiArrowBack />
            All news in this category
          </Link>
        </div>
      </div>
      <div className="md:col-span-1">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsDetail;
