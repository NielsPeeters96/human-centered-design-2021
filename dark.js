const chk = document.getElementById('chk');

const body = document.body
const img = document.getElementById('nav_img')
const nav = document.getElementById('navbar')
const label = document.getElementById('label')
const ball = document.getElementById('ball')


chk.addEventListener('change', () => {
	body.classList.toggle('dark');
    img.classList.toggle('dark');
    nav.classList.toggle('dark');
    label.classList.toggle('dark');
    ball.classList.toggle('dark');
});