import './App.css';
import Posts from "./components/posts/Posts";
import FullPost from "./components/fullpost/FullPost";
import {useState} from "react";

function App() {
    let [detailPost, setDetailPost] = useState(null);
    const lift = (obj) => {
        setDetailPost({...obj});
    }

    return (
        <div className={'container'}>
            <div className={'posts'}>
                {
                    <Posts lift={lift}/>
                }
            </div>
            {
                detailPost &&
                (<div className={'detail'}>
                        <FullPost value={detailPost}/>
                </div>)
            }
        </div>
    );
}

export default App;
