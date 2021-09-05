import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {deleteTodo,saveTodo} from './features/TodoSlice'


function Item({elem}) {
    const[modal,setModal] = useState(false)
    const dispatch = useDispatch()
    const mainState = useSelector(state => state.todos.todoList)
    const[edit,setEdit] = useState('')

    const removeItem = (id)=>{  
        dispatch(deleteTodo({id}))
    }
  
    const handleEdit = (id) =>{
        removeItem(id)
        dispatch(saveTodo({
            id: Math.random(),
            text:edit,
            done: false
        }))
    }

    return (
        <div>
            {elem.text}
           <button onClick={()=>removeItem(elem.id)} >delete</button>
           <button onClick={()=>setModal(true)} >Update</button>
           {modal ? <div>
               <input onChange={(e)=>setEdit(e.target.value)} defaultValue={elem.text} type="text"/>
                <button onClick={()=> handleEdit(elem.id)}>Update</button>
           </div> : null}
        </div>
    )
}

export default Item
