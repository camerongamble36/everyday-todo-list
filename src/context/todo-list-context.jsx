import React, { useState, createContext, useEffect } from 'react';
import { DUMMY_TODO_LIST_ITEMS } from '../data/dummy-data';

// Create the context
const TodoListContext = createContext();

// Create a provider component
const TodoListProvider = ({ children }) => {
	const [todoList, setTodoList] = useState([...DUMMY_TODO_LIST_ITEMS]);

	const baseUrl = 'http://localhost:5127';

	// Function to update the todoList
	const updateTodoList = (newTodoList) => {
		setTodoList(newTodoList);
	};

	useEffect(() => {
		const loadTodoList = async () => {
			const res = await fetch(`${baseUrl}/api/EverydayTodoList`, {
				headers: {
					Origin: null,
				},
				method: 'GET',
			});

			if (res.ok) {
				const data = await res.json();

				console.log(data);
			}
		};

		loadTodoList();
	}, []);

	return (
		<TodoListContext.Provider value={{ todoList, updateTodoList }}>
			{children}
		</TodoListContext.Provider>
	);
};

export { TodoListContext, TodoListProvider };
