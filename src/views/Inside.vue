<template>
	<section>
		<div class="h-block">
			<img src="/static/img/inside.png" alt="" class="back-img" />
			<div class="h-container">
				<img id="htxt" src="/static/txt/Lofts.svg" alt="" />
				<h1 id="h1">
					<span
						v-for="(l, index) in 'Внутри'"
						:key="index"
						:style="{
							'animation-delay': `${index * 0.03}s`,
						}"
					>
						{{ l }}
					</span>
				</h1>
				<p id="p1">
					Первоклассное обслуживание, изысканная кухня, стильные
					интерьеры, дизайнерская мебель и полное техническое
					оснащение
				</p>
			</div>
		</div>
		<div class="kitchen">
			<div class="h-container">
				<div class="num" id="n1">
					<span>
						1
					</span>
				</div>
				<h2 id="h2">
					<span
						v-for="(l, index) in 'кухня'"
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
			<video
				src="/static/video/vid.mp4"
				class="video-block"
				autoplay
				loop
				muted
			></video>
			<div class="side-words">
				<h3 id="h3_1">
					Блюда для вашего мероприятия мы приготовим непосредственно
					перед ним
				</h3>
				<p id="p3_1">
					В этом и заключается преимущество
					<span>собственной кухни</span> от приглашенного кейтеринга.
				</p>
			</div>
			<img
				src="/static/icons/star.svg"
				alt="белая звёздочка"
				class="star"
			/>
			<div class="team-continer">
				<img
					src="/static/txt/Team.svg"
					alt="Заголовок блока 'Команда'"
					class="team-img"
				/>
				<p id="spl1">
					<span
						v-for="(t, index) in parseTxt(
							'Наша команда поваров всегда готова к профессиональному вызову – традиционные блюда разных народов и стран или новинки меню лучших ресторанов мира.',
							410,
							18
						)"
						:key="index"
					>
						{{ t }}
					</span>
				</p>
				<img src="" alt="" class="circle-txt" />
			</div>
		</div>
		<div class="service">
			<div class="background"></div>
			<div class="center-image">
				<img src="/static/img/window.png" alt="" />
			</div>
			<div class="h-container">
				<div class="num" id="n2">
					<span>
						2
					</span>
				</div>
				<h2 id="h3">
					<span
						v-for="(l, index) in 'СЕРВИС'"
						:key="index"
						:style="{
							'animation-delay': `${index * 0.03}s`,
						}"
					>
						{{ l }}
					</span>
				</h2>
				<p id="p3">
					За кухню LOFT HALL отвечает целый штат поваров во главе с
					шеф-поваром, поэтому даже в самые загруженные дни все залы
					получают заказы вовремя.
				</p>
			</div>
			<div class="numbers">
				<span>1 </span>
				<span>- </span>
				<span>2 </span>
				<span>- </span>
				<span>3</span>
			</div>
			<div class="side-words">
				<h3 id="h3_2">
					Блюда для вашего мероприятия мы приготовим непосредственно
					перед ним
				</h3>
				<p id="p3_2">
					В этом и заключается преимущество собственной кухни от
					приглашенного кейтеринга.
				</p>
			</div>
		</div>
		<div class="design">
			<div class="h-container">
				<div class="num" id="n3">
					<span>
						3
					</span>
				</div>
				<h2 id="h4">
					<span
						v-for="(l, index) in 'Интерьер'"
						:key="index"
						:style="{
							'animation-delay': `${index * 0.03}s`,
						}"
					>
						{{ l }}
					</span>
				</h2>
				<p id="p4">
					За кухню LOFT HALL отвечает целый штат поваров во главе с
					шеф-поваром, поэтому даже в самые загруженные дни все залы
					получают заказы вовремя.
				</p>
			</div>
			<div class="circle-blocks">
				<div class="circle-block" v-for="(c, k) in circles" :key="k">
					<video
						v-if="c.type === 'video'"
						:src="c.content"
						autoplay
						muted
						loop
					/>
					<img v-else :src="c.content" alt="" />
				</div>
				<div class="c-p-container" id="spl2">
					<span
						v-for="(t, index) in parseTxt(
							'Наша команда поваров всегда готова к профессиональному вызову – традиционные блюда разных народов и стран или новинки меню лучших ресторанов мира.',
							275,
							18
						)"
						:key="index"
					>
						{{ t }}
					</span>
				</div>
				<div class="c-p-container" id="spl3">
					<span
						v-for="(t, index) in parseTxt(
							'Наша команда поваров всегда готова к профессиональному вызову – традиционные блюда разных народов и стран или новинки меню лучших ресторанов мира.',
							275,
							18
						)"
						:key="index"
					>
						{{ t }}
					</span>
				</div>
			</div>
		</div>
		<div class="art">
			<img id="htxt2" src="/static/txt/Art.svg" alt="" />
			<div class="art-container">
				<div v-for="(item, k) in 5" :key="k" class="img">
					<img :src="`/static/img/pct (${k + 1}).png`" alt="" />
				</div>
			</div>
			<div class="min-text">
				<span
					v-for="(t, index) in parseTxt(
						'Наша команда поваров всегда готова к профессиональному вызову – традиционные блюда разных народов и стран или новинки меню лучших ресторанов мира.',
						410,
						18
					)"
					:key="index"
				>
					{{ t }}
				</span>
			</div>
		</div>
		<div class="devices">
			<div class="h-container">
				<h2 id="h5">
					<span
						v-for="(l, index) in 'Оборудование'"
						:key="index"
						:style="{
							'animation-delay': `${index * 0.03}s`,
						}"
					>
						{{ l }}
					</span>
				</h2>
				<p id="p5">
					За кухню LOFT HALL отвечает целый штат поваров во главе с
					шеф-поваром, поэтому даже в самые загруженные дни все залы
					получают заказы вовремя.
				</p>
			</div>
			<video
				src="/static/video/mainVideo.mp4"
				class="video-block"
				autoplay
				loop
				muted
			></video>
			<div class="min-text">
				Наша команда поваров всегда готова к профессиональному вызову –
				традиционные блюда разных народов и стран или новинки меню
				лучших ресторанов мира.
			</div>
			<div class="audio-circles">
				<div class="ac">
					<img src="/static/icons/mal.svg" alt="" />
				</div>
				<div class="ac">
					<img src="/static/icons/twa.svg" alt="" />
				</div>
				<div class="ac">
					<img src="/static/icons/lac.svg" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import anmMixin from "@/mixins/anmMixin";
