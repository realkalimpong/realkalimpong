// script.js
document.addEventListener("DOMContentLoaded", function() {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Check if user has already accepted cookies
    if (!localStorage.getItem("cookieAccepted")) {
        // Display the cookie policy pop-up
        cookiePopup.style.display = "block";
    }

    // Event listener for accepting cookies
    acceptBtn.addEventListener("click", function() {
        // Save user preference
        localStorage.setItem("cookieAccepted", true);
        // Hide the pop-up
        cookiePopup.style.display = "none";
    });

    // Event listener for rejecting cookies
    rejectBtn.addEventListener("click", function() {
        // Handle rejection logic (e.g., redirect to a privacy page)
        // For simplicity, you can just hide the pop-up
        cookiePopup.style.display = "none";
    });
});

window.onload = function () { 
    let slides =  
        document.getElementsByClassName('carousel-item'); 
  
    function addActive(slide) { 
        slide.classList.add('active'); 
    } 
  
    function removeActive(slide) { 
        slide.classList.remove('active'); 
    } 
  
    addActive(slides[1]); 
    setInterval(function () { 
        for (let i = 0; i < slides.length; i++) { 
            if (i + 1 == slides.length) { 
                addActive(slides[0]); 
                setTimeout(removeActive, 350, slides[i]); 
                break; 
            } 
            if (slides[i].classList.contains('active')) { 
                setTimeout(removeActive, 350, slides[i]); 
                addActive(slides[i + 1]);
                break; 
            } 
        } 
    }, 2000); 
};

