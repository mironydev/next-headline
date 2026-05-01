import { fetchNewsbyCategories } from "@/lib/fetch-functions";
import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = async () => {
  const headlines = await fetchNewsbyCategories("01");
  const data = headlines.map((head) => head.title);

  return (
    <div className="container mx-auto bg-base-300 px-3 py-3 flex gap-5 rounded-sm mt-5">
      <p className="py-1 px-3 rounded-sm bg-red-600 text-white">Latest</p>
      <Marquee pauseOnClick={true}>
        <p className="font-bold">{data.join(" | ")}</p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
