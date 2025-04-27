import { createRouter, createWebHistory } from "vue-router";
// import { getDefaultLanguage, SUPPORTED_LANGUAGES } from '@/i18n';
import HomePage from "@/views/HomePage.vue";
import ZimmerOverviewPage from "@/views/ZimmerOverviewPage.vue";
import RoomPage from '@/views/RoomPage.vue'
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
    name: "room", // Changed to match your navigation component
    component: ZimmerOverviewPage,
    meta: {
      activeMenu: "room", // Changed to match your navigation component
    },
  },
  {
    path: "/tagung",
    name: "restaurant", // Changed to match your navigation component
    component: TagungPage,
    meta: {
      activeMenu: "restaurant", // Changed to match your navigation component
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
    path: '/kontakt',
    name: 'kontakt',
    component: KontaktPage,
    meta: { 
      activeMenu: 'kontakt'
    }
  },
  {
    path: '/zimmer/:id',
    name: 'room-detail',
    component: RoomPage,
    meta: {
      activeMenu: 'room'
    }
  }
];

const router = createRouter({
  history: createWebHistory('/hotel-burgholz/'),
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