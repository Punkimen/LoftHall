<template>
	<div class="block-container">
		<div class="side-info">
			<div class="copiright">
				LOFT HALL© 2015—2021 <br />
				All rights reserved
			</div>
			<div class="address">
				Юр. адрес: 123242, город Москва, <br />
				ул. Ленинская Слобода 26/11
				<p>
					ОГРН 1157746949315
					<br />
					КПП 770301001
				</p>
			</div>
		</div>
		<div class="footer-info">
			<div class="tfl">
				<div class="top-txt">
					<a href="+7495 120-19-05">+7495 120-19-05</a>
				</div>
				<div class="sub-txt">
					<span>Будни: 10:00—20:00</span>
					<span>Выходные: 11:00—19:00</span>
				</div>
			</div>
			<div class="tfl">
				<div class="top-txt msg">
					<a href="" class="">Telegram</a>
					<a href="" class="">WhatsApp</a>
				</div>
				<div class="sub-txt">
					<span>Пишите круглосуточно. Ответим в рабочее время</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			footer: {},
		};
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/config.scss";

.block-container {
	padding: ptr(86px) 0 ptr(194px) ptr(279px);
	display: grid;
	grid-template-columns: ptr(950px) 1fr;
	gap: ptr(80px);
	position: relative;
	font-family: $t-font;
	&::before {
		content: "";
		top: 0;
		left: ptr(279px);
		position: absolute;
		width: calc(100% - 279rem / 16);
		height: 1px;
		background: #979797;
	}
}
.side-info {
	display: flex;
}
.off {
	opacity: 0;
	pointer-events: none;
}
.mobile-mail {
	display: none;
}
.footer-info {
	display: grid;
	gap: ptr(36px);
}
.tfl {
	a {
		color: white;
		text-decoration: none;
		font-family: $t-font;
		font-size: ptr(33px);
        font-weight: 400;
	}
}
.msg {
	a {
		font-size: ptr(21px);
        margin-right: ptr(33px);
	}
}
.sub-txt {
	font-size: ptr(14px);
	font-family: $t-font;
	color: #808080;
	margin-top: ptr(10px);
	span {
		margin-right: ptr(20px);
	}
}

.adress {
	width: ptr(386px);
	font-size: ptr(26px);
	text-transform: uppercase;
	font-weight: 300;
}
.legal-info {
	padding-top: ptr(60px);
	display: grid;
	grid-template-columns: repeat(3, max-content);
	gap: ptr(10px);
	font-size: ptr(10px);
	font-weight: 300;
}

.copiright {
	width: ptr(180px);
	font-size: ptr(14px);
	line-height: ptr(19px);
	margin-right: ptr(150px);
	color: #808080;
}
.address {
	width: ptr(250px);
	font-size: ptr(14px);
	line-height: ptr(19px);
	color: #808080;
	p {
		margin-top: ptr(24px);
		color: #3d3d3d;
		font-size: ptr(10px);
	}
}

@media (max-width: 1024px) {
	.block-container {
		padding: ptr(42px) 0 ptr(40px) ptr(35px);
		grid-template-columns: 1fr;
		gap: ptr(80px);
		&::before {
			left: ptr(35px);
			width: calc(100% - 35rem / 16);
		}
	}
	.footer-info {
		display: grid;
		gap: ptr(37px);
	}
	.phone {
		font-size: ptr(18px);
		font-weight: 300;
	}
	.adress {
		width: ptr(253px);
		font-size: ptr(18px);
	}
	.mobile-mail a {
		color: $text-color;
		font-weight: 300;
		text-transform: uppercase;
		text-decoration: none;
		font-size: ptr(15px);
	}
	.mail {
		display: none;
	}
}
</style>
