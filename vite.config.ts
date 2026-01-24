import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
	plugins: [vue()],
	base: "/",
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	build: {
		// SEO: Generuj sourcemaps dla produkcji
		sourcemap: false,
		// Optymalizacja rozmiaru bundle
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["vue", "vue-router"],
				},
			},
		},
		// Minifikacja
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
	// Server settings dla development
	server: {
		port: 3000,
		open: true,
	},
});
