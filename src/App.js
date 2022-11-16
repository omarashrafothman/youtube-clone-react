import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route element={<Navigate to="/feed" replace />} index />
          <Route path="feed">
            <Route element={<Navigate to="/feed/New" replace />} index />
            <Route path=":category" element={<Feed />} />
          </Route>
          <Route path="video">
            <Route path=":id" element={<VideoDetail />} />
          </Route>
          <Route path="channel">
            <Route path=":id" element={<ChannelDetail />} />
          </Route>
          <Route path="search">
            <Route path=":searchTerm" element={<SearchFeed />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
