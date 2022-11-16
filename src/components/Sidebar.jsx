import React from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

import { categories } from "../utils/constants";

const Categories = ({ category }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((ele) => (
      <NavLink key={ele.name} to={`/feed/${ele.name}`} className="category-btn" style={{
        background: ele.name === category && "blue",
        color: "white",
      }}>
        <span style={{ color: ele.name === category ? "white" : "blue", marginRight: "15px" }}>
          {ele.icon}
        </span>
        <span style={{ opacity: ele.name === category ? "1" : "0.8" }}>
          {ele.name}
        </span>
      </NavLink>
    ))}
  </Stack>
);

export default Categories;
