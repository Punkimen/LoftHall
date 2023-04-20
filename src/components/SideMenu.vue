<template>
	<section :class="{ 'no-mix': page === 'Home' }">
		<div class="top-info">
			<router-link to="/">
				<svg viewBox="0 0 87 87">
					<g clip-path="url(#clip0)">
						<path
							d="M43.1622 1.87249C20.023 1.87249 1.19671 20.6978 1.19671 43.838C1.19671 66.9781 20.023 85.8034 43.1622 85.8034C66.3023 85.8034 85.1277 66.9781 85.1277 43.838C85.1277 20.6978 66.3023 1.87249 43.1622 1.87249ZM43.1622 87.0001C19.3631 87.0001 0 67.638 0 43.838C0 20.0379 19.3631 0.675781 43.1622 0.675781C66.9622 0.675781 86.3244 20.0379 86.3244 43.838C86.3244 67.638 66.9622 87.0001 43.1622 87.0001Z"
						/>
						<path
							d="M24 42V37.3559H14.6987V13C13.0026 14.5278 11.432 16.1891 10 17.9641V42H24Z"
						/>
						<path
							d="M30.4739 16.9302C30.4739 15.8052 30.773 14.979 31.3722 14.4458C31.9714 13.9146 32.6811 13.6476 33.5004 13.6476C34.3189 13.6476 35.0268 13.9146 35.6278 14.4458C36.2261 14.979 36.5261 15.8052 36.5261 16.9302V34.0679C36.5261 35.1929 36.2261 36.021 35.6278 36.5523C35.0268 37.0854 34.3189 37.3505 33.5004 37.3505C32.6811 37.3505 31.9714 37.0854 31.3722 36.5523C30.773 36.021 30.4739 35.1929 30.4739 34.0679V16.9302ZM30.8036 41.4977C31.6938 41.8319 32.5931 42 33.5004 42C34.4051 42 35.3053 41.8319 36.1973 41.4977C37.0894 41.1635 37.8926 40.6705 38.6095 40.0179C39.3254 39.3634 39.9031 38.5428 40.3415 37.5559C40.7808 36.5682 41 35.4067 41 34.0679V16.9302C41 15.625 40.7808 14.4692 40.3415 13.4674C39.9031 12.4628 39.3254 11.6366 38.6095 10.9821C37.8926 10.3286 37.0894 9.83466 36.1973 9.50042C35.3053 9.16712 34.4051 9 33.5004 9C32.5931 9 31.6938 9.16712 30.8036 9.50042C29.9106 9.83466 29.1074 10.3286 28.3905 10.9821C27.6737 11.6366 27.0969 12.4628 26.6585 13.4674C26.2192 14.4692 26 15.625 26 16.9302V34.0679C26 35.4067 26.2192 36.5682 26.6585 37.5559C27.0969 38.5428 27.6737 39.3634 28.3905 40.0179C29.1074 40.6705 29.9106 41.1635 30.8036 41.4977Z"
						/>
						<path
							d="M56.8029 23.0235H48.6978V13.3148H58V9H44V41H48.6978V27.3383H56.8029V23.0235Z"
						/>
						<path
							d="M59 13.3147H64.4369V41H69.136V13.3147H73C71.3431 11.7424 69.5569 10.2989 67.6584 9H59V13.3147Z"
						/>
						<path
							d="M20.3643 61.7528V76H25V44H20.3643V57.7086H14.6375V44H10V70.2591C11.4133 72.011 12.9635 73.6506 14.6375 75.1586V61.7528H20.3643Z"
						/>
						<path
							d="M34.6992 64.8098L36.9332 53.2136H37.0229L39.255 64.8098H34.6992ZM35.1008 44L28 76H32.5558L33.896 69.1248H40.1031L41.4433 76H46L38.8983 44H35.1008Z"
						/>
						<path d="M53.6972 44H49V76H63V71.4163H53.6972V44Z" />
						<path
							d="M68.5945 44H64V76H70.4092C72.0542 74.5915 73.5894 73.0587 75 71.4163H68.5945V44Z"
						/>
					</g>
				</svg>
			</router-link>
			<div class="lang-selector">
				<button
					class="lang fade"
					:class="{ selected: $i18n.locale === 'en-US' }"
					@click="setLocale('en-US')"
				>
					EN
				</button>
				<button
					class="lang fade"
					:class="{ selected: $i18n.locale === 'ru-RU' }"
					@click="setLocale('ru-RU')"
				>
					RU
				</button>
			</div>
		</div>
		<div
			@click="mobileMenuActive = !mobileMenuActive"
			class="mobile-active-btn"
			:class="{ 'close-btn': mobileMenuActive }"
		></div>
		<ul class="pages" :class="{ active: mobileMenuActive }">
			<li>
				<router-link to="/About" class="page">Наши залы</router-link>
			</li>
			<li>
				<router-link to="/Inside" class="page">Внутри</router-link>
			</li>
			<li>
				<router-link to="/Contact" class="page">О нас</router-link>
			</li>
			<li>
				<router-link to="/Contact" class="page">Контакты</router-link>
			</li>
		</ul>
		<ul class="halls">
			<transition-group name="fd-left">
				<li v-for="(l, k) in likedHalls" :key="k">
					<svg viewBox="0 0 19 17" fill="white" @click="pushLikes(l)">
						<path
							d="M6.90977 14.215C7.49393 14.7128 8.81324 15.524 9.5 16.1245C10.1883 15.5226 11.5085 14.7107 12.0937 14.2121L12.094 14.2119C13.8063 12.7526 15.285 11.4924 16.314 10.2507C17.4643 8.86279 18 7.54672 18 6.109C18 4.71214 17.5211 3.42344 16.6515 2.48013C15.7715 1.52567 14.5639 1 13.251 1C12.2697 1 11.371 1.31024 10.58 1.92204C10.1807 2.23085 9.81893 2.6088 9.5 3.04964C9.1812 2.6088 8.81934 2.23085 8.42012 1.92204C7.62908 1.31024 6.73039 1 5.74908 1C4.43613 1 3.22863 1.52567 2.34862 2.48013C1.47898 3.42344 1 4.71214 1 6.109C1 7.54672 1.53579 8.86279 2.6861 10.2508C3.71513 11.4924 5.1941 12.7529 6.90678 14.2124L6.90977 14.215Z"
						/>
					</svg>
					<router-link to="/About" class="hall">{{ l }}</router-link>
				</li>
			</transition-group>
		</ul>
	</section>
