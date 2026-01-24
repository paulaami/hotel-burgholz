import { onMounted, onUnmounted } from "vue";

interface SEOConfig {
	title: string;
	description: string;
	keywords?: string;
	ogImage?: string;
	canonical?: string;
	ogType?: string;
}

export function useSEO(config: SEOConfig) {
	const originalTitle = document.title;

	onMounted(() => {
		// Title
		document.title = config.title;

		// Meta Description
		updateMetaTag("name", "description", config.description);

		// Keywords
		if (config.keywords) {
			updateMetaTag("name", "keywords", config.keywords);
		}

		// Open Graph
		updateMetaTag("property", "og:title", config.title);
		updateMetaTag("property", "og:description", config.description);
		updateMetaTag("property", "og:type", config.ogType || "website");

		if (config.ogImage) {
			updateMetaTag("property", "og:image", config.ogImage);
		}

		if (config.canonical) {
			updateMetaTag("property", "og:url", config.canonical);
			updateCanonical(config.canonical);
		}

		// Twitter
		updateMetaTag("name", "twitter:title", config.title);
		updateMetaTag("name", "twitter:description", config.description);

		if (config.ogImage) {
			updateMetaTag("name", "twitter:image", config.ogImage);
		}
	});

	onUnmounted(() => {
		// Przywróć oryginalny tytuł
		document.title = originalTitle;
	});
}

function updateMetaTag(attr: string, key: string, content: string) {
	let element = document.querySelector(
		`meta[${attr}="${key}"]`,
	) as HTMLMetaElement;

	if (!element) {
		element = document.createElement("meta");
		element.setAttribute(attr, key);
		document.head.appendChild(element);
	}

	element.setAttribute("content", content);
}

function updateCanonical(url: string) {
	let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

	if (!link) {
		link = document.createElement("link");
		link.setAttribute("rel", "canonical");
		document.head.appendChild(link);
	}

	link.setAttribute("href", url);
}
