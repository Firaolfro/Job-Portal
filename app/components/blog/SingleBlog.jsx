import Header from "./Header";
import BlogArticle from "./BlogArticle";
import BlogAside from "./BlogAside";

const SingleBlog = () => {
  return (
    <div className="flex flex-col items-center">
      {/* single blog heading */}
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Main Article Content */}
        <BlogArticle />
        {/* Sidebar */}
        <BlogAside />
      </div>
    </div>
  );
};

export default SingleBlog;
