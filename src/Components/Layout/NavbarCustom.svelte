<script>
	// @ts-nocheck
	import { goto } from "$app/navigation";
	import {
		Collapse,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Container,
	} from "@sveltestrap/sveltestrap";
	import { onMount, onDestroy } from "svelte";
	import { company_details } from "../../app";
	let isSticky = false;
	let activeLink;
	let isOpen = false;
	function toggle() {
		if (isOpen) {
			isOpen = false;
		} else {
			isOpen = true;
		}
	}
	onMount(() => {
		const navLinks = document.querySelectorAll(
			"ul.navbar-nav li.nav-item a.nav-link",
		);

		function isElementInViewport(el) {
			const rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.top <=
					(window.innerHeight ||
						document.documentElement.clientHeight)
			);
		}

		const handleScroll = () => {
			const scrollTop =
				window.scrollY || document.documentElement.scrollTop;
			if (scrollTop > 50) {
				isSticky = true;
			} else {
				isSticky = false;
			}

			// for (const a of navLinks) {
			// 	if (
			// 		isElementInViewport(
			// 			document.querySelector(a.getAttribute("href")),
			// 		)
			// 	) {
			// 		activeLink = a.getAttribute("href").slice(1);
			// 		break; // Assuming only one link should be active at a time
			// 	}
			// }
		};

		window.addEventListener("scroll", handleScroll);
		if (!activeLink) {
			handleScroll();
		}
	});
</script>

<nav
	class={`navbar navbar-expand-lg custom-nav navbar-light fixed-top ${isSticky ? "stickyadd" : ""}`}
>
	<Container>
		<a class="navbar-brand logo pt-0" href="/">
			<img src="images/logo.webp" alt="" class="img-fluid logo-light" />
			<img src="images/logo.webp" alt="" class="img-fluid logo-dark" />
		</a>
		<NavbarToggler
			on:click={toggle}
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="mdi mdi-menu"></span>
		</NavbarToggler>
		<Collapse {isOpen} navbar>
			<Nav navbar>
				<NavItem>
					<NavLink href="/">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/portfolio">Listings</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#contact">Contact</NavLink>
				</NavItem>
			</Nav>
		</Collapse>

		<div class="navbar-collapse collapse" id="navbarNav">
			<Nav class="navbar-nav ms-auto" id="main_nav">
				<NavItem>
					<a
						class={`nav-link ${activeLink === "home" ? "active" : ""}`}
						href="/"
						on:click={() => (activeLink = "home")}>Home</a
					>
				</NavItem>

				<!-- <NavItem>
					<a
						class={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
						href="#about"
						on:click={() => (activeLink = 'about')}>Hakkımızda</a
					>
				</NavItem> -->
				<!-- <NavItem>
					<a
						class={`nav-link ${activeLink === "blog" ? "active" : ""}`}
						href="#blog"
						on:click={() => (activeLink = "blog")}>Blog</a
					>
				</NavItem> -->
				<NavItem>
					<a
						class={`nav-link ${activeLink === "portfolio" ? "active" : ""}`}
						href="/portfolio"
						on:click={() => (activeLink = "portfolio")}>Portfolio</a
					>
				</NavItem>
				<!-- <NavItem>
					<a
						class={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
						href="#services"
						on:click={() => (activeLink = 'services')}>Hizmetlerimiz</a
					>
				</NavItem> -->
				<!-- <NavItem>
                    <a class={`nav-link ${activeLink === "client" ? "active" : ""}`} href="#client" on:click={() => (activeLink = "client")}>Müşteriler</a>
                </NavItem> -->
				<!-- <NavItem>
					<a
						class={`nav-link ${activeLink === "portfolio" ? "active" : ""}`}
						href="#portfolio"
						on:click={() => (activeLink = "portfolio")}>Portfolio</a
					>
				</NavItem> -->

				<NavItem>
					<a
						class={`nav-link ${activeLink === "contact" ? "active" : ""}`}
						href="/contact"
						on:click={() => (activeLink = "contact")}
						>Contact {company_details.phone}</a
					>
				</NavItem>
			</Nav>
		</div>
	</Container>
</nav>
