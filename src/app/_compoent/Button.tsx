"use client";

import { useCallback, useState } from "react";
import { createUser } from "../_action/user";

export default function AddButton() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = useCallback(async () => {
		try {
			const newUser = await createUser({
				name,
				email,
				password,
			});
			console.log(newUser);
		} catch (error) {
			console.error(error);
		}
	}, [name, email, password]);

	return (
		<>
			<input
				type="text"
				name="name"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Name"
			/>
			<input
				type="email"
				name="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
			/>
			<input
				type="password"
				name="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			<button
				onClick={handleSubmit}
				className="bg-blue-500 text-white p-2 rounded-md"
			>
				Click me
			</button>
		</>
	);
}
