import { IoIosSearch } from "react-icons/io";
export default function BlogAside() {
  return (
    <aside className="flex flex-col gap-6 lg:max-w-[340px] w-full">
      {/* Search Section */}
      <div className="border border-gray-200 rounded-lg">
        <div className="p-6">
          <h2 className="text-xl font-medium mb-4">Search</h2>
          <form>
            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
              <div className="px-3 text-blue-500">
                <IoIosSearch className="text-xl" />
              </div>
              <input
                className="px-3 py-2 w-full outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
          </form>
        </div>

        {/* Category Section */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-xl font-medium mb-4">Category</h2>
          <div className="flex flex-col gap-3">
            {[
              "Graphics & Design",
              "Code & Programming",
              "Digital Marketing",
              "Video & Animation",
              "Music & Audio",
              "Finance & Accounting",
              "Health & Care",
              "Data Science",
            ].map((category, index) => (
              <label key={index} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-600">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-medium mb-4">Recent Posts</h2>
        <div className="flex flex-col divide-y divide-gray-200">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="py-4">
              <div className="flex gap-4">
                <img
                  className="w-28 h-20 object-cover rounded"
                  src="/images/placeholder.png"
                  alt="Recent post thumbnail"
                />
                <div>
                  <div className="flex gap-4 text-sm text-gray-500 mb-1">
                    <span>Nov 12, 2021</span>
                    <span>20 comments</span>
                  </div>
                  <p className="text-base line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <h2 className="text-xl font-medium p-6">Gallery</h2>
        <div className="grid grid-cols-3 gap-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square">
              <img
                className="w-full h-full object-cover"
                src="/images/placeholder.png"
                alt="Gallery image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-medium mb-4">Popular Tag</h2>
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-gray-100 p-1">Design</button>
          <button className="bg-gray-100 p-1">Programming</button>
          <button className="bg-gray-100 p-1">Design</button>
          <button className="bg-gray-100 p-1">Programming</button>
          <button className="bg-gray-100 p-1">Design</button>
          <button className="bg-gray-100 p-1">Programming</button>
        </div>
      </div>
    </aside>
  );
}
