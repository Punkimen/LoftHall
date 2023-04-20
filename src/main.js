import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

const i18n = createI18n({
	locale: "ru-RU",
	fallbackLocale: "ru-RU",
	messages: {
		"ru-RU": {
			t: "",
		},
		"en-US": {
			t: "",
		},
	},
});

createApp(App)
	.use(i18n)
	.use(router)
	.mount("#app");
