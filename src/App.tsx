import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router";
import { FollowerCounter } from "@/components/FollowerCounter";
import { Button } from "@/components/ui/button";

function HomePage() {
	return (
		<div className="flex justify-center">
			<FollowerCounter />
		</div>
	);
}

function SettingsPage() {
	return (
		<div className="flex justify-center">
			<div className="w-full max-w-4xl">
				<h2 className="text-2xl font-bold mb-6">ユーザー管理</h2>
				<p>管理画面の内容をここに実装予定</p>
			</div>
		</div>
	);
}

function Navigation() {
	const location = useLocation();
	
	return (
		<nav className="flex gap-2">
			<Button asChild variant={location.pathname === "/" ? "default" : "outline"}>
				<Link to="/">ホーム</Link>
			</Button>
			<Button asChild variant={location.pathname === "/settings" ? "default" : "outline"}>
				<Link to="/settings">設定</Link>
			</Button>
		</nav>
	);
}

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen flex flex-col">
				<header className="bg-card border-b px-6 py-4">
					<div className="flex items-center justify-between">
						<h1 className="text-2xl font-bold text-foreground">SNS Counter</h1>
						<Navigation />
					</div>
				</header>
				<main className="flex-1 p-6 max-w-4xl mx-auto w-full">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/settings" element={<SettingsPage />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
