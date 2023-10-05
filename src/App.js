import React, { useState } from 'react'
import "./App.css"
import TodoInput from './extracomponent/TodoInput'
import TodolList from './extracomponent/TodolList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList= (inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading"> Task TO DO</h1>
        <hr />
        {listTodo.map((listItem,i)=>{
          return (
            <TodolList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )

        })}
      </div>
    </div>

  )
}

export default App