export default {
	mixins: [anmMixin],
	props: {
		scroll: {
			default: 0,
		},
	},
	data() {
		return {
			circles: [
				{
					type: "img",
					content: "/static/img/c-5.png",
				},
				{
					type: "img",
					content: "/static/img/c-3.png",
				},
				{
					type: "img",
					content: "/static/img/c-4.png",
				},
				{
					type: "video",
					content: "/static/video/vid1.mp4",
				},
				{
					type: "img",
					content: "/static/img/c-2.png",
				},
				{
					type: "img",
					content: "/static/img/c-1.png",
				},
				{
					type: "video",
					content: "/static/video/vid2.mp4",
				},
				{
					type: "img",
					content: "/static/img/c.png",
				},
			],
		};
	},
	watch: {
		scroll() {
			for (let i = 1; i <= 5; i++) {
				this.scrlAnmOn(`#h${i}`, "fadeSpanList", 200);
				this.scrlAnmOn(`#p${i}`, "fadeUp", 200);
				this.scrlAnmOn(`#n${i}`, "fade", 200);
				this.scrlAnmOn(`#spl${i}`, "fadeGrm", 200);
			}
			this.scrlAnmOn("#htxt", "fade", 100);
			this.scrlAnmOn("#htxt2", "fade", 200);
			this.scrlAnmOn(".star", "fade", 100);
			this.scrlAnmOn(".team-img", "fade", 300);
			this.scrlAnmOn(".center-image", "minfadeUp", 100);
			this.smoothScrlAnm("#h3_1", "transform", 20, 2);
			this.smoothScrlAnm("#p3_1", "transform", -15, 2);
			this.smoothScrlAnm("#h3_2", "transform", 20, 2);
			this.smoothScrlAnm("#p3_2", "transform", -15, 2);
		},
	},
	mounted() {
		this.scrlAnmOn("#h1", "fadeSpanList", window.innerHeight);
		this.scrlAnmOn("#p1", "fadeUp", window.innerHeight);
		this.scrlAnmOn("#htxt", "fade", window.innerHeight);
		window.scrollTo(0,0);
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/config.scss";
.h-block {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	.h-container {
		margin: 0;
		z-index: 1;
	}
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		background: linear-gradient(rgba(0, 0, 0, 0), black);
	}
}
.back-img {
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0.3;
}
.h-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: $sub-color;
	margin-bottom: ptr(181px);
	h1,
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
	.num {
		border-radius: 50%;
		border: 1px solid #bb967b;
		display: flex;
		justify-content: center;
		width: ptr(34px);
		height: ptr(34px);
		margin-bottom: ptr(42px);
		opacity: 0;
		span {
			color: #bb967b;
			font-size: ptr(18px);
			line-height: ptr(32px);
		}
	}
	p {
		margin: 0;
		width: ptr(713px);
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
.video-block {
	height: ptr(376px);
	width: 100%;
	object-fit: cover;
	margin-bottom: ptr(197px);
}
.kitchen,
.service,
.design,
.art,
.devices {
	display: grid;
	position: relative;
}
.side-words {
	display: grid;
	justify-self: center;
	grid-template-columns: repeat(2, min-content);
	gap: ptr(18px);
	width: ptr(700px);
	position: relative;
	left: ptr(-31px);
	h3 {
		text-align: end;
		font-weight: 300;
		font-size: ptr(47px);
		line-height: ptr(47px);
		margin: 0;
		width: ptr(390px);
	}
	p {
		margin: 0;
		font-size: ptr(18px);
		position: relative;
		// top: ptr(198px);
		top: ptr(98px);
		line-height: ptr(27px);
		width: ptr(255px);
		font-weight: 200;
		span {
			color: #bb967b;
		}
	}
}

.star {
	justify-self: center;
	width: ptr(31px);
	margin: ptr(125px) 0 ptr(202px);
}
.team-continer {
	display: grid;
	justify-self: center;
	img {
		width: ptr(375px);
	}
	p {
		font-size: ptr(18px);
		width: ptr(410px);
		font-weight: 200;
		margin-top: ptr(74px);
		position: relative;
		left: ptr(231px);
		span {
			opacity: 0;
			display: inline-block;
		}
	}
}
.service {
	padding-bottom: ptr(649px);
	.h-container {
		z-index: 2;
		h2 {
			color: #79695d;
		}
		.num {
			color: #4d3e32;
			border: 1px solid #4d3e32;
		}
		p {
			color: black;
			font-weight: 200;
		}
	}
	.side-words {
		color: black;
	}
	&::after {
		content: "";
		height: ptr(456px);
		width: 1px;
		position: absolute;
		background: #79695d;
		justify-self: center;
		z-index: 2;
		left: ptr(960px);
		bottom: ptr(-138px);
	}
}
.background {
	position: absolute;
	width: 100%;
	height: calc(100% - 500rem / 16);
	top: ptr(500px);
	padding-top: ptr(438px);
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	overflow: hidden;
	&::before {
		content: "";
		width: ptr(2179px);
		height: ptr(1630px);
		border-radius: 50%;
		background: #d5bead;
		position: absolute;
		top: 0%;
	}
	&::after {
		content: "";
		width: 100%;
		height: 50%;
		background: #d5bead;
		position: absolute;
		top: 50%;
	}
}
.numbers {
	font-size: ptr(277px);
	color: #79695d;
	justify-self: center;
	position: relative;
	z-index: 2;
	font-family: $h-font;
	margin: ptr(57px) 0 ptr(155px);
	left: ptr(60px);
}

.center-image {
	width: ptr(340px);
	height: ptr(523px);
	z-index: 2;
	position: relative;
	border-top-left-radius: ptr(200px);
	border-top-right-radius: ptr(200px);
	background: #0c2b3b;
	overflow: hidden;
	justify-self: center;
	margin: ptr(238px) 0 ptr(114px);
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
.design {
	margin-top: ptr(245px);
}
.circle-blocks {
	justify-self: center;
	position: relative;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: ptr(1655px);
}
.circle-block {
	height: ptr(332px);
	border-radius: 50%;
	background: #131313;
	overflow: hidden;
	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&:nth-child(1) {
		grid-column: 2;
	}
	&:nth-child(2) {
		grid-column: 4;
	}
	&:nth-child(3) {
		grid-column: 2;
		grid-row: 2;
	}
	&:nth-child(4) {
		grid-column: 3;
		grid-row: 2;
	}
	&:nth-child(5) {
		grid-column: 1;
		grid-row: 3;
	}
	&:nth-child(6) {
		grid-column: 3;
		grid-row: 4;
	}
	&:nth-child(7) {
		grid-column: 4;
		grid-row: 4;
	}
	&:nth-child(8) {
		grid-column: 4;
		grid-row: 5;
	}
}

.c-p-container {
	font-size: ptr(18px);
	line-height: ptr(27px);
	width: ptr(277px);
	align-self: center;
	justify-self: center;
	span {
		opacity: 0;
		display: inline-block;
	}
	&:nth-child(9) {
		grid-column: 4;
		grid-row: 3;
	}
	&:nth-child(10) {
		grid-column: 2;
		grid-row: 5;
	}
}

.art {
	margin-top: ptr(487px);
}

.art-container {
	width: 100%;
	height: ptr(710px);
	margin: ptr(80px) 0 ptr(49px);
	overflow: hidden;
	position: relative;
	// background: url("/static/img/Bitmap.png");
	.img {
		background: rgb(39, 39, 39);
		position: absolute;
		top: ptr(50px);
		transition: 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		box-shadow: 0px 0px 59px -9px rgba(0, 0, 0, 0.25);
		$scl: scale(1.1);
		img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&:hover {
			z-index: 3;
		}
		&:nth-child(1) {
			width: ptr(475px);
			height: ptr(607px);
			left: ptr(-266px);
			background: #605b5b;
			transform: rotate(-6deg);
			&:hover {
				transform: $scl rotate(-2deg);
			}
		}
		&:nth-child(2) {
			width: ptr(550px);
			height: ptr(424px);
			left: ptr(156px);
			top: ptr(134px);
			background: #a5a5a5;
			transform: rotate(5deg);
			&:hover {
				transform: $scl rotate(-2deg);
			}
		}
		&:nth-child(3) {
			width: ptr(443px);
			height: ptr(564px);
			left: ptr(679px);
			top: ptr(60px);
			background: #d8d8d8;
			transform: rotate(-7deg);
			&:hover {
				transform: $scl rotate(-2deg);
			}
		}
		&:nth-child(4) {
			width: ptr(475px);
			height: ptr(642px);
			right: ptr(320px);
			top: ptr(25px);
			background: #767676;
			transform: rotate(3deg);
			z-index: 2;
			&:hover {
				transform: $scl rotate(-1deg);
			}
		}
		&:nth-child(5) {
			width: ptr(529px);
			height: ptr(444px);
			right: ptr(-198px);
			top: ptr(124px);
			background: #605b5b;
			transform: rotate(-2deg);
			&:hover {
				transform: $scl rotate(0deg);
			}
		}
	}
}

.min-text {
	font-size: ptr(18px);
	width: ptr(275px);
	line-height: ptr(27px);
	justify-self: center;
	position: relative;
	left: ptr(131px);
}

#htxt2 {
	justify-self: center;
}

.devices {
	margin-top: ptr(420px);
	video {
		width: 100%;
		height: ptr(376px);
		background: #212121;
		margin-bottom: ptr(188px);
	}
}

.audio-circles {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ptr(180px) 0 ptr(374px);
}
.ac {
	width: ptr(246px);
	height: ptr(246px);
	border-radius: 50%;
	border: 1px solid #515151;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: ptr(130px);
		height: ptr(65px);
		object-fit: contain;
	}
}
</style>
