import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loader = async () => {
            const req = await fetch(
                "https://jsonplaceholder.typicode.com/posts/"
            );
            const res = await req.json();
            setPosts(res);
        };

        loader();
        //  Deps empty, runs only once
    }, []);

    return (
        <>
            {posts.length
                ? posts.map((post) => (
                      <article key={post.id}>
                          <h2>
                              <Link to={`/post/${post.id}`}>{post.title}</Link>
                          </h2>
                      </article>
                  ))
                : "Please wait"}
        </>
    );
};

export default Home;
