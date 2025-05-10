import Image from "next/image";
import AddButton from "./_compoent/Button";
import { getUsers } from "./_action/user";

export default async function Home() {
	const users = await getUsers();
	console.log(users);
	return (
		<div>
			<h2 className="text-3xl font-bold underline">"hi"</h2>
			<AddButton />
		</div>
	);
}
