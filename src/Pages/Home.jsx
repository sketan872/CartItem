import { useEffect, useState } from "react";
import Product from "../Components/Product";
import Spinner from "../Components/Spinner";
// import { MdDelete } from "react-icons/md";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  async function FetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (e) {
      console.log("Error:", e);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
