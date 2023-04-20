<template>
	<section>
		<div class="main">
			<div class="back-video">
				<video src="/static/video/mainVideo.mp4" autoplay muted loop />
			</div>
			<div class="text-container">
				<h1>
					<p class="fadeSpanList">
						<span
							v-for="(l, index) in 'авторские'"
							:key="index"
							:style="{
								'animation-delay': `${(10 + index) * 0.03}s`,
							}"
							>{{ l }}</span
						>
					</p>
					<p class="fadeSpanList">
						<span
							v-for="(l, index) in 'event-'"
							:key="index"
							:style="{
								'animation-delay': `${(19 + index) * 0.03}s`,
							}"
							>{{ l }}</span
						>
					</p>
					<p class="fadeSpanList">
						<span
							v-for="(l, index) in 'пространтсва'"
							:key="index"
							:style="{
								'animation-delay': `${(25 + index) * 0.03}s`,
							}"
							>{{ l }}</span
						>
					</p>
				</h1>
				<img
					class="txt-svg"
					src="/static/txt/The Event Home.svg"
					alt=""
				/>
			</div>
			<div class="side-txt">
				<span
					v-for="(t, index) in parseTxt(
						'Первоклассное обслуживание, изысканная кухня, стильные интерьеры и полное техническое оснащение',
						270,
						16
					)"
					:key="index"
				>
					{{ t }}
				</span>
			</div>
			<div class="see-more">
				<div
					class="discover"
					@mouseleave="leaveCircle"
					@mouseenter="checkCircle($event)"
					@mousemove="getPos"
					@click="moveDown"
					tabindex="0"
					:style="
						`transform: ${
							hover ? 'scale(1.3)' : ''
						} translate3d(${-circle.x / 2}px,${-circle.y / 2}px,0)`
					"
				>
					<p>
						discover
					</p>
				</div>
				<img src="/static/icons/arrow-bottom.svg" alt="" />
			</div>
		</div>
		<div class="our-halls">
			<div class="h-container">
				<img id="htxt" src="/static/txt/Lofts.svg" alt="" />
				<h2 id="h2">
					<span
						v-for="(l, index) in 'Наши залы'"
						:key="index"
						:style="{
							'animation-delay': `${index * 0.03}s`,
						}"
					>
						{{ l }}
					</span>
				</h2>
				<p id="p2">
					Первоклассное обслуживание, изысканная кухня, стильные
					интерьеры, дизайнерская мебель и полное техническое
					оснащение
				</p>
			</div>
			<div class="sticky-filter-menu">
				<div id="m1" class="city-selector">
					<div
						class="slt"
						:class="{
							selected: filterSelectOptions.city === 'msc',
						}"
						@click="filterSelectOptions.city = 'msc'"
					>
						Москва
					</div>
					<div
						class="slt"
						:class="{
							selected: filterSelectOptions.city === 'spb',
						}"
						@click="filterSelectOptions.city = 'spb'"
					>
						Санкт-Петербург
					</div>
				</div>
				<div id="m2" class="filter-selector">
					<p>Персон:</p>
					<div
						class="slt"
						:class="{
							selected: filterSelectOptions.person === '50',
						}"
						@click="filterSelectOptions.person = '50'"
					>
						До 50
					</div>
					<div
						class="slt"
						:class="{
							selected: filterSelectOptions.person === '200',
						}"
						@click="filterSelectOptions.person = '200'"
					>
						50—200
					</div>
					<div
						class="slt"
						:class="{
							selected: filterSelectOptions.person === '300',
						}"
						@click="filterSelectOptions.person = '300'"
					>
						200—400
					</div>
					<div
						class="slt"
						:class="{
							selected: filterSelectOptions.person === '400',
						}"
						@click="filterSelectOptions.person = '400'"
					>
						от 400
					</div>
				</div>
				<div id="m3" class="filter-selector">
					<p>Площадь зала:</p>
					<div
						class="slt"
						:class="{ selected: filterSelectOptions.area === '90' }"
						@click="filterSelectOptions.area = '90'"
					>
						до 100м²
					</div>
					<div
						class="slt"
						:class="{
							selected: filterSelectOptions.area === '100',
						}"
						@click="filterSelectOptions.area = '100'"
					>
						100—400м²
					</div>
					<div
						class="slt"
						:class="{
							selected: filterSelectOptions.area === '400',
						}"
						@click="filterSelectOptions.area = '400'"
					>
						от 400м²
					</div>
				</div>
			</div>
			<div class="halls">
				<hall-container
					v-for="(h, k) in halls"
					:key="k"
					:scroll="scroll"
					:name="h.name"
					:image="h.img"
					address="м. Павелецкая"
				/>
			</div>
		</div>
		<div class="portfolio">
			<div class="h-container">
				<h2 id="h3">
					<span
						v-for="(l, index) in 'Портфолио'"
						:key="index"
						:style="{
							'animation-delay': `${index * 0.03}s`,
						}"
					>
						{{ l }}
					</span>
				</h2>
				<p id="p3">
					Первоклассное обслуживание, изысканная кухня, стильные
					интерьеры, дизайнерская мебель и полное техническое
					оснащение
				</p>
			</div>
			<div class="prt-container">
				<div
					class="prt-block"
					v-for="(item, k) in 16"
					:key="k"
					:style="{
						'animation-delay': `${(k + 1) * 0.1}s`,
					}"
				>
					<img :src="`/static/img/imgi (${k + 1}).jpeg`" alt="" />
					<div class="prt-txt-container">
						<div class="name">
							general si bao
						</div>
						<div class="tag">
							Свадьба
						</div>
					</div>
				</div>
			</div>
			<div class="see-insta">
				<h2>Больше фото в <a href="">instagram</a></h2>
			</div>
		</div>
	</section>
