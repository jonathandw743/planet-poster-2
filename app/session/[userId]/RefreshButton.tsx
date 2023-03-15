"use client";

import { useRouter } from "next/navigation";

export default function RefreshButton() {
	const router = useRouter();

	function refresh() {
		router.refresh();
	}

	return (
		<>
			<button onClick={refresh}>refresh</button> (preserves state)
		</>
	);
}
