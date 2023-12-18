const Button_Menu = document.querySelector(".header-button-menu");
const Icon_Menu = document.querySelector(".header-button-menu-icon");

const Container_Overlay = document.querySelector(".overlay");
const Container_Navigation = document.querySelector(".mobile-navigation");
const Links_Navigation = document.querySelectorAll(".mobile-navigation-link");


const Container_Works = document.querySelector(".works");
const Buttons_Works = document.querySelectorAll(".works-button");
const Links_Works = document.querySelectorAll(".works-link");

const Works_Bottom = document.querySelector(".works-bottom");
const Works_Top = document.querySelector(".works-top");


function Navigation_Switch() {
	Container_Overlay.classList.toggle("visible");
	Container_Navigation.classList.toggle("visible");

	if (Container_Overlay.classList.contains("visible") === true)
	{ Icon_Menu.style.filter = ""; } else { Icon_Menu.style.filter = "brightness(100%)"; }
}


function Works_Correct() {
	const Body_FontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
	const WorksBottom_Height = parseFloat(window.getComputedStyle(Works_Bottom).height);
	const WorksTop_Height = parseFloat(window.getComputedStyle(Works_Top).height);

	Container_Works.style.height = `${(WorksBottom_Height + WorksTop_Height) / Body_FontSize + 98}rem`;
}


Button_Menu.addEventListener("click", Navigation_Switch);
Container_Overlay.addEventListener("click", Navigation_Switch);
Links_Navigation.forEach(function (Button_Navigation)
	{ Button_Navigation.addEventListener("click", Navigation_Switch); });


Buttons_Works.forEach(function (Button_Work) {
	Button_Work.addEventListener("click", function() {
		const Attribute_Button = Button_Work.getAttribute("class").split("-").pop();

		Links_Works.forEach(function (Link_Work) {
			const Attribute_Work = Link_Work.getAttribute("class").split("-");

			if (Attribute_Work.includes(Attribute_Button) || Attribute_Button === "all")
			{ Link_Work.style.display = "flex"; } else { Link_Work.style.display = "none"; }
		});

		Works_Correct();
	});
});