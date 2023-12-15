
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("theme");
console.log(storedTheme);

if (storedTheme == "dark") {
  document.documentElement.style.setProperty("--main-bg-color", "#000");
  document.documentElement.style.setProperty("--main-text-color", "#fff");
  document.documentElement.style.setProperty("--themeclrtxt1", "#fff");
  themeToggle.checked = true;
} else {
  document.documentElement.style.setProperty("--main-bg-color", "#fff");
  document.documentElement.style.setProperty("--main-text-color", "#333");
  document.documentElement.style.setProperty("--themeclrtxt1", "#000");
  themeToggle.checked = false;
}

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    // Apply dark theme
    document.documentElement.style.setProperty("--main-bg-color", "#000");
    document.documentElement.style.setProperty("--main-text-color", "#fff");
    document.documentElement.style.setProperty("--themeclrtxt1", "#fff");
    // Save theme to local storage
    localStorage.setItem("theme", "dark");
  } else {
    // Apply light theme
    document.documentElement.style.setProperty("--main-bg-color", "#fff");
    document.documentElement.style.setProperty("--main-text-color", "#333");
    document.documentElement.style.setProperty("--themeclrtxt1", "#000");
    // Save theme to local storage
    localStorage.setItem("theme", "light");
  }
});

function welcomeVisitor() {
  var end = Date.now() + 500;

  const colors = [];

  for (let i = 0; i < 10; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }
  var count = 0(
    (function frame() {
      var color = colors[count++ % colors.length];

      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: color,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: color,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })()
  );
}
