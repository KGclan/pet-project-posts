import React from "react";

import { Search } from "features/search-field";

import styles from "./styles.module.scss";

const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <Search />
        </div>
    );
};

export default Sidebar;