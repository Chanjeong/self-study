import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import TechPage from './components/MainPage/TechPage';
import BlogPage from './components/MainPage/BlogPage';
import JavascriptPage from './components/MainPage/JavascriptPage';
import ReactPage from './components/MainPage/ReactPage';
import ReactDocPage from './components/MainPage/ReactDocPage';
import UserStore from './store/user';
import HookForm from './components/HookForm';

function App() {
  return (
    <HookForm />
    // <UserStore>
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path={'/'} element={<MainPage />}></Route>
    //             <Route path={'tech'} element={<TechPage />}>
    //                 <Route path="javascript" element={<JavascriptPage />} />
    //                 <Route path="react" element={<ReactPage />} />
    //                 <Route path="react/:docId" element={<ReactDocPage />} />
    //             </Route>
    //             <Route path={'blog'} element={<BlogPage />}></Route>
    //         </Routes>
    //     </BrowserRouter>
    // </UserStore>
  );
}

export default App;