</template>

<script>
import HallContainer from "../components/HallContainer.vue";
import anmMixin from "@/mixins/anmMixin";
import mouseFollowMixin from "@/mixins/mouseFollowMixin";
export default {
	mixins: [anmMixin, mouseFollowMixin],
	components: { HallContainer },
	props: {
		scroll: {
			default: 0,
		},
	},
	data() {
		return {
			delayMass: [],
			mainScreen: {
				move: false,
				height: 0,
				down: true,
			},
			filterSelectOptions: {
				city: "msc",
				person: "50",
				area: "90",
			},
			halls: [
				{
					name: "madam roche",
					img: "/static/img/tst (1).png",
				},
				{
					name: "general si bao",
					img: "/static/img/tst (2).png",
				},
				{
					name: "general si bao",
					img: "/static/img/tst (3).png",
				},
				{
					name: "general si bao",
					img: "/static/img/tst (4).png",
				},
				{
					name: "madam roche",
					img: "/static/img/tst (5).png",
				},
				{
					name: "general si bao",
					img: "/static/img/tst (6).png",
				},
				{
					name: "general si bao",
					img: "/static/img/tst (7).png",
				},
				{
					name: "general si bao",
					img: "/static/img/tst (8).png",
				},
			],
		};
	},
	methods: {
		getRand(k) {
			if (!this.delayMass[k]) {
				this.delayMass[k] = Math.random() * (2 - 0.2) + 0.2;
			}
			return this.delayMass[k];
		},
		scrollToScreen() {
			const { down, move, height } = this.mainScreen;
			if (!move) {
				return;
			}
			const max = down ? height : 0;
			// const mod =
			// 	(max ? height - window.scrollY * 0.95 : window.scrollY * 0.95) /
			// 	30000;
			// const mod = (height / 2 - Math.abs(window.scrollY - height / 2)) / 8000;
			const mod = Math.abs(height - window.scrollY) / 15000;
			let h = height * mod * (down ? 1 : -1) + 1;
			// h = Math.abs(h) < 1 ? (down ? 1 : -1) : Math.floor(h);
			window.scrollTo({
				top: window.scrollY + h,
			});
			if (window.scrollY === 0 || window.scrollY >= height) {
				this.mainScreen.move = false;
				window.scrollTo({
					top: max,
				});
			}
			requestAnimationFrame(this.scrollToScreen);
		},
		moveDown() {
			this.mainScreen.move = true;
			this.mainScreen.down = true;
			this.scrollToScreen();
		},
	},
	watch: {
		scroll(newVal, prevVal) {
			if (this.mainScreen.down !== newVal - prevVal > 0) {
				this.mainScreen.move = false;
			}
			this.scrlAnmOn("#h2", "fadeSpanList", 200);
			this.scrlAnmOn("#h3", "fadeSpanList", 200);
			this.scrlAnmOn("#p2", "fadeUp", 200);
			this.scrlAnmOn("#p3", "fadeUp", 200);
			this.scrlAnmOn(".sticky-filter-menu", "fadeMenu", 200);
			this.scrlAnmOn(".prt-container", "fadeImages", 200);
			this.scrlAnmOn("#htxt", "fade", 100);
			this.scrlAnmOn(".txt-svg", "fade", window.innerHeight, 3000);
			this.scrlAnmOn(".side-txt", "fadeSub", window.innerHeight, 1500);
			this.scrlAnmOn(".see-more", "minfadeUp", window.innerHeight, 2000);
			this.smoothScrlAnm(".main", "opacity", 1 - newVal / 600);
			this.smoothScrlAnm(
				".text-container",
				"transform",
				`scale(${1 - newVal / 3000})`
			);
			this.smoothScrlAnm(
				".side-txt",
				"transform",
				`scale(${1 - newVal / 3000})`
			);
			this.smoothScrlAnm(
				".see-more",
				"transform",
				`scale(${1 - newVal / 3000})`
			);
		},
	},
	mounted() {
		this.mainScreen.height = window.innerHeight;
		this.scrlAnmOn(".txt-svg", "fade", window.innerHeight, 3000);
		this.scrlAnmOn(".side-txt", "fadeSub", window.innerHeight, 1500);
		this.scrlAnmOn(".see-more", "minfadeUp", window.innerHeight, 2000);
		window.scrollTo(0, 0);
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/config.scss";

.back-video {
	position: absolute;
	z-index: 0;
	pointer-events: none;
	video {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	}
}
.main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: sticky;
	top: 0;
	overflow: hidden;
	height: 100vh;
}

.text-container {
	z-index: 2;
	position: relative;
	left: ptr(-138px);
	top: ptr(-30px);
	img {
		position: absolute;
		right: ptr(-132px);
		bottom: ptr(-80px);
		opacity: 0;
	}
}

h1 {
	font-family: $h-font;
	width: ptr(815px);
	justify-content: center;
	display: grid;
	margin: 0;
	color: #efd6c4;
	font-size: ptr(80px);
	font-weight: 400;
	line-height: ptr(81px);
	letter-spacing: ptr(9px);
	p {
		position: relative;
		font-weight: 200;
		justify-self: center;
	}
	span {
		opacity: 0;
		display: inline-block;
	}
	p:nth-child(2) {
		left: ptr(70px);
	}
	p:nth-child(3) {
		left: ptr(185px);
	}
}
.side-txt {
	position: absolute;
	bottom: ptr(138px);
	right: ptr(158px);
	width: ptr(290px);
	font-size: ptr(16px);
	font-weight: 300;
	z-index: 2;
	&::before {
		content: "";
		position: absolute;
		width: 0;
		height: 1px;
		top: ptr(12px);
		left: ptr(-130px);
		transition: $trs;
		opacity: 0;
		background: #979797;
	}
	span {
		opacity: 0;
		display: inline-block;
	}
}

.fadeSub {
	@for $i from 1 through 50 {
		span:nth-child(#{$i}) {
			animation: minfadeUp 0.7s $anmTrs forwards;
			animation-delay: $i * 0.1s;
		}
	}
	&::before {
		opacity: 1;
		width: ptr(110px);
	}
}

.see-more {
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 2;
	align-items: center;
	bottom: ptr(44px);
	opacity: 0;
	img {
		width: ptr(14px);
		margin-top: ptr(50px);
		transition: $trs;
		animation: move 1s ease-in-out infinite alternate;
		animation-play-state: paused;
	}
	&:hover {
		img {
			animation-play-state: running;
		}
	}
}
@keyframes move {
	from {
		transform: translateY(ptr(0px));
	}
	to {
		transform: translateY(ptr(10px));
	}
}
.discover {
	display: flex;
	align-items: center;
	justify-content: center;
	width: ptr(134px);
	height: ptr(134px);
	border: 1px solid rgba(255, 255, 255, 0.7);
	color: #d9d9d9;
	border-radius: 50%;
	font-family: $t-font;
	font-size: ptr(10px);
	transition: 0.3s $anmTrs;
	text-transform: uppercase;
	cursor: pointer;
}

.our-halls,
.portfolio {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}
.our-halls {
	margin-top: ptr(231px);
	padding-top: ptr(71px);
}

.h-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: $sub-color;
	margin-bottom: ptr(181px);
	h2 {
		font-size: ptr(60px);
		font-weight: 400;
		font-family: $h-font;
		letter-spacing: ptr(5.74px);
		margin: 0 0 ptr(35px);
		white-space: break-spaces;
		span {
			opacity: 0;
			display: inline-block;
		}
	}
	p {
		margin: 0;
		width: ptr(603px);
		color: $text-color;
		font-size: ptr(18px);
		font-weight: 200;
		text-align: center;
		opacity: 0;
	}
	img {
		width: ptr(74px);
		opacity: 0;
		margin-bottom: ptr(22px);
	}
}

