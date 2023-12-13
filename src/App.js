import logo from "./logo.svg";
import "./App.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setPostsRequest,
    setPostsSuccess,
} from "./redux/actions/postActions/postActions";

function App() {
    const posts = useSelector((state) => state.post.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPostsRequest());
    }, [dispatch]);
    console.log(posts);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
