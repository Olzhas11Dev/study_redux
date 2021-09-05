import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {saveTodo} from './features/TodoSlice'

function InputSection() {
    const[input,setInput] = useState()
    const dispatch = useDispatch()

    const addToState = ()=>{
        dispatch(saveTodo({
            id: Math.random(),
            text:input,
            done: false
        }))
        setInput('')
    }

    return (
        <div>
            <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='add something' 
            value={ input ? input: '' } />
            <button onClick={addToState} >Add</button>
        </div>
    )
}

export default InputSection
