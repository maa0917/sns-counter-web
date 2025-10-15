import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-card border-b px-6 py-4">
				<h1 className="text-2xl font-bold text-foreground">SNS Counter</h1>
			</header>
			<main className="flex-1 p-6 max-w-6xl mx-auto w-full">
				<Card className="max-w-md">
					<CardHeader>
						<CardTitle>SNSカウンター</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground mb-4">
							SNSカウンターアプリケーション
						</p>
						<Button>テストボタン</Button>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}

export default App;