.sticky-filter-menu {
	display: flex;
	justify-content: space-between;
	padding: 0 ptr(53px) 0 ptr(63px);
	align-items: center;
	border-radius: ptr(29px);
	height: ptr(63px);
	position: sticky;
	top: ptr(38px);
	font-family: $t-font;
	width: ptr(1227px);
	background: rgba(29, 29, 29, 0.48);
	backdrop-filter: blur(35.34px);
	border: 1px solid rgba(255, 255, 255, 0.05);
	z-index: 2;
	transition: 0.5s $anmTrs;
	opacity: 0;
}

.filter-selector,
.city-selector {
	display: flex;
	opacity: 0;
}

.slt {
	transition: 0.3s $anmTrs;
	cursor: pointer;
	padding: 0 ptr(11px);
	border-right: 1px solid rgba(255, 255, 255, 0.1);
	&:nth-child(1) {
		padding: 0 ptr(11px) 0 0;
	}
	&:nth-last-child(1) {
		padding: 0 0 0 ptr(11px);
		border-right: none;
	}
}

.selected {
	color: white;
}
#m1 {
	transition: 1s 0.2s $anmTrs;
}
#m2 {
	transition: 1s 0.3s $anmTrs;
}
#m3 {
	transition: 1s 0.4s $anmTrs;
}

