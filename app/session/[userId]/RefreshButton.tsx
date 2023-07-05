"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RefreshButton({ auto }: any) {
	const router = useRouter();

	function refresh() {
		router.refresh();
	}

	useEffect(() => {
		const interval = setInterval(refresh, 5000);
	
		return () => {
		  clearInterval(interval);
		};
	  }, []);


	return (
		<>
			<button onClick={refresh}>{`refresh${auto && ` (auto polling every 5s)`}`}</button> (preserves state)
		</>
	);
}
