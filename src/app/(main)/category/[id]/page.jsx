import AllNews from "@/components/homepage/news/AllNews";
import Dropdown from "@/components/homepage/news/Dropdown";
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { fetchCategories, fetchNewsbyCategories } from "@/lib/fetch-functions";

export const metadata = {
  title: "All News | NextHeadline",
  description: "About Us",
};

const NewsByCategory = async ({ params }) => {
  const { id } = await params;
  const categories = await fetchCategories();
  const allNews = await fetchNewsbyCategories(id);
  return (
    <div className="relative container mx-auto flex flex-col md:grid md:grid-cols-4 gap-6 mt-10 sm:px-5 md:px-4 lg:px-5">
      <Dropdown categories={categories} id={id} />
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
              id={id}
            ></LeftSidebar>
          ))}
        </div>
      </div>
      <div id="news" className="md:col-span-2 px-4 space-y-10">
        <p className="mb-2 font-bold ml-4 md:ml-0">News</p>
        {allNews.length === 0 ? (
          <p className="text-center p-10 rounded-md text-2xl text-stone-400 bg-gray-100">
            No news available in this category.
          </p>
        ) : (
          allNews.map((news) => <AllNews news={news} key={news._id} />)
        )}
      </div>
      <div id="rightsidebar" className="md:col-span-1">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsByCategory;
