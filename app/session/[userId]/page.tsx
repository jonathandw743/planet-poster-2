import { getFullSession } from "@/pages/api/session/[id]";
import { getUser } from "@/pages/api/user/[id]";
import Answers from "./Answers";
import CreateQuestion from "./CreateQuestion";
import Questions from "./Questions";
import RefreshButton from "./RefreshButton";

export default async function Session({ params }: any) {
	const { userId } = params;
	const user = await getUser(userId);
	const session = await getFullSession(user.session);

	if (typeof user.id === "undefined") {
		return <>no such thing</>;
	}

	return (
		<>
			<h1>session</h1>
			<p>Save the URL of this page to rejoin.</p>
			<RefreshButton />
			<p>user id: {user.id}</p>
			<p>user nickname: {user.nickname}</p>
			<p>session id: {session.id}</p>
			<p>session name: {session.name}</p>
			<CreateQuestion sessionId={session.id} />
			<Questions questions={session.questions} userId={user.id} />
			<Answers questions={session.questions}/>
		</>
	);
}
