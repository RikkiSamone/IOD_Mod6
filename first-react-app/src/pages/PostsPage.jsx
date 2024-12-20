//Dynamic Routes

import { Outlet, useParams, useSearchParams, Link } from "react-router-dom";
import { useData } from "../hooks/useData.jsx"

// save as pages/PostsPage.jsx
export default function PostsPage() {
return (
    <div className="Posts">
        <h1>Posts</h1>
            <Outlet />
    </div>
)
}

export function PostList() { // updated from slide 60, replace old version
    const [searchParams, setSearchParams] = useSearchParams(); // import this hook
    const limit = searchParams.get('limit') ? searchParams.get('limit') : 5;
    const postsData = useData("https://jsonplaceholder.typicode.com/posts?_limit=" + limit);
    
const handleChangeLimit = (e) => {
setSearchParams({limit: e.target.value})
}
    
// the ? means only call map if postsData is not null
const postList = postsData?.map((post) => (
    <li key={post.id}>
        <Link to={"/posts/" + post.id}>
            Post #{post.id}: {post.title}
        </Link>
    </li>
));
    console.log(postList);
return (
<>
    <ul>{postList}</ul>
    <Link to='/posts?limit=10'>Load 10 Posts</Link>
</>
);
}

// add to PostsPage.jsx
export function Post() {
const { id } = useParams(); // custom hook to access dynamic params
const post =
    useData('https://jsonplaceholder.typicode.com/posts/' + id);
    
return (
    <div className="Post">
        {post ?
            <><h3>Post #{post.id}: {post.title}</h3>
                <p>{post.body}</p></>
                : "Loading ..." }
    </div>
)
}