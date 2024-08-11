import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import { AddTodo } from './Components/AddTodo';
import { useState } from 'react';
import { About } from './Components/About';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const onDelete = (todo) => {
    console.log('Deleting Todo', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.getItem("todos")
  }

  const addTodo = (title) => {
    console.log('Hi')
    let sno
    if (todos.length == 0) {
      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)


  }

  const [todos, setTodos] = useState([
  ])
  return (
    <>
        <Header title='My Todos List' searchBar={true} />
        <BrowserRouter>
        <Routes>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  );
}

export default App;
