import { FollowerCounter } from "@/components/FollowerCounter";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-card border-b px-6 py-4">
				<h1 className="text-2xl font-bold text-foreground">SNS Counter</h1>
			</header>
			<main className="flex-1 p-6 max-w-4xl mx-auto w-full">
				<div className="flex justify-center">
					<FollowerCounter />
				</div>
			</main>
		</div>
	);
}

export default App;
