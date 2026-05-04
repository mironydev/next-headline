import AllNews from "@/components/homepage/news/AllNews";
import Dropdown from "@/components/homepage/news/Dropdown";
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { fetchCategories, fetchNewsbyCategories } from "@/lib/fetch-functions";

export default async function Home() {
  const categories = await fetchCategories();
  const allNews = await fetchNewsbyCategories("01");

  return (
    <div className="relative container mx-auto flex flex-col md:grid md:grid-cols-4 gap-6 mt-10 sm:px-5 md:px-4 lg:px-5">
      <Dropdown categories={categories} />
      <div
        id="leftsidebar"
        className="col-span-1 sticky top-8 self-start hidden md:block"
      >
        <p className="mb-2 font-bold">All Category</p>
        <div>
          {categories.map((category) => (
            <LeftSidebar
              category={category}
              key={category.category_id}
              id={"01"}
            ></LeftSidebar>
          ))}
        </div>
      </div>
      <div id="news" className="md:col-span-2 px-4 space-y-10">
        <p className="mb-2 font-bold ml-4 md:ml-0">News</p>
        {allNews.map((news) => (
          <AllNews news={news} key={news._id} />
        ))}
      </div>
      <div id="rightsidebar" className="md:col-span-1">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
