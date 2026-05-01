import React from "react";
import RightSidebar from "./RightSidebar";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const NewsDetail = ({ news }) => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-10 mt-10">
      <div className=" col-span-3">
        <p className="mb-2 font-bold">News</p>
        <div className=" border border-black/10 rounded-md p-10 space-y-3">
          <Image
            priority
            src={news.image_url}
            width={900}
            height={500}
            alt=""
            className="w-full"
          ></Image>
          <p className="text-stone-600 text-xs">{news.author.published_date}</p>
          <h1 className="font-bold text-3xl text-stone-800">{news.title}</h1>
          <p className="text-stone-700">{news.details}</p>
          <Link
            href={`/category/${news.category_id}`}
            className="text-white bg-rose-700 rounded-none font-semibold btn "
          >
            <BiArrowBack />
            All news in this category
          </Link>
        </div>
      </div>
      <div className="col-span-1">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsDetail;
