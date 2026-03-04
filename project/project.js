const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const link = card.getAttribute("data-link");

        window.open(link, "_blank");

    });

});