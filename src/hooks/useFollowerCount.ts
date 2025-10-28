import { useState } from "react";
import { getFollowerCount, ApiError } from "@/api/followerCount";

interface UseFollowerCountReturn {
	followerCount: number | null;
	loading: boolean;
	error: string | null;
	refresh: () => Promise<void>;
}

export function useFollowerCount(): UseFollowerCountReturn {
	const [followerCount, setFollowerCount] = useState<number | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const refresh = async () => {
		setLoading(true);
		setError(null);

		try {
			const followerCount = await getFollowerCount();
			setFollowerCount(followerCount);
		} catch (err) {
			if (err instanceof ApiError) {
				setError(err.message);
			} else {
				setError("予期しないエラーが発生しました");
			}
		} finally {
			setLoading(false);
		}
	};

	return {
		followerCount,
		loading,
		error,
		refresh,
	};
}
