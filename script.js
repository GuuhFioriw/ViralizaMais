// MENU ATIVO

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ANIMAÇÃO DOS CARDS

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card,.portfolio-card,.number-box")
.forEach(el => {
    observer.observe(el);
});

// CONTADORES

const counters = document.querySelectorAll(".number-box h3");

counters.forEach(counter => {

    const target = counter.innerText.replace("+", "").replace("%", "");

    let count = 0;

    const update = () => {

        count += Math.ceil(target / 50);

        if (count < target) {

            counter.innerText =
                counter.innerText.includes("%")
                ? count + "%"
                : "+" + count;

            requestAnimationFrame(update);

        } else {

            counter.innerText =
                counter.innerText.includes("%")
                ? target + "%"
                : "+" + target;

        }

    };

    update();

});