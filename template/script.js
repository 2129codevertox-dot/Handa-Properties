// ======================================================
// HANDA PROPERTIES - PREMIUM JAVASCRIPT
// ======================================================


// ======================================================
// WHATSAPP SETTINGS
// ======================================================

const whatsappNumber = "919592261233";

const whatsappMessage =
    "Hi Handa Properties, I am interested in the house property. Please share more details.";

const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


// ======================================================
// PREMIUM PAGE LOADER
// ======================================================

const pageLoader = document.createElement("div");

pageLoader.className = "page-loader";

pageLoader.innerHTML = `

    <div class="loader-content">

        <div class="loader-logo">
            HP
        </div>

        <h2>Handa Properties</h2>

        <p>Your Trusted Property Partner</p>

        <div class="loader-line">
            <span></span>
        </div>

        <small>Discover Your Dream Home</small>

    </div>

`;

document.body.prepend(pageLoader);


// ======================================================
// PAGE LOAD
// ======================================================

window.addEventListener("load", () => {

    setTimeout(() => {

        pageLoader.classList.add("loader-hide");

        document.body.classList.add("page-loaded");

        setTimeout(() => {

            pageLoader.remove();

        }, 800);

    }, 1200);

});


// ======================================================
// WHATSAPP LINKS
// ======================================================

const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"], .whatsapp-btn'
);

whatsappLinks.forEach(link => {

    link.href = whatsappURL;

    link.target = "_blank";

    link.addEventListener("click", () => {

        showMessage("Opening WhatsApp...");

    });

});


// ======================================================
// SMOOTH SCROLL
// ======================================================

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ======================================================
// SCROLL REVEAL
// ======================================================

const animatedElements = document.querySelectorAll(
    ".property-details, " +
    ".detail-card, " +
    ".feature-card, " +
    ".highlight, " +
    ".contact-card, " +
    ".section-heading"
);

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach((element, index) => {

    element.classList.add("reveal");

    // Staggered animation
    element.style.transitionDelay =
        `${(index % 4) * 0.08}s`;

    revealObserver.observe(element);

});


// ======================================================
// BUTTON CLICK ANIMATION
// ======================================================

const buttons = document.querySelectorAll(
    ".btn, .whatsapp-btn, .call-btn"
);

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.classList.add("button-clicked");

        setTimeout(() => {

            this.classList.remove("button-clicked");

        }, 300);

    });

});


// ======================================================
// NOTIFICATION
// ======================================================

function showMessage(message) {

    const oldNotification =
        document.querySelector(".notification");

    if (oldNotification) {
        oldNotification.remove();
    }

    const notification =
        document.createElement("div");

    notification.className = "notification";

    notification.innerHTML = `
        <span>💬</span>
        ${message}
    `;

    document.body.appendChild(notification);

    requestAnimationFrame(() => {

        notification.classList.add(
            "notification-show"
        );

    });

    setTimeout(() => {

        notification.classList.remove(
            "notification-show"
        );

        setTimeout(() => {

            notification.remove();

        }, 350);

    }, 1800);

}


// ======================================================
// FLOATING WHATSAPP BUTTON
// ======================================================

const floatingWhatsApp =
    document.createElement("a");

floatingWhatsApp.href =
    whatsappURL;

floatingWhatsApp.target =
    "_blank";

floatingWhatsApp.className =
    "floating-whatsapp";

floatingWhatsApp.setAttribute(
    "aria-label",
    "Contact Handa Properties on WhatsApp"
);


// WhatsApp-style SVG icon
floatingWhatsApp.innerHTML = `

    <svg
        viewBox="0 0 32 32"
        width="31"
        height="31"
        aria-hidden="true"
    >

        <path
            fill="white"
            d="M16 3C8.82 3 3 8.82 3 16c0 2.29.59 4.44 1.63 6.31L3.1 28.9l6.76-1.5A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Z"
        />

        <path
            fill="#25D366"
            d="M16 5.5A10.5 10.5 0 0 0 6.94 21.3l.38.66-.89 3.26 3.34-.87.64.37A10.5 10.5 0 1 0 16 5.5Z"
        />

        <path
            fill="white"
            d="M21.6 18.6c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.21.31-.8 1-.98 1.2-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.47-1.53-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.55.08-.83.39-.28.31-1.09 1.07-1.09 2.61s1.12 3.03 1.28 3.24c.16.21 2.2 3.36 5.33 4.71.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z"
        />

    </svg>

`;

document.body.appendChild(
    floatingWhatsApp
);


// Floating WhatsApp click effect

floatingWhatsApp.addEventListener(
    "click",
    () => {

        showMessage(
            "Opening WhatsApp..."
        );

    }
);


// ======================================================
// HEADER SCROLL EFFECT
// ======================================================

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add(
            "header-scrolled"
        );

    } else {

        header.classList.remove(
            "header-scrolled"
        );

    }

});


// ======================================================
// PROPERTY IMAGE
// ======================================================

const propertyImage =
    document.querySelector(
        ".property-poster img"
    );

if (propertyImage) {

    function imageLoaded() {

        propertyImage.classList.add(
            "image-loaded"
        );

    }

    // If image is already cached
    if (propertyImage.complete) {

        imageLoaded();

    } else {

        propertyImage.addEventListener(
            "load",
            imageLoaded
        );

    }

    propertyImage.addEventListener(
        "error",
        () => {

            console.error(
                "House poster could not be loaded."
            );

        }
    );

}


// ======================================================
// PARALLAX EFFECT FOR HERO
// ======================================================

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const scrollPosition =
        window.scrollY;

    if (scrollPosition < 800) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.25}px`;

    }

});


// ======================================================
// CURRENT YEAR
// ======================================================

const footerYear =
    document.querySelector(
        ".footer p:last-child"
    );

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Handa Properties. All Rights Reserved.`;

}