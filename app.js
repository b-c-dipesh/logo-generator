const form = document.querySelector('#logo-form');
const brandName = document.querySelector("input[name='brandName']");
const brandColor = document.querySelector("input[name='brandColor'");
const fontSize = document.querySelector("input[name='fontSize']");

const generateLogo = (text, color, size) => {
	const logo = document.createElement('h2');
	logo.innerText = text;
	logo.style.color = color;
	logo.style.fontSize = `${size}px`;

	return logo;
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const logo = generateLogo(
		brandName.value,
		brandColor.value,
		fontSize.value
	);
	document.querySelector('#results').append(logo);
});
