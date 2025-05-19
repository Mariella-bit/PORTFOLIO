document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");
  
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove("active"));
        // Add 'active' class to clicked link
        link.classList.add("active");
  
        // Hide all sections
        sections.forEach(section => section.style.display = "none");
  
        // Show the targeted section
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = "block";
        }
      });
    });
  
    // Initially show the home section only
    document.getElementById("home").style.display = "block";
  });