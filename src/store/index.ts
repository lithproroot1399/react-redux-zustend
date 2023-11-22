import {configureStore, createSlice} from '@reduxjs/toolkit'

    const todoSlice = createSlice({
        name: 'todo',
        initialState: ['Fazer cafe', 'Estudar redux'],

        reducers: {},
    })    

export const Store =  configureStore({
        reducer: {
            todo: todoSlice.reducer
        }
    })