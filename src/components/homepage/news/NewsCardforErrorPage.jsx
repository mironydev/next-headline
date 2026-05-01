import Link from "next/link";
import React from "react";

const NewsCardforErrorPage = ({ n, i, id }) => {
  return (
    <Link
      href={`news/${id}`}
      className="hover:bg-base-200 hover:text-black hover:scale-95 active:scale-90 duration-100 text-stone-700 text-left text-sm font-medium bg-base-100 px-5 py-3 rounded-sm"
    >
      {i + 1}. {n.title}
    </Link>
  );
};

export default NewsCardforErrorPage;
