import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

import { useAppDispatch } from "app/store/hooks";
import { postModel } from "entities/post";



export const useSearch = () => {
    const dispatch = useAppDispatch();
    const [searchPhrase, setSearchPhrase] = useState('');

    const setSearchPhraseDebounsed = debounce((phrase: string) => {
        setSearchPhrase(phrase);
    }, 300);

    useEffect(() => {
        dispatch(postModel.getSearchedPosts(searchPhrase));
    }, [dispatch, searchPhrase]);

    return { setSearchPhraseDebounsed };
};