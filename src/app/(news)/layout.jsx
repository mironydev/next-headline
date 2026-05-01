import Header from "@/components/shared/Header";
import React from "react";

const NewsLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default NewsLayout;
