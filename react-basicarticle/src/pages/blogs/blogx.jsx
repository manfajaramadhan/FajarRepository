import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blogx() {
    const posts = useLoaderData();

    return (
        <>
            <h2>Blog Post</h2>
            <br />
            <h2>Data Dari API Eksternal</h2>
            {posts.map((item, index) => (
                <div key={index}>
                    <Link to={`/blogs/${item.id}`}>- {item.title}</Link>
                </div>
            ))}
        </>
    );
}

export default Blogx;