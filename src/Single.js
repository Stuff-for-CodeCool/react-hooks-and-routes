import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Single = () => {
    const { id } = useParams();

    const [title, setTitle] = useState("loading post title...");
    const [text, setText] = useState("loading post ...");
    const [authorId, setAuthorId] = useState(0);
    const [author, setAuthor] = useState("loading author name...");

    useEffect(() => {
        const loader = async () => {
            //  http://localhost:8080/api/posts/${id} -> fetch de pe express
            //  app.get("/api/posts/:id", async (req, res) => { ... })
            const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const res = await req.json();

            setTitle(res.title);
            setText(res.body);
            setAuthorId(res.userId);
        };
        loader();
    }, []);

    useEffect(() => {
        const loader = async () => {
            const req = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/`);
            const res = await req.json();
            setAuthor(res.name);
        };
        loader();
    }, [authorId]);

    return (
        <>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{text}</p>
            <p>
                <small>
                    <Link to="/">Back home</Link>
                </small>
            </p>
        </>
    );
};

export default Single;
