//particles
const pc = document.getElementById("particles");
const colors = ["#ff8c69", "#ffb347", "#ffcba4"];
for (let i = 0; i < 20; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  const s = Math.random() * 5 + 2;
  p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;background:${colors[Math.floor(Math.random() * colors.length)]};animation-duration:${9 + Math.random() * 12}s;animation-delay:${Math.random() * 12}s`;
  pc.appendChild(p);
}
// Fade-in + skill bars on scroll
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
