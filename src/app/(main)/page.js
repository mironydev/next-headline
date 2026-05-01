import AllNews from "@/components/homepage/news/AllNews";
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { fetchCategories, fetchNewsbyCategories } from "@/lib/fetch-functions";

export default async function Home() {
  const categories = await fetchCategories();
  const allNews = await fetchNewsbyCategories("01");
  return (
    <div className="relative container mx-auto grid grid-cols-4 gap-6 mt-10">
      <div id="leftsidebar" className="col-span-1 sticky top-8 self-start">
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
      <div id="news" className="col-span-2 space-y-10">
        <p className="mb-2 font-bold">News</p>
        {allNews.map((news) => (
          <AllNews news={news} key={news._id} />
        ))}
      </div>
      <div id="rightsidebar" className="col-span-1">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
