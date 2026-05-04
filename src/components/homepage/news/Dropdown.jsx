// this component is for the mobile dropdown for news category

"use client";

import React from "react";

const Dropdown = () => {
  return (
    <div id="leftsidebarFORmobile" className="md:hidden">
      <select defaultValue="Select news category" className="select">
        <option disabled={true}>Select news category</option>
        <option value="">Breaking News</option>
        <option>Regular News</option>
        <option>International News</option>
        <option>Sports</option>
        <option>Entertainment</option>
        <option>Culture</option>
        <option>Arts</option>
        <option>All News</option>
      </select>
    </div>
  );
};

export default Dropdown;
