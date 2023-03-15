import { getSessions } from "@/pages/api/sessions";
import GenerateLink from "./GenerateLink";
import Link from "next/link";

export default async function JoinSession() {
	const sessions = await getSessions();
	console.log(sessions);
	return (
		<>
			<GenerateLink />
			<fieldset>
				<legend>existing sessions</legend>
				<ul>
					{sessions.map((session: any, i: number) => (
						<li key={i}>
							<p>session id: {session.id}</p>
							<p>session name: {session.name}</p>
							<Link href={`/joinsession/${session.id}`}>link</Link>
						</li>
					))}
				</ul>
			</fieldset>
		</>
	);
}
