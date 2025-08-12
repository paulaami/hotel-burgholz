import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ZimmerOverviewPage from "@/views/ZimmerOverviewPage.vue";
import ApartmentOverviewPage from "@/views/ApartmentOverviewPage.vue"; // New import
import RoomPage from "@/views/RoomPage.vue";
import TagungPage from "@/views/TagungPage.vue";
import BikeTourPage from "@/views/BikeTourPage.vue";
import KontaktPage from "@/views/KontaktPage.vue";
import EnergyStar from "@/views/EnergyStar.vue";

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
		component: ApartmentOverviewPage, // New apartment overview page
		meta: {
			activeMenu: "room",
		},
	},
	{
		path: "/zimmer/apartment/:apartmentId",
		name: "apartment-detail",
		component: RoomPage, // Same component, will handle apartments
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
];

const router = createRouter({
	history: createWebHistory("/hotel-burgholz/"),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// Always scroll to top when navigating to a new route
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

export default router;