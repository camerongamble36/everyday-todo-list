import React from 'react';

const ToDoListItem = (props) => {
	console.log(props);

	return (
		<li className="list-item__container">
			<h1>{props.listItem.title}</h1>
		</li>
	);
};

export default ToDoListItem;
