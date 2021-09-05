import {createSlice} from '@reduxjs/toolkit'       // rsslice snippet

// Initial State
const initialState = {
    todoList : []
}

//Slice
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        saveTodo: (state,action) =>{
            state.todoList.push(action.payload)
        },
        deleteTodo: (state,action) =>{
            state.todoList = state.todoList.filter((x) => x.id!== action.payload.id)
        },
    }
})

// Export  for Dispatch
export const { saveTodo,deleteTodo } = todoSlice.actions

// Export  for Store
export default todoSlice.reducer







