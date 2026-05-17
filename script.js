document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.containerCat img');
    const dots = document.querySelectorAll('.counting');
    const prevBtn = document.querySelectorAll('.pass img')[0];
    const nextBtn = document.querySelectorAll('.pass img')[1];
    const comment = document.getElementById("comment");

    let currentIndex = 0;

    function updateCarousel() {
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.classList.add('active');
                img.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                img.classList.remove('active');
            }
        });

        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        updateCarousel();
    });

    comment.addEventListener("click", () => {
        const currentImg = images[currentIndex];
        
        let currentSrc = currentImg.src;

        if (currentSrc.includes("SemBalao")) {
            currentImg.src = currentSrc.replace("SemBalao", "");
        } 
  
        else {
            currentImg.src = currentSrc.replace(".png", "SemBalao.png");
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});