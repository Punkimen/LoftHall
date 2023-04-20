<template>
	<article
		@mouseleave="leaveCircle"
		@mouseenter="checkCircle($event)"
		@mousemove="getPos"
		:style="rotate"
	>
		<div class="hall-content">
			<div class="text-container">
				<div class="name">
					{{ name }}
				</div>
				<p>
					{{ address }}
				</p>
			</div>
			<img :src="image" alt="" />
			<div @mousemove.stop @click="setLike" class="like-container">
				<svg viewBox="0 0 19 17" :class="{ like }">
					<path
						d="M6.90977 14.215C7.49393 14.7128 8.81324 15.524 9.5 16.1245C10.1883 15.5226 11.5085 14.7107 12.0937 14.2121L12.094 14.2119C13.8063 12.7526 15.285 11.4924 16.314 10.2507C17.4643 8.86279 18 7.54672 18 6.109C18 4.71214 17.5211 3.42344 16.6515 2.48013C15.7715 1.52567 14.5639 1 13.251 1C12.2697 1 11.371 1.31024 10.58 1.92204C10.1807 2.23085 9.81893 2.6088 9.5 3.04964C9.1812 2.6088 8.81934 2.23085 8.42012 1.92204C7.62908 1.31024 6.73039 1 5.74908 1C4.43613 1 3.22863 1.52567 2.34862 2.48013C1.47898 3.42344 1 4.71214 1 6.109C1 7.54672 1.53579 8.86279 2.6861 10.2508C3.71513 11.4924 5.1941 12.7529 6.90678 14.2124L6.90977 14.215Z"
					/>
				</svg>
			</div>
		</div>
	</article>
</template>

<script>
import mouseFollowMixin from "@/mixins/mouseFollowMixin";
import anmMixin from "@/mixins/anmMixin";
export default {
	mixins: [mouseFollowMixin, anmMixin],
	props: {
		name: {
			default: "",
		},
		scroll: {
			dfefault: 0,
		},
		address: {
			default: "",
		},
		image: {
			default: "/static/img/test.png",
		},
	},
	data() {
		return {
			el: {
				height: 0,
				width: 0,
			},
			like: false,
			rotateMode: true,
		};
	},
	methods: {
		setLike() {
			document.dispatchEvent(
				new CustomEvent("setLike", {
					detail: this.name,
				})
			);
		},
	},
	computed: {
		rotate() {
			const w = this.el.width;
			const h = this.el.height;
			const cX = this.circle.x;
			const cY = this.circle.y;
			const x = 10 * ((cY - w / 2) / w);
			const y = -10 * ((cX - h / 2) / h);
			return `transform: perspective(500px) scale(${
				this.hover ? 0.9 : 1
			}) rotateX(${x}deg) rotateY(${y}deg)`;
		},
	},
	watch: {
		scroll() {
			this.scrlAnmOn(".hall-content", "fadeUp", 200);
		},
	},
	mounted() {
		this.el.height = this.$el.scrollHeight;
		this.el.width = this.$el.scrollWidth;
		this.circle = {
			x: this.el.width / 2,
			y: this.el.height / 2,
		};
		document.addEventListener("likes", (newVal) => {
			this.like = newVal.detail.includes(this.name);
		});
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/config.scss";

article {
	transition: 0.2s $anmTrs;
	border-radius: 50%;
	overflow: hidden;
}

.hall-content {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 33vw;
	height: 33vw;
	border-radius: 50%;
	position: relative;
	overflow: hidden;
	opacity: 0;
	&:hover {
		.like-container {
			opacity: 1;
		}
		.text-container {
			opacity: 0;
			pointer-events: none;
		}
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
		position: relative;
		pointer-events: none;
		background: #131313;
		z-index: 1;
	}
}
.text-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	border-radius: 50%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	text-align: center;
	position: absolute;
	z-index: 2;
	transition: $trs;
	p {
		font-weight: 200;
		font-family: $t-font;
		color: #d9d9d9;
	}
}
.name {
	display: flex;
	font-size: ptr(37px);
	line-height: ptr(65px);
	letter-spacing: ptr(3.6px);
	color: $sub-color;
	font-family: $h-font;
	text-transform: uppercase;
}
.like-container {
	position: absolute;
	z-index: 2;
	width: ptr(40px);
	height: ptr(40px);
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 50%;
	bottom: ptr(20px);
	opacity: 0;
	transition: $trs;
	cursor: pointer;
	svg {
		fill: rgba(0, 0, 0, 0);
		width: ptr(15px);
		transition: 0.1s $anmTrs;
		path {
			transition: 0.1s $anmTrs;
			stroke: white;
		}
	}
	.like {
		fill: #d7262f;
		path {
			stroke: rgba(0, 0, 0, 0);
		}
	}
}
</style>
