import { configureStore } from "@reduxjs/toolkit"
import { useSelector, TypedUseSelectorHook } from "react-redux"

export const store = configureStore({
    reducer: {}
})

export type RootStore = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector