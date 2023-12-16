import "./App.css";
import FetchPostsButton from "./components/app components/FetchButton/FetchPostsButton";
import PostComponent from "./components/app components/post/PostComponent";
import PostsComponent from "./components/app components/posts/PostsComponent";

function App() {
    return (
        <div className="App">
            <PostComponent />
            <PostsComponent />
            <FetchPostsButton></FetchPostsButton>
        </div>
    );
}

export default App;
