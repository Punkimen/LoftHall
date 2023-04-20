<template>
	<side-menu :scroll="scroll" />
	<router-view v-slot="{ Component }" :scroll="scroll" :mobile="mobile">
		<transition name="fade" mode="out-in">
			<component :is="Component" :key="$route.fullPath"></component>
		</transition>
	</router-view>
	<div class="side-container">
		<div class="phone">+7495 120-19-05</div>
		<div class="icon">
			<img src="/static/icons/whatsapp.svg" alt="" />
		</div>
		<div class="icon">
			<img src="/static/icons/telegram.svg" alt="" />
		</div>
	</div>
	<Footer />
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import Footer from "./components/Footer.vue";
import CustomScroll from "@/components/Services/CustomScroll";

export default {
	components: { SideMenu, Footer },
	data() {
		return {
			scroll: 0,
			mobile: false,
		};
	},
	mounted() {
		const locale = localStorage.getItem("locale");
		if (!locale) {
			localStorage.setItem("locale", this.$i18n.locale);
		} else {
			this.$i18n.locale = locale;
		}
		this.mobile = window.innerWidth < 1024;
		CustomScroll.init();
		window.addEventListener(
			"scroll",
			() => {
				this.scroll = document.documentElement.scrollTop;
			},
			{ passive: true }
		);
	},
};
</script>

<style lang="scss">
@import "./styles/config.scss";
#app {
	font-family: $main-font, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $text-color;
	cursor: url("/static/icons/cursor.svg") 5 3, auto;
}
html {
	background: black;
}
body {
	background: black;
	margin: 0;
	*::selection {
		background: rgb(11, 34, 202);
		color: white;
	}
}
a {
	font-family: $main-font;
	cursor: url("/static/icons/cursor-active.svg") 5 3, pointer;
}
button,
.main-info,
.event,
.arrow-down {
	cursor: url("/static/icons/cursor-active.svg") 5 3, pointer;
}
ul {
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
}
p {
	margin: 0;
}
.opacity-hide {
	opacity: 0;
}
.fade-enter-active {
	animation: fade 0.4s ease-in;
}
.fade-leave-active {
	animation: fade 0.4s ease-in reverse;
}
.side-container {
	position: fixed;
	right: ptr(36px);
	top: ptr(38px);
	display: grid;
	gap: ptr(10px);
	z-index: 5;
	grid-template-columns: repeat(3, max-content);
}
.phone {
	color: white;
	font-family: $t-font;
	text-decoration: none;
	font-size: ptr(14px);
	font-weight: 500;
	border-radius: ptr(50px);
	width: ptr(153px);
	height: ptr(28px);
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(29, 29, 29, 0.48);
	backdrop-filter: blur(35.34px);
	transition: $trs;
	cursor: pointer;
	border: 1px solid rgba(255, 255, 255, 0.05);
	&:hover {
		color: black;
		background: white;
	}
}
.icon {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	width: ptr(28px);
	height: ptr(28px);
	background: rgba(29, 29, 29, 0.48);
	backdrop-filter: blur(35.34px);
	transition: $trs;
	border: 1px solid rgba(255, 255, 255, 0.05);
	cursor: pointer;
	img {
		transition: $trs;
		width: fit-content;
	}
	&:hover {
		background: white;
		img {
			filter: invert(1);
		}
	}
}
</style>
