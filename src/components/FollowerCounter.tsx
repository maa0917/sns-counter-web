import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFollowerCount } from "@/hooks/useFollowerCount";

export function FollowerCounter() {
	const { followerCount, isLoading, error, refresh } = useFollowerCount();

	const formatNumber = (num: number) => {
		return num.toLocaleString();
	};

	return (
		<Card className="w-full max-w-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<span>👥</span>
					SNS Counter
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="text-center">
					<div className="text-3xl font-bold text-primary mb-1">
						{followerCount !== null ? formatNumber(followerCount) : "—"}
					</div>
					<p className="text-sm text-muted-foreground">フォロワー</p>
				</div>

				{error && (
					<div className="text-sm text-red-500 text-center bg-red-50 p-2 rounded">
						{error}
					</div>
				)}

				<Button onClick={refresh} disabled={isLoading} className="w-full">
					{isLoading ? "更新中..." : "フォロワー数を更新"}
				</Button>
			</CardContent>
		</Card>
	);
}
