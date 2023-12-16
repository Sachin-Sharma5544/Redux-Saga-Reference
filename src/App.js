import "./App.css";
import FetchPostsButton from "./components/FetchButton/FetchPostsButton";
import PostComponent from "./components/post/PostComponent";
import PostsComponent from "./components/posts/PostsComponent";

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
