import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticleList } from "./pages/articles/articleList";
import { ArticleDetail } from "./pages/articles/articleDetail";
import { NotFound } from "./pages/misc/notFound";
import { Header } from "./components/layout/Header";
import './App.css';

function Router() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="Routes">
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/all" element={<ArticleList />} />
            <Route path="/articles/game" element={<ArticleList type="Game"/>} />
            <Route path="/articles/movie" element={<ArticleList type="Movie"/>} />
            <Route path="/articles/book" element={<ArticleList type="Book"/>} />
            <Route path="/articles/tech" element={<ArticleList type="Tech"/>} />
            <Route path="/articles/game/:id" element={<ArticleDetail />} />
            <Route path="/articles/movie/:id" element={<ArticleDetail />} />
            <Route path="/articles/book/:id" element={<ArticleDetail />} />
            <Route path="/articles/tech/:id" element={<ArticleDetail />} />
            <Route path="/articles/all/:id" element={<ArticleDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Router
