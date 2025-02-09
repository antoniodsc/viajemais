document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para ativar os elementos já visíveis
});
