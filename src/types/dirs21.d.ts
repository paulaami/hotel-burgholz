declare global {
	interface Window {
		dirs21?: {
			openOne: (params?: any) => void;
			rebindTriggers: () => void;
		};
	}
}

export {};
