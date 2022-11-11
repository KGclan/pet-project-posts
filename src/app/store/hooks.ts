import { useDispatch } from "react-redux";

import { store } from "./index";

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;