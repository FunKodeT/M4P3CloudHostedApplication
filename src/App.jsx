//#region imports
//#region react
import { useState, useEffect } from 'react';
//#endregion
//#region appCSS
import './App.css';
//#endregion
//#region custom
import { db } from './firebase-config';
//#endregion
//#region firestore
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
} from 'firebase/firestore';
//#endregion
//#endregion
//#region main
function App() {
	//#region globals
	//#region states
	//#region newName
	const [newName, setNewName] = useState('');
	//#endregion
	//#region newAge
	const [newAge, setNewAge] = useState(0);
	//#endregion
	//#region users
	const [users, setUsers] = useState([]);
	//#endregion
	//#endregion
	//#region variables
	//#region dbCollections
	const usersCollectionRef = collection(db, 'users');
	console.log('Number 1', usersCollectionRef);
	//#endregion
	//#endregion
	//#region functions
	//#region createUser()
	const createUser = async () => {
		await addDoc(usersCollectionRef, {
			name: newName,
			age: Number(newAge),
		});
		console.log('Number 2', usersCollectionRef);
	};
	//#endregion
	//#region updateUser()
	const updateUser = async (id, age) => {
		const userDoc = doc(db, 'users', id);
		const newFields = { age: age + 1 };
		await updateDoc(userDoc, newFields);
	};
	//#endregion
	//#region deleteUser()
	const deleteUser = async (id) => {
		const userDoc = doc(db, 'users', id);
		await deleteDoc(userDoc);
	};
	//#endregion
	//#endregion
	//#region effects
	//#region getUsers
	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			console.log('Number 3', usersCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getUsers();
	}, [usersCollectionRef]);
	//#endregion
	//#endregion
	//#endregion
	//#region HTML
	return (
		<div className="App">
			<input
				placeholder="Name..."
				onChange={(event) => {
					setNewName(event.target.value);
				}}
			/>
			<input
				type="number"
				placeholder="Age..."
				onChange={(event) => {
					setNewAge(event.target.value);
				}}
			/>
			<button onClick={createUser}>Create User</button>
			{users.map((user) => {
				return (
					<div>
						{' '}
						<h1>Name: {user.name}</h1>
						<h1>Age: {user.age}</h1>
						<button
							onClick={() => {
								updateUser(user.id, user.age);
							}}>
							{' '}
							Increase Age
						</button>
						<button
							onClick={() => {
								deleteUser(user.id);
							}}>
							{' '}
							Delete User
						</button>
					</div>
				);
			})}
		</div>
	);
	//#endregion
}
//#endregion

//#region exports
export default App;
//#endregion

// -- old --
//#region prevIterations
//#region imports
//#region custom
//#endregion
//#region appCSS
//#endregion
//#region react
//#endregion
//#region firestore
//#endregion
//#endregion
//#region main
//#region globals
//#region states
//#region newName
//#endregion
//#region newAge
//#endregion
//#region users
//#endregion
//#endregion
//#region variables
//#region dbCollections
//#endregion
//#endregion
//#region functions
//#region createUser()
//#endregion
//#region updateUser()
//#endregion
//#region deleteUser()
//#endregion
//#endregion
//#region effects
//#region getUsers
// console.log(data)
//#endregion
//#endregion
//#endregion
//#region HTML
//#endregion
//#endregion
//#region exports
//#endregion
//#endregion
