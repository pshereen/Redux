import { useState, useEffect } from "react";
import "./App.css";
import { useParams } from "react-router-dom";

//Components
import Card from "./components/Card";
import Pagination from "./components/Pagination";

const App = () => {
  let { pageNumber } = useParams() || 1;
  if (typeof pageNumber === "undefined") pageNumber = 1;
  console.log(pageNumber);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/posts?page=${page}`);

        const { data, pages: totalPages } = await res.json();

        setPages(totalPages);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Some Error Occured");
      }
    };
    fetchPosts();
  }, [page]);
  return (
    
    <div className="app">
      {loading?<h3 className="loading-text">Loading...</h3>: error? <h3 className="error-text">{error}</h3>:(
      <>
      {/* Pagination Component */}
      <Pagination page={page} pages={pages} changePage={setPage} />
      <div className="app__posts">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      {/* Posts Listing */}
      {/* Pagination Component */}
      <Pagination page={page} pages={pages} changePage={setPage} /></>  
      )}
      
    </div>
  );
};

export default App;
