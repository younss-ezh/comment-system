import { Routes, Route, Link } from 'react-router-dom'
import { Post } from './components/Post';
import { PostList } from "./components/PostList";
import { PostProvider } from './contexts/PostContext';


function App() {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<PostList />} />
                <Route path='/posts/:id' element={<PostProvider>
                    <Post />
                </PostProvider>} />
            </Routes>
        </div>
    )
}

export default App ;