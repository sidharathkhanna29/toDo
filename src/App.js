import './App.css';
import React, {useEffect, useState} from 'react';
import TaskList from './Presentation/TaskList';
import NewTask from './Presentation/NewTask';
import Time from './Presentation/Time';

export default function App() { 

	const [newTask, setNewTask] = useState({});
	const [allTask, setAllTask] = useState([]);
	const [name] = useState('Sid');

	const handleOnChange = ( { target } ) => {
		const {name, value} = target;
		setNewTask((prev) => ({...prev, id:Date.now(), [name]:value}));
	};
	
	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (!newTask.title) return;
		setAllTask((prev) => [newTask, ...prev]);
		setNewTask({});
	};

	const handleOnDelete = (taskIdToremove) => {
		setAllTask((prev) => prev.filter((task) => task.id !== taskIdToremove));
	};

	useEffect(()=>{
		document.title = `${name}'s App`
	})

	return (
		<div>
			<h1>Tasks</h1>
			<NewTask newTask={newTask} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange}/>
			<TaskList allTask={allTask} handleOnDelete={handleOnDelete}/>
			<Time/>
			<footer>@SidharathKhanna</footer>
		</div>
	);
}
