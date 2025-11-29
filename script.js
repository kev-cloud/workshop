// Project Redirect
document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    window.location.href = project.dataset.link;
  });
});

// Skill Animation
const bars = document.querySelectorAll(".bar");

window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = bar.dataset.value;
    }
  });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("name").value;
  const useremail = document.getElementById("email").value;
  const usermessage = document.getElementById("message").value;

  if (username === "" || useremail === "" || usermessage === "") {
    document.getElementById("formMsg").innerText = "⚠️ All fields required!";
    return;
  }

  localStorage.setItem("name", username);
  localStorage.setItem("email", useremail);
  localStorage.setItem("message", usermessage);

  window.location.href = "form-detail.html";
});

// Image Slider
const images = ["images1.jpg", "images2.jpg", "images3.jpg", "images4.jpg", "images5.jpg"];
let index = 0;

document.getElementById("nextBtn").onclick = () => {
  index = (index + 1) % images.length;
  document.getElementById("sliderImage").src = images[index];
};

document.getElementById("prevBtn").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("sliderImage").src = images[index];
};

// Dark Mode
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Back to Top
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Canvas Drawing
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#00bcd4";
ctx.fillRect(80, 30, 140, 60);
ctx.fillStyle = "#fff";
ctx.font = "16px Arial";
ctx.fillText("Kevin Portfolio", 95, 65);
