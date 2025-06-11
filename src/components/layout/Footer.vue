<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-wrapper">
				<div class="footer-section">
					<h3 class="footer-heading">KONTAKT</h3>
					<div class="address">
						<p>Hotel Burgholz</p>
						<p>Am Burgholz 27</p>
						<p>52372 Kreuzau - Stockheim</p>
						<p>Deutschland</p>
					</div>
					<div class="contact-info">
						<p>Tel. +49(0)24215589200</p>
						<p>Tel. +49(0)176 23896507</p>
						<p>kontakt@hotel-burgholz.de</p>
						<p>reservierung@hotel-burgholz.de</p>
					</div>
					<div class="social-icons">
						<a href="#" class="social-icon" aria-label="Facebook">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
								/>
							</svg>
						</a>
						<a href="#" class="social-icon" aria-label="Instagram">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
								<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
							</svg>
						</a>
						<a href="#" class="social-icon" aria-label="WhatsApp">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div class="footer-section">
					<h3 class="footer-heading">MENU</h3>
					<nav class="footer-links">
						<a href="#" class="footer-link">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="link-icon"
							>
								<polyline points="9 18 15 12 9 6" />
							</svg>
							ONLINE BUCHEN
						</a>
						<a href="#" class="footer-link">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="link-icon"
							>
								<polyline points="9 18 15 12 9 6" />
							</svg>
							JOBS
						</a>
						<a href="#" class="footer-link">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="link-icon"
							>
								<polyline points="9 18 15 12 9 6" />
							</svg>
							KONTAKT & LAGE
						</a>
					</nav>
				</div>
			</div>
		</div>
		<div class="scroll-top-button" @click="scrollToTop">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="18 15 12 9 6 15" />
				<polyline points="18 9 12 3 6 9" />
			</svg>
		</div>
		<div class="footer-bottom">
			<div class="container">
				<div class="legal-links">
					<a href="#" class="legal-link">Datenschutz</a>
					<a href="#" class="legal-link">Impressum</a>
					<a href="#" class="legal-link">Datenschutzeinstellungen</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";
.footer {
	background-color: #f5f5f5;
	padding-top: 50px;
	position: relative;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
}

.footer-wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 30px;
	margin-bottom: 40px;
}

.footer-section {
	flex: 1;
	min-width: 250px;
}

.footer-heading {
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 20px;
	color: #333;
}

.address p,
.contact-info p {
	margin: 5px 0;
	color: #555;
	font-size: 14px;
	line-height: 1.5;
}

.social-icons {
	display: flex;
	gap: 15px;
	margin-top: 20px;
}

.social-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: $color-primary;
	color: white;
	transition: background-color 0.3s ease;
}

.social-icon:hover {
	background-color: #544739;
}

.social-icon svg {
	width: 18px;
	height: 18px;
}

.footer-links {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.footer-link {
	display: flex;
	align-items: center;
	gap: 10px;
	color: #555;
	text-decoration: none;
	font-size: 14px;
	transition: color 0.3s ease;
}

.footer-link:hover {
	color: #6b5c4c;
}

.link-icon {
	width: 16px;
	height: 16px;
	color: #6b5c4c;
}

.scroll-top-button {
	position: absolute;
	top: 30px;
	right: 30px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: transform 0.3s ease;
}

.scroll-top-button:hover {
	transform: translateY(-3px);
}

.scroll-top-button svg {
	width: 20px;
	height: 20px;
	color: #6b5c4c;
}

.footer-bottom {
	border-top: 1px solid #e5e5e5;
	padding: 20px 0;
}

.legal-links {
	display: flex;
	gap: 20px;
}

.legal-link {
	color: #777;
	text-decoration: none;
	font-size: 13px;
	transition: color 0.3s ease;
}

.legal-link:hover {
	color: #6b5c4c;
}

/* Responsive styles */
@media (max-width: 768px) {
	.footer-wrapper {
		flex-direction: column;
		gap: 40px;
	}

	.footer-section {
		width: 100%;
	}

	.scroll-top-button {
		top: 20px;
		right: 20px;
	}

	.legal-links {
		flex-wrap: wrap;
		gap: 15px;
	}
}

@media (max-width: 480px) {
	.footer {
		padding-top: 30px;
	}

	.legal-links {
		flex-direction: column;
		gap: 10px;
	}
}
</style>
