import React from "react";
import { TextField } from "@mui/material";

import { useSearch } from "../models";

import styles from "./styles.module.scss";

const Search = () => {
    const { setSearchPhraseDebounsed } = useSearch();

    return (
        <TextField
            size="small"
            placeholder="Search"
            onChange={(e) => setSearchPhraseDebounsed(e.target.value)}
        />
    );
};

export default Search;