.fadeMenu {
	opacity: 1;
	.filter-selector,
	.city-selector {
		opacity: 1;
	}
}

.halls {
	margin-top: ptr(171px);
	padding-bottom: ptr(20px);
	display: grid;
	grid-template-columns: repeat(3, max-content);
}

.portfolio {
	padding-top: ptr(333px);
	justify-content: flex-end;
	margin-bottom: ptr(200px);
}

.prt-block {
	width: 100%;
	height: 25vw;
	position: relative;
	display: flex;
	align-items: flex-end;
	animation-duration: 0.8s;
	opacity: 0;
	animation-fill-mode: forwards;
	animation-timing-function: $anmTrs;
	&:nth-last-child(1),
	&:nth-last-child(2),
	&:nth-last-child(3),
	&:nth-last-child(4) {
		background: url("/static/img/test.png");
		background-size: cover;
		img {
			display: none;
		}
		.prt-txt-container {
			opacity: 0;
		}
	}
	img {
		position: absolute;
		width: 100%;
		object-fit: cover;
		height: 100%;
		filter: brightness(0.6);
	}
}

.prt-container {
	display: grid;
	width: 100%;
	grid-template-columns: repeat(4, 1fr);
	gap: ptr(2px);
}

.fadeImages {
	.prt-block {
		animation-name: blinking;
	}
}

@keyframes blinking {
	0% {
		opacity: 0;
	}
	// 10%,
	// 14% {
	// 	opacity: 0.1;
	// }
	// 12% {
	// 	opacity: 0.2;
	// }
	// 15%,
	// 27% {
	// 	opacity: 0.3;
	// }
	// 30% {
	// 	opacity: 0.5;
	// }
	// 50% {
	// 	opacity: 0.8;
	// }
	// 20%,
	// 28%,
	100% {
		opacity: 1;
	}
}

.prt-txt-container {
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	padding-bottom: ptr(42px);
	box-shadow: border-box;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	height: 50%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.596));
}
.name {
	font-size: ptr(26px);
	color: $sub-color;
	font-family: $h-font;
	letter-spacing: ptr(2.53px);
}
.tag {
	margin-top: ptr(25px);
	border-radius: ptr(100px);
	border: 1px solid #979797;
	color: #979797;
	text-transform: uppercase;
	font-size: ptr(14px);
	padding: ptr(3px) ptr(10px);
	font-family: $t-font;
}
.see-insta {
	width: 100%;
	height: 50vh;
	padding-top: 50vh;
	position: absolute;
	z-index: 3;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: ptr(4.38px);
	font-family: $h-font;
	color: $sub-color;
	background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
	h2 {
		font-size: ptr(45px);
		margin: 0;
		font-weight: 300;
	}
	a {
		color: inherit;
		font-family: inherit;
		letter-spacing: inherit;
		text-decoration: none;
		position: relative;
		&::after {
			content: "";
			position: absolute;
			width: 100%;
			height: 1px;
			background: #efd6c4;
			left: 0;
			bottom: ptr(-5px);
		}
	}
}
</style>
