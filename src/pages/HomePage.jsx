import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PostCard from "../components/PostCard";
import useFetch from "../hooks/useFetch";

import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const [selectedTag, setSelectedTag] = useState("");

  const [sortOrder, setSortOrder] = useState("");


  const [data, loading] = useFetch(`/search`, search,sortOrder,selectedTag);

  const allTags = [...new Set(data.flatMap(post => post.tags))];

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  



  const handleSortChange = (order) => {
    setSortOrder(order);
  };





  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <input
          className="border p-2 rounded-md"
          placeholder="Search ..."
          value={search}
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchParams({ q: e.target.value });
          }}
        />

<div className="flex items-center gap-2">
        <button onClick={() => handleSortChange("asc")}>Sort Ascending</button>
        <button onClick={() => handleSortChange("desc")}>Sort Descending</button>
      </div>
        
        

        <div className="btn-group">
      <button
      type="button"
      className="btn btn-danger dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      
    >
    
    {  (selectedTag == "" ? "All" : selectedTag)}
    </button>
    <ul className="dropdown-menu">
      <li className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-md transition-colors">
        <a className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-md transition-colors" href="#"  onClick={() => handleTagClick("")}>
        <button className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-md transition-colors"> All</button>
        </a>
      </li>
    
{allTags.map((e, i) => {
return (
<li key={i + 1} className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-md transition-colors">
<button
onClick={() =>  handleTagClick(e)}
className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-md transition-colors">

    {e}
      </button>
      </li>
);
})}
    </ul>
  </div>



      </div>

      {search.length > 0 && (
        <p className="text-sm text-gray-600">
          Showing results for "{search}"
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <Loading />
        ) : (
          data.map((e, i) => {
            return <PostCard id={e.id} title={e.title} body={e.body} key={i} />;
          })
        )}
      </div>
    </>
  );
}
