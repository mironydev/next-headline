import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa6";
import { GoBookmark } from "react-icons/go";
import { IoShareSocialOutline, IoStar } from "react-icons/io5";

const AllNews = ({ news }) => {
  return (
    <div className="border border-black/10 rounded-md p-5">
      <div className="bg-base-300 flex justify-between items-center px-5 py-3 -mt-5 -mx-5 rounded-t-md">
        <div className="flex gap-3 items-center">
          <Image
            src={news.author.img}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
          <div>
            <p className="font-medium text-sm mb-0.5">{news.author.name}</p>
            <p className="text-stone-600 text-xs">
              {news.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex text-xl gap-1">
          <GoBookmark className="hover:text-sky-500 active:text-sky-500 cursor-pointer duration-100 hover:scale-110 active:scale-95" />
          <IoShareSocialOutline className="hover:text-emerald-500 active:text-emerald-500 cursor-pointer duration-100 hover:scale-110 active:scale-95" />
        </div>
      </div>
      <div className="pt-5">
        <h1 className="font-bold text-3xl text-stone-800">{news.title}</h1>
        <Image
          priority
          src={news.image_url}
          width={900}
          height={500}
          alt=""
          className=" pt-5 pb-5"
        ></Image>
        <p className="text-stone-700 line-clamp-3">{news.details}</p>
        <button className="mt-1">
          <Link
            href={`/news/${news._id}`}
            className="text-orange-400 hover:text-orange-500 active:text-orange-600 font-semibold"
          >
            Read More
          </Link>
        </button>
      </div>
      <div className="border-t border-black/20 flex justify-between items-center text-stone-600 pt-5 mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap text-orange-400 gap-1">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <p>{news.rating.number}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />

          <p>{news.total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
