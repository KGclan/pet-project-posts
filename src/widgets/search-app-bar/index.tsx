import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import { Search } from "features/search-field";

const SearchAppBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  PET-POSTS
                </Typography>
                <Search />
            </Toolbar>
        </AppBar>
    );
};

export default SearchAppBar;