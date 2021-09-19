<template>
	<footer>
		<div class="footer-top">
			<div class="logo">
				<h1>Mo.Vue</h1>
			</div>
			<div class="about">
				<h4>about</h4>
				<p>This website can help you to search movie that you looking for. You also can see what in the Box Office and Most Popular Movie</p>
			</div>
			<div class="contact">
				<h4>contact</h4>
				<ul>
					<li><a href="">mail</a></li>
					<li><a href="">instagram</a></li>
					<li><a href="">twitter</a></li>
				</ul>
			</div>
		</div>
		<div class="footer-bot">
			<p>copyright 2021 All right reserved</p>
		</div>
	</footer>
</template>

<style scoped>
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 250px;
		background: black;
		color: white;
	}

	.footer-top {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 50px;
	}

	.logo {
		font-size: 2rem;
		font-family: "Open Sans",sans-serif;
	}

	.logo, .contact {
		width: 30%;
	}

	.about {
		width: 40%;
		font-family: Poppins;
		font-size: 1.3rem;
	}

	.about h4, .contact h4 {
		font-size: 1.5rem;
	}

	.contact {
		text-align: right;
		font-family: Poppins;
	}

	.contact ul li {
		list-style: none;
	}

	.contact ul li a {
		color: white;
		text-decoration: none;
		font-size: 1.3rem;
		cursor: pointer;
	}

	.footer-bot {
		padding: 10px 0;
	}
</style>