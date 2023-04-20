export default {
	data() {
		return {
			hover: false,
			idle: true,
			circle: {
				x: 0,
				y: 0,
			},
			rectHeight: null,
			mousePos: {
				x: 0,
				y: 0,
			},
		};
	},
	methods: {
		mainLoop() {
			if (this.idle) return;
			const targetPos = this.mousePos;
			let dirVector = {
				x: targetPos.x - this.circle.x,
				y: targetPos.y - this.circle.y,
			};
			dirVector = {
				x: dirVector.x * 0.1,
				y: dirVector.y * 0.1,
			};
			this.circle.x += dirVector.x;
			this.circle.y += dirVector.y;
			const norm = Math.sqrt(
				dirVector.x * dirVector.x + dirVector.y * dirVector.y
			);
			if (!this.hover && norm < 0.2) {
				this.idle = true;
				this.circle = targetPos;
			}
			requestAnimationFrame(this.mainLoop);
		},
		checkCircle(e) {
			this.rectHeight = e.target.getBoundingClientRect();
			this.hover = true;
			this.idle = false;
			this.mainLoop();
		},
		getPos(e) {
			console.log(e.target.offsetX);
			const rotate = this.rotateMode;
			const x = rotate ? e.layerX : this.rectHeight.width / 2 - e.offsetX;
			const y = rotate
				? e.layerY
				: this.rectHeight.height / 2 - e.offsetY;
			const n = rotate ? 1 : 2.5;
			this.mousePos = {
				x: x / n,
				y: y / n,
			};
		},
		leaveCircle() {
			this.hover = false;
			this.mousePos = this.rotateMode ? {
					x: this.el.width / 2,
					y: this.el.height / 2,
				}
				: {
					x: 0,
					y: 0,
				};
		},
	},
};
