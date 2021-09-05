import React from 'react'
import Item from './Item'
import {useSelector} from 'react-redux'

function ListSection() {
const elem = useSelector((state) => state.todos.todoList)   
console.log(elem)
    return (
        <div>
            {elem.map((e)=><Item  elem={e} key={e.id} />)}
            
        </div>
    )
}

export default ListSection
