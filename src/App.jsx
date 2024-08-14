import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import UpdatePage from "./pages/EditPage";
import PostPage from "./pages/PostPage";
import NotFound from "./pages/NotFound";
import DeletePage from "./pages/DeletePage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<PostPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/update-post/:id" element={<UpdatePage />} />
          <Route path="/delete-post/:id" element={<DeletePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
