import React from 'react'

export default function Todo({todo}) {
  function todoChecked(e) {
    console.log(e.target.checked);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={todoChecked} />
        {todo.name}
      </label>
    </div>
  )
}
