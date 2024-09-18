import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearComplated } from '../../redux/todoSlice/todoSlice'

const ToDoFooter = () => {
	const items = useSelector(state=>state.todos.items)
	const dispath = useDispatch()
  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{items.length} </strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className="selected">All</a>
			</li>
			<li>
				<a href="#/">Active</a>
			</li>
			<li>
				<a href="#/">Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={() => {
			dispath(clearComplated())
		  }}>
			Clear completed
		</button>
	</footer>
  )
}

export default ToDoFooter