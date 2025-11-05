import { useQuery } from "@tanstack/react-query";
import { getFollowerCount, ApiError } from "@/api/followerCount";

interface UseFollowerCountReturn {
	followerCount: number | null;
	isLoading: boolean;
	error: string | null;
	refresh: () => void;
}

export function useFollowerCount(): UseFollowerCountReturn {
	const {
		data: followerCount,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ["follower-count"],
		queryFn: async () => {
			try {
				return await getFollowerCount();
			} catch (err) {
				if (err instanceof ApiError) {
					throw new Error(err.message);
				}
				throw new Error("予期しないエラーが発生しました");
			}
		},
		refetchInterval: 30000, // 30秒ごとに自動更新
		retry: 3,
	});

	const errorMessage = error?.message || null;

	return {
		followerCount: followerCount ?? null,
		isLoading,
		error: errorMessage,
		refresh: refetch,
	};
}
