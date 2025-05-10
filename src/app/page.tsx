import Image from "next/image";
import AddButton from "./_compoent/Button";

export default async function Home() {
	return (
		<div>
			<h2 className="text-3xl font-bold underline">"hi"</h2>
			<AddButton />
		</div>
	);
}
