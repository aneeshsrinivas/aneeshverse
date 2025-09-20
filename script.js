document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for internal links
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Typewriter effect for hero title
  const typewriter = document.querySelector(".hero h1");
  const text = typewriter.textContent;
  typewriter.textContent = "";
  let i = 0;
  const type = () => {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  };
  type();

  // Section reveal animation
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    observer.observe(section);
  });

  // Optional: Theme toggle logic (if you add a button)
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
});