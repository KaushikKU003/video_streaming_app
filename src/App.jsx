import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Music from "./components/Music";
import Layout from "./components/Layout";
import Gaming from "./components/Gaming";
import Technology from "./components/Technology";
import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trending" element={<Trending />} />
          <Route path="musics" element={<Music />} />
          <Route path="gaming" element={<Gaming />} />
          <Route path="technology" element={<Technology />} />
          <Route path="/video/:videoId" element={<VideoDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
