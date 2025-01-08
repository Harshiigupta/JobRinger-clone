// JavaScript for interactive elements and animations

// Example: Carousel behavior
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".carousel img");
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide();
    }, 3000);

    showSlide(); // Show the first slide
});

// Example: Form validation
//document.querySelectorAll("form").forEach((form) => {
 //   form.addEventListener("submit", function (event) {
 //       if (!form.checkValidity()) {
   //         event.preventDefault();
    //        alert("Please fill in all required fields.");
      //  }
   // });
//});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".login-box, .register-box");
    container.style.opacity = 0;
    container.style.transform = "translateY(-20px)";
    setTimeout(() => {
        container.style.transition = "all 0.5s ease";
        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 100);
});


