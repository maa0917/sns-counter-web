import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function InstagramCounter() {
	// モックデータ（後でAPIから取得）
	const [followers, setFollowers] = useState(12543);
	const [loading, setLoading] = useState(false);

	// モック更新関数（後で実際のAPI呼び出しに変更）
	const handleRefresh = async () => {
		setLoading(true);
		
		// APIコールの代わりにランダムな値で更新
		setTimeout(() => {
			const randomChange = Math.floor(Math.random() * 100) - 50; // -50 to +50
			setFollowers(prev => Math.max(0, prev + randomChange));
			setLoading(false);
		}, 1500);
	};

	const formatNumber = (num: number) => {
		return num.toLocaleString();
	};

	return (
		<Card className="w-full max-w-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<span>📷</span>
					Instagram
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="text-center">
					<div className="text-3xl font-bold text-primary mb-1">
						{formatNumber(followers)}
					</div>
					<p className="text-sm text-muted-foreground">フォロワー</p>
				</div>

				<Button 
					onClick={handleRefresh}
					disabled={loading}
					className="w-full"
				>
					{loading ? "更新中..." : "フォロワー数を更新"}
				</Button>
			</CardContent>
		</Card>
	);
}