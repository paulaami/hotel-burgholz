import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ZimmerOverviewPage from "@/views/ZimmerOverviewPage.vue";
import ApartmentOverviewPage from "@/views/ApartmentOverviewPage.vue";
import RoomPage from "@/views/RoomPage.vue";
import TagungPage from "@/views/TagungPage.vue";
import BikeTourPage from "@/views/BikeTourPage.vue";
import KontaktPage from "@/views/KontaktPage.vue";
import EnergyStar from "@/views/EnergyStar.vue";
import DatenSchutz from "@/views/DatenSchutz.vue";
import Impressum from "@/views/Impressum.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomePage,
	},
	{
		path: "/zimmer",
		name: "room",
		component: ZimmerOverviewPage,
		meta: {
			activeMenu: "room",
		},
	},
	{
		path: "/zimmer/apartment",
		name: "apartment-overview",
		component: ApartmentOverviewPage,
		meta: {
			activeMenu: "room",
		},
	},
	{
		path: "/zimmer/apartment/:apartmentId",
		name: "apartment-detail",
		component: RoomPage,
		meta: {
			activeMenu: "room",
		},
	},
	{
		path: "/zimmer/:id",
		name: "room-detail",
		component: RoomPage,
		meta: {
			activeMenu: "room",
		},
	},
	{
		path: "/tagung",
		name: "restaurant",
		component: TagungPage,
		meta: {
			activeMenu: "restaurant",
		},
	},
	{
		path: "/energy-star",
		name: "energy-star",
		component: EnergyStar,
		meta: {
			activeMenu: "energy-star",
		},
	},
	{
		path: "/bike-tours",
		name: "bike-tours",
		component: BikeTourPage,
		meta: {
			activeMenu: "bike-tours",
		},
	},
	{
		path: "/kontakt",
		name: "kontakt",
		component: KontaktPage,
		meta: {
			activeMenu: "kontakt",
		},
	},
	{
		path: "/datenschutz",
		name: "datenschutz",
		component: DatenSchutz,
	},
	{
		path: "/impressum",
		name: "impressum",
		component: Impressum,
	},
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

router.afterEach((to) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_title: document.title,
    });
  }
});

export default router;
