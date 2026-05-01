import Link from "next/link";
import React from "react";

const LeftSidebar = ({ category, id }) => {
  const isActive = id === category.category_id;
  return (
    <Link
      href={`/category/${category.category_id}`}
      className={` ${isActive ? "hover:bg-base-300 bg-base-300  text-black " : "text-stone-500"} text-center block p-2 font-medium  rounded-md hover:bg-base-200`}
    >
      {category.category_name}
    </Link>
  );
};

export default LeftSidebar;
