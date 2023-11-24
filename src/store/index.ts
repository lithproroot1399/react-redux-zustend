import {configureStore, createSlice} from '@reduxjs/toolkit'
        
    const todoSlice = createSlice({
        name: 'todo',
        initialState: ['Fazer cafe', 'Estudar redux', 'Estudar Zustend'],

        reducers: {
            add: (state, action) => {
                console.log(state, action)
            },

        },
    })    

export const Store =  configureStore({
        reducer: {
            todo: todoSlice.reducer,
        }
    })

    export const { add } = todoSlice.actions