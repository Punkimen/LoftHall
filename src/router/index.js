import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Inside from "@/views/Inside";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/Inside",
		name: "Inside",
		component: Inside,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