</template>

<script>
export default {
	props: {
		scroll: {
			default: 0,
		},
	},
	data() {
		return {
			projectsOpen: false,
			page: "",
			subHeight: 0,
			mobileMenuActive: false,
			sideInfo: {
				insta: "",
				projects: [
					{
						name: "Entertament",
						url: "/project",
					},
				],
			},
			likedHalls: [],
		};
	},
	methods: {
		setLocale(lang) {
			localStorage.setItem("locale", lang);
			this.$router.go(0);
			this.$i18n.locale = lang;
		},
		pushLikes(name) {
			if (name) {
				this.likedHalls.splice(this.likedHalls.indexOf(name), 1);
			}
			document.dispatchEvent(
				new CustomEvent("likes", {
					detail: [...this.likedHalls],
				})
			);
		},
	},
	watch: {
		"$route.name"(e) {
			this.page = e;
			this.mobileMenuActive = false;
		},
		scroll(e) {
			if (this.page === "Main") {
				this.projectsOpen = e > window.innerHeight * 0.7;
			}
		},
	},
	mounted() {
		document.addEventListener("setLike", (newVal) => {
			const h = newVal.detail;
			console.log(this.likedHalls.includes(h));
			if (this.likedHalls.includes(h)) {
				this.likedHalls.splice(this.likedHalls.indexOf(h), 1);
			} else {
				this.likedHalls.push(h);
			}
			this.pushLikes();
		});
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/config.scss";

section {
	position: fixed;
	left: ptr(30px);
	top: ptr(38px);
	display: grid;
	grid-template-rows: auto 1fr auto;
	width: ptr(145px);
	z-index: 10;
	opacity: 0;
	animation: wakeUp 1s forwards;
	mix-blend-mode: difference;
}
.no-mix{
	mix-blend-mode: unset;
}
@keyframes wakeUp {
	from {
		transform: translate3d(ptr(-100px), 0, 0);
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
.top-info {
	display: flex;
	justify-content: space-between;
	svg {
		width: ptr(80px);
		path {
			fill: #fefefe;
			fill-rule: evenodd;
			clip-rule: evenodd;
			transition: $trs;
		}
		&:hover {
			path {
				fill: $sub-color;
			}
		}
	}
}
.lang-selector {
	display: flex;
	gap: ptr(9px);
	height: fit-content;
}
.lang {
	border: none;
	background: none;
	padding: 0;
	font-size: ptr(12px);
	color: rgb(145, 145, 145);
	opacity: 0;
	&:nth-child(2) {
		animation-delay: 0.4s;
	}
}
.selected {
	color: white;
}
li {
	list-style: none;
	font-size: ptr(12px);
	transition: $trs;
}
.projects-show {
	font-size: ptr(14px);
	text-transform: uppercase;
}
.page {
	transition: $trs;
	color: white;
	display: inline-block;
	&:hover {
		transform: translate3d(ptr(5px), 0, 0);
	}
}
.pages {
	display: grid;
	grid-auto-rows: min-content;
	gap: ptr(3px);
	padding-top: ptr(60px);
	li {
		opacity: 0;
	}
	@for $i from 1 through 30 {
		li:nth-child(#{$i}) {
			animation: minfadeUp 0.6s $anmTrs forwards;
			animation-delay: 0.6s + $i * 0.2s;
		}
	}
}
.halls {
	display: grid;
	grid-auto-rows: min-content;
	gap: ptr(3px);
	padding-top: ptr(50px);
	li {
		display: flex;
		align-items: center;
		svg {
			cursor: pointer;
			width: ptr(12px);
			margin-right: ptr(4px);
		}
	}
}
.hall {
	transition: $trs;
	color: white;
	display: inline-block;
	&:hover {
		transform: translate3d(ptr(5px), 0, 0);
	}
}
.fd-left-enter-active {
	animation: minFadeLeft 0.5s ease-in-out;
}
.fd-left-leave-active {
	animation: minFadeLeft 0.5s ease-in-out reverse;
}

@keyframes minFadeLeft {
	from {
		transform: translateX(ptr(-20px));
		opacity: 0;
	}
	to {
		transform: translateX(ptr(0px));
		opacity: 1;
	}
}
a {
	color: $text-color;
	text-decoration: none;
	font-family: $t-font;
	text-transform: uppercase;
	font-size: ptr(15px);
}
.inst {
	opacity: 0;
	animation: fadeLeft 0.8s 1.6s forwards;
	img {
		width: ptr(15px);
		position: relative;
		top: ptr(1px);
		animation: inRotate 0.8s 1.6s forwards;
	}
}

.mobile-active-btn {
	display: none;
}

@media (max-width: 1024px) {
	section {
		left: ptr(30px);
		top: ptr(28px);
		height: unset;
		width: 100%;
		display: flex;
		z-index: 100;
		justify-content: space-between;
	}
	.inst,
	.lang-selector {
		display: none;
	}
	.pages {
		position: absolute;
		left: ptr(-30px);
		top: ptr(-28px);
		background: #0c0c0c;
		width: 100vw;
		height: unset;
		padding: ptr(20px) 0 ptr(50px);
		display: grid;
		justify-content: center;
		gap: ptr(30px);
		height: ptr(0px);
		opacity: 0;
		transition: padding 0.5s $anmTrs, height 0.3s $anmTrs,
			opacity 0.5s $anmTrs;
		pointer-events: none;
		overflow: hidden;
	}
	.page:hover {
		transform: unset;
	}
	.mobile-active-btn {
		display: flex;
		width: ptr(48px);
		height: ptr(30px);
		position: relative;
		right: ptr(48px);
		z-index: 2;
		&::after,
		&::before {
			content: "";
			width: ptr(48px);
			height: ptr(2px);
			background: white;
			position: absolute;
			z-index: 2;
			transition: top 0.2s $anmTrs, transform 0.5s $anmTrs;
		}
		&::before {
			top: ptr(10px);
		}
		&::after {
			top: ptr(20px);
		}
	}
	.close-btn {
		&::before {
			top: ptr(15px);
			transform: rotate(45deg);
		}
		&::after {
			top: ptr(15px);
			transform: rotate(-45deg);
		}
	}
	.active {
		opacity: 1;
		padding: ptr(120px) 0 ptr(120px);
		pointer-events: all;
		height: ptr(206px);
	}
	li {
		text-align: center;
	}
	a {
		font-size: ptr(24px);
		&:hover {
			transform: unset;
			color: $text-color;
		}
	}
	.sub-pages {
		display: none;
	}
	.top-info {
		img {
			width: ptr(70px);
		}
	}
}
</style>
