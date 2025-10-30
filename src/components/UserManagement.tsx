import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function UserManagement() {
	const [selectedPlatform, setSelectedPlatform] = useState<string>("instagram");

	const platforms = [
		{
			id: "instagram",
			name: "Instagram",
			description: "Instagramのフォロワー数を取得",
			enabled: true,
		},
		{
			id: "twitter",
			name: "X (Twitter)",
			description: "X (Twitter)のフォロワー数を取得",
			enabled: false,
		},
		{
			id: "youtube",
			name: "YouTube",
			description: "YouTubeのチャンネル登録者数を取得",
			enabled: false,
		},
	];

	return (
		<div className="w-full max-w-4xl space-yじょうたい-6">
			<h2 className="text-2xl font-bold">ユーザー管理</h2>

			<Card>
				<CardHeader>
					<CardTitle>プラットフォーム設定</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<p className="text-muted-foreground">
						フォロワー数を取得するSNSプラットフォームを選択してください。
					</p>

					<RadioGroup
						value={selectedPlatform}
						onValueChange={setSelectedPlatform}
					>
						{platforms.map((platform) => (
							<div
								key={platform.id}
								className={`flex items-center space-x-3 p-3 border rounded-lg ${platform.enabled ? "hover:bg-muted/50" : "opacity-50 cursor-not-allowed"}`}
							>
								<RadioGroupItem
									value={platform.id}
									id={platform.id}
									disabled={!platform.enabled}
								/>
								<Label
									htmlFor={platform.id}
									className={`flex items-center space-x-3 flex-1 ${platform.enabled ? "cursor-pointer" : "cursor-not-allowed"}`}
								>
									<div>
										<div className="font-medium flex items-center gap-2">
											{platform.name}
											{!platform.enabled && (
												<span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
													準備中
												</span>
											)}
										</div>
										<div className="text-sm text-muted-foreground">
											{platform.description}
										</div>
									</div>
								</Label>
							</div>
						))}
					</RadioGroup>

					<div className="flex justify-end pt-4">
						<Button>設定を保存</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
