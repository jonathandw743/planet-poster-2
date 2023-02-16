import CreateQuestion from "./CreateQuestion";
import Questions from "./Questions";

async function getSession(sessionId: string) {
	const res = await fetch(`${process.env.LOCATION_ORIGIN}/api/session/${sessionId}`);
	const data = res.json();
	return data;
}

export default async function Session({ params }: any) {
	const { id } = params;
	const session = await getSession(id);

	return (
		<>
			<h1>session</h1>
			<p> session id: {session.id}</p>
			<p> session name: {session.name}</p>
			<CreateQuestion sessionId={id} />
			<Questions questions={session.questions} />
		</>
	);
}
