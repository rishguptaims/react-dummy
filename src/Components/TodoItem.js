import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
     <h4>{todo.sno}</h4>
     <p>{todo.title}</p>
     <button className='btn btn-sm btn-danger' onClick={ () =>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

