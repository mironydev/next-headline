// this component is for the mobile dropdown for news category

"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Dropdown = ({ categories, id }) => {
  const router = useRouter();

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    if (categoryId) {
      router.push(`/category/${categoryId}`);
    }
  };

  return (
    <div id="leftsidebarFORmobile" className="md:hidden px-4 w-fit">
      <select
        value={id || ""}
        className="select pr-9"
        onChange={handleCategoryChange}
      >
        <option value="">Select category</option>
        {categories.map((category) => (
          <option key={category.category_id} value={category.category_id}>
            {category.category_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
