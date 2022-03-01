import React, { useState } from "react";

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt.toTimeString()}</label>
    </td>
  </tr>
);

export default function ToDoList() {
  const date = new Date();
  const todoCounter = 1;
  const [state, setState] = useState({
    todoCounter: todoCounter,
    list: [
      {
        id: todoCounter,
        createdAt: date,
      },
    ],
  });

  function sortByEarliest() {
    const sortedList = state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    setState({
      list: [...sortedList],
    });
  }

  function sortByLatest() {
    const sortedList = state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    setState({
      list: [...sortedList],
    });
  }

  function addToEnd() {
    const date = new Date();
    const nextId = state.todoCounter + 1;
    const newList = [...state.list, { id: nextId, createdAt: date }];
    setState({
      list: newList,
      todoCounter: nextId,
    });
  }

  function addToStart() {
    const date = new Date();
    const nextId = state.todoCounter + 1;
    const newList = [{ id: nextId, createdAt: date }, ...state.list];
    setState({
      list: newList,
      todoCounter: nextId,
    });
  }
  return (
    <div>
      <code>key=index</code>
      <br />
      <button onClick={addToStart}>Add New to Start</button>
      <button onClick={addToEnd}>Add New to End</button>
      <button onClick={sortByEarliest}>Sort by Earliest</button>
      <button onClick={sortByLatest}>Sort by Latest</button>
      <table>
        <tr>
          <th>ID</th>
          <th />
          <th>created at</th>
        </tr>
        {state.list.map((todo, index) => (
          <ToDo key={index} {...todo} />
        ))}
      </table>
    </div>
  );
}
