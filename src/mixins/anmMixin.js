export default {
	data() {
		return {
			isMobile: false,
			elements: {},
			height: 0,
			ctx: null,
			fontSize: null,
			nonOpacityStyles: [
				"fadeGrm",
				"fadeSpanList",
				"fadeList",
				"fadeList-min",
				"fadeSub",
				"fadeImages",
			],
		};
	},
	methods: {
		smoothScrlAnm(slc, type, val, trs = 0) {
			if (!this.checkClass(slc)) {
				return;
			}
			if (trs) {
				const rect = this.elements[slc].getBoundingClientRect();
				const zone = rect.top - window.innerHeight;
				const isTrs = (pos) => {
					return trs === pos ? zone / val : 0;
				};
				if (rect.top - window.innerHeight < 0 && rect.bottom > 0) {
					this.elements[slc].style[type] = `translate3d(${isTrs(
						1
					)}px,${isTrs(2)}px,${isTrs(3)}px)`;
				}
			} else {
				this.elements[slc].style[type] = val;
			}
		},
		checkClass(slc) {
			if (this.height === 0) this.height = window.innerHeight / 1.6;
			if (!(slc in this.elements)) {
				if (this.$el.querySelector(slc) !== null) {
					this.elements[slc] = this.$el.querySelector(slc);
				} else {
					return false;
				}
			}
			return true;
		},
		scrlAnmOn(slc, anm, fix, delay = 0) {
			if (!this.checkClass(slc)) {
				return;
			}
			const el = this.elements[slc];
			if (el.classList.contains(anm)) {
				return false;
			}
			if (!this.nonOpacityStyles.includes(anm)) {
				el.classList.add("opacity-hide");
			}
			const rect = el.getBoundingClientRect();
			const grd = rect.top < rect.bottom ? rect.top : rect.bottom;
			if (Math.abs(grd) < this.height + fix) {
				setTimeout(() => {
					el.classList.add(anm);
				}, delay);
			}
		},
		parseTxt(text, length, size) {
			if (!this.ctx) {
				this.ctx = document.createElement("canvas").getContext("2d");
			}
			if (!this.fontSize) {
				this.fontSize = parseInt(
					window.getComputedStyle(document.documentElement).fontSize
				);
			}
			const ctx = this.ctx;
			const fontSize = this.fontSize;
			ctx.font = `${size / fontSize}rem Piazzolla`;
			const checkWidh = (txt) => {
				return ctx.measureText(txt).width <= length;
			};
			const txt = text
				.replaceAll(/\n\n/g, " /~1 ")
				.replaceAll(/\B\n/g, " /~ ")
				.split(" ");
			const res = [];
			let ch = 0;
			for (let t of txt) {
				if (res[ch] === undefined) {
					res[ch] = t + " ";
				} else if (
					t !== "/~1" &&
					t !== "/~" &&
					checkWidh(res[ch] + t)
				) {
					res[ch] = res[ch] + t + " ";
				} else if (t === "/~1") {
					ch += 1;
					res[ch] = "\n";
				} else if (t === "/~") {
					ch += 1;
				} else {
					ch += 1;
					res[ch] = t + " ";
				}
			}
			return res;
		},
	},
	mounted() {
		const ANIMATEDCLASSNAME = "animated";
		const ELEMENTS = this.$el.querySelectorAll(".HOVER");
		const ELEMENTS_SPAN = [];

		ELEMENTS.forEach((element, index) => {
			if (element.classList[1] == "FLASH") {
				element.addEventListener("animationend", () => {
					element.classList.remove(ANIMATEDCLASSNAME);
				});
			}
			if (!ELEMENTS_SPAN[index])
				ELEMENTS_SPAN[index] = element.querySelector("span");

			element.addEventListener("mouseover", (e) => {
				const x = e.clientX - element.getBoundingClientRect().left;
				const y = e.clientY - element.getBoundingClientRect().top;
				ELEMENTS_SPAN[index].style.left = x + "px";
				ELEMENTS_SPAN[index].style.top = y + "px";
			});

			element.addEventListener("mouseout", (e) => {
				const x = e.clientX - element.getBoundingClientRect().left;
				const y = e.clientY - element.getBoundingClientRect().top;
				ELEMENTS_SPAN[index].style.left = x + "px";
				ELEMENTS_SPAN[index].style.top = y + "px";
			});
		});
	},
};
