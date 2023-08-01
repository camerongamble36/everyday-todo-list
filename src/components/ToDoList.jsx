import React, { useContext, useEffect, useState } from 'react';
import ToDoListItem from './ToDoListItem';
import { TodoListContext } from '../context/todo-list-context';

const ToDoList = () => {
	const todoListContext = useContext(TodoListContext);

	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		const loadedTodoListItems = todoListContext.todoList;

		console.log(loadedTodoListItems);
		setTodoList(loadedTodoListItems);
	}, [todoListContext.todoList]);

	return (
		<ul className="">
			{todoList.length > 0 ? (
				todoList.map((item) => {
					return <ToDoListItem listItem={item} />;
				})
			) : todoList == null || todoList.length <= 0 ? (
				<h1>No Todo Items</h1>
			) : null}
		</ul>
	);
};

export default ToDoList;
