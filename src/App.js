import { useState, useEffect } from "react";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [shown, setShown] = useState([]);

    useEffect(() => {
        const loader = async () => {
            const req = await fetch("https://jsonplaceholder.typicode.com/posts/");
            const res = await req.json();
            setPosts(res);
        };

        loader();
        //  Deps empty, runs only once
    }, []);

    useEffect(() => {
        console.log(shown);
        //  Runs whenever `shown` is changed
    }, [shown]);

    const clickHandler = (e, id) => {
        e.preventDefault();

        if (shown.includes(id)) {
            //  Removed id from array if exists
            setShown(shown.filter((s) => s !== id));
        } else {
            //  Adds it otherwise
            setShown([...shown, id]);
        }
    };

    return (
        <>
            {posts.length
                ? posts.map((post) => (
                      <article key={post.id}>
                          <h2 onClick={(e) => clickHandler(e, post.id)}>
                              {post.title}
                          </h2>
                          {shown.includes(post.id) ? <p>{post.body}</p> : null}
                      </article>
                  ))
                : "Please wait"}
        </>
    );
};

export default App;
