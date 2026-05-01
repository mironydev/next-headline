import React from "react";
import { format } from "date-fns";
import BreakingNews from "./BreakingNews";
import Link from "next/link";

const Header = () => {
  const weekday = format(new Date(), "EEEE");
  const date = format(new Date(), "MMMM dd, yyyy");

  return (
    <div className="text-center container mx-auto text-stone-600 mt-5">
      <Link href="/">
        <h1 className="font-pirate text-5xl">Next Headline</h1>
      </Link>
      <p className="text-xs mt-1 mb-2">Journalism Without Fear or Favour</p>
      <p className="text-sm">
        <span className="text-black">{weekday}</span>
        <span>, {date}</span>
      </p>
    </div>
  );
};

export default Header;
