document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".zoomable");
    
    images.forEach(img => {
        img.style.cursor = "zoom-in";
        
        img.addEventListener("click", function () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "1000";
            
            const enlargedImg = document.createElement("img");
            enlargedImg.src = img.src;
            enlargedImg.style.maxWidth = "90vw";
            enlargedImg.style.maxHeight = "90vh";
            enlargedImg.style.borderRadius = "8px";
            enlargedImg.style.cursor = "zoom-out";
            
            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);
            
            overlay.addEventListener("click", function () {
                document.body.removeChild(overlay);
            });
        });
    });
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    const intervalTime = 3000; // Интервал автоматического переключения
    let autoSlide = setInterval(nextSlide, intervalTime);

    function updateSlide(index) {
        const slidesContainer = document.querySelector(".carousel-slides");
        slidesContainer.style.transform = `translateX(${-index * 100}%)`;
        currentIndex = index;
    }

    function nextSlide() {
        let newIndex = (currentIndex + 1) % totalSlides;
        updateSlide(newIndex);
    }

    function prevSlide() {
        let newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide(newIndex);
    }

    document.querySelector(".prev").addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    document.querySelector(".next").addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, intervalTime);
    }

    updateSlide(0);
});
