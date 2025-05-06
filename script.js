// Hiệu ứng hiển thị khi load
window.addEventListener("load", () => {
  document.querySelector(".container").style.opacity = "1";
});

// Sakura rơi có gió nhẹ
const sakuraContainer = document.getElementById("sakura-container");
function createSakura() {
  const sakura = document.createElement("img");
  sakura.src = "https://imgur.com/y5cEeTr.png";
  sakura.className = "sakura";
  sakura.style.left = Math.random() * window.innerWidth + "px";
  sakura.style.animationDuration = 4 + Math.random() * 4 + "s";
  sakura.style.transform = `rotate(${Math.random() * 360}deg)`;
  sakura.style.opacity = Math.random() + 0.5;
  sakuraContainer.appendChild(sakura);
  setTimeout(() => sakura.remove(), 9000);
}
setInterval(createSakura, 600);

// Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
