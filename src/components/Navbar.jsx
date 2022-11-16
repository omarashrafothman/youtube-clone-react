import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      {/* <img src={logo} alt="logo" height={45} /> */}
      <i class="fa-solid fa-play" style={{ color: 'blue', height: '45', left: 5, fontSize: 30 }}></i>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
