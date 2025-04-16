import { createRouter, createWebHistory } from "vue-router";
// import { getDefaultLanguage, SUPPORTED_LANGUAGES } from '@/i18n';
import HomePage from "@/views/HomePage.vue";
import ZimmerOverviewPage from "@/views/ZimmerOverviewPage.vue";
// import RoomPage from '@/views/RoomPage.vue'
import TagungPage from "@/views/TagungPage.vue";
import BikeTourPage from "@/views/BikeTourPage.vue";
import KontaktPage from '@/views/KontaktPage.vue'

const routes = [
	{
		path: "/",
		name: "home",
		component: HomePage,
	},
	{
		path: "/zimmer",
		name: "zimmer",
		component: ZimmerOverviewPage,
		meta: {
			activeMenu: "zimmer",
		},
	},
	,
	{
		path: "/tagung",
		name: "tagung",
		component: TagungPage,
		meta: {
			activeMenu: "tagung",
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
  ,
  {
    path: '/kontakt',
    name: 'kontakt',
    component: KontaktPage,
    meta: { 
      activeMenu: 'kontakt'
    }
  }
	// {
	//   path: '/zimmer/:id',
	//   name: 'room',
	//   component: RoomPage,
	//   meta: {
	//     activeMenu: 'zimmer'
	//   }
	// }
];

const router = createRouter({
	history: createWebHistory(),
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