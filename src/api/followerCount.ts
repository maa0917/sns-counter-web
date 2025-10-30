const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface FollowerCountResponse {
	count: number;
}

export class ApiError extends Error {
	public status?: number;

	constructor(message: string, status?: number) {
		super(message);
		this.name = "ApiError";
		this.status = status;
	}
}

export async function getFollowerCount(): Promise<number> {
	if (!API_BASE_URL || !API_TOKEN) {
		throw new ApiError(
			"API設定が不正です。環境変数VITE_API_BASE_URLとVITE_API_TOKENを設定してください。",
		);
	}

	try {
		const response = await fetch(`${API_BASE_URL}/api/v1/followers/count`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${API_TOKEN}`,
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new ApiError(
				`API呼び出しに失敗しました: ${response.status} ${response.statusText}`,
				response.status,
			);
		}

		const data: FollowerCountResponse = await response.json();

		return data.count;
	} catch (error) {
		if (error instanceof ApiError) {
			throw error;
		}

		if (error instanceof TypeError && error.message.includes("fetch")) {
			throw new ApiError("ネットワークエラー: APIサーバーに接続できません");
		}

		throw new ApiError("予期しないエラーが発生しました");
	}
}
