import { Home } from './Home';
import { NewPost } from './NewPost';
import { EditPost } from './EditPost';
import { PostPage } from './PostPage';
import { About } from './About';
import { Missing } from './Missing';
import { Layout } from './Layout';
import { Route, Routes,} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='post'>
          <Route index element={<NewPost/>} />
          <Route path=':id' element={<PostPage/>} />
        </Route>
        <Route path='/edit/:id' element={<EditPost/>} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  )
}

export default App