const CONTACT_EMAIL = "info@smartshelfmarket.com";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close menu" : "Open menu"
  );
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const filterButtons =
  document.querySelectorAll(".filter-btn");

const productCards =
  document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((currentButton) => {
      currentButton.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    productCards.forEach((card) => {
      const categories =
        card.dataset.category.split(" ");

      const hidden =
        filter !== "all" &&
        !categories.includes(filter);

      card.classList.toggle("hidden", hidden);
    });
  });
});

const products = {
  "360": {
    name: "Mini 360",
    type: "Compact Cooler",
    image: "assets/images/model-360.webp",
    description:
      "A space-efficient smart cooler for offices, lounges and locations where floor space matters.",
    features: [
      "Approx. 216 beverage capacity",
      "Six adjustable shelves",
      "Suitable for drinks, snacks and packaged food",
      "Cashless open-door shopping"
    ]
  },

  "440": {
    name: "Plus 440",
    type: "Versatile Cooler",
    image: "assets/images/model-440.webp",
    description:
      "A balanced mid-size model with flexible shelf space for mixed product assortments.",
    features: [
      "Approx. 288 beverage capacity",
      "Six adjustable shelves",
      "Flexible merchandising layout",
      "Cashless open-door shopping"
    ]
  },

  "542": {
    name: "Pro 542",
    type: "Pro Cooler",
    image: "assets/images/model-542.webp",
    description:
      "A practical high-visibility cooler for busy workplaces, schools, gyms and shared public areas.",
    features: [
      "Approx. 324 beverage capacity",
      "Six adjustable shelves",
      "Strong everyday capacity",
      "Cashless open-door shopping"
    ]
  },

  "550": {
    name: "Freezer 550",
    type: "Frozen Food Machine",
    image: "assets/images/model-550.webp",
    description:
      "A frozen configuration for products that require below-freezing storage, such as meals and desserts.",
    features: [
      "Approx. 336 beverage-equivalent capacity",
      "Frozen product configuration",
      "Adjustable shelf layout",
      "Cashless open-door shopping"
    ]
  },

  "620s": {
    name: "Max 620S",
    type: "High-Capacity Cooler",
    image: "assets/images/model-620s.webp",
    description:
      "A large single-door cooler offering more shelf width and product visibility for high-traffic placements.",
    features: [
      "Approx. 378 beverage capacity",
      "Six adjustable shelves",
      "Wide merchandising area",
      "Cashless open-door shopping"
    ]
  },

  "660": {
    name: "Max 660",
    type: "High-Capacity Cooler",
    image: "assets/images/model-660.webp",
    description:
      "A high-volume single-door model designed for busy locations with broad product demand.",
    features: [
      "Approx. 432 beverage capacity",
      "Six adjustable shelves",
      "Large display area",
      "Cashless open-door shopping"
    ]
  },

  "1200": {
    name: "Ultra 1200",
    type: "Double-Door Cooler",
    image: "assets/images/model-1200.webp",
    description:
      "The largest option in this lineup, built for major workplaces, campuses and high-traffic public venues.",
    features: [
      "Approx. 648 beverage capacity",
      "Twelve adjustable shelves",
      "Double-door format",
      "Cashless open-door shopping"
    ]
  }
};

const modal =
  document.getElementById("product-modal");

const modalImage =
  document.getElementById("modal-image");

const modalType =
  document.getElementById("modal-type");

const modalTitle =
  document.getElementById("modal-title");

const modalDescription =
  document.getElementById("modal-description");

const modalFeatures =
  document.getElementById("modal-features");

document.querySelectorAll(".product-detail").forEach((button) => {
  button.addEventListener("click", () => {
    const product =
      products[button.dataset.product];

    if (!product) {
      return;
    }

    modalImage.src = product.image;
    modalImage.alt =
      `${product.name} smart vending machine`;

    modalType.textContent = product.type;
    modalTitle.textContent = product.name;
    modalDescription.textContent =
      product.description;

    modalFeatures.innerHTML =
      product.features
        .map((feature) => `<li>${feature}</li>`)
        .join("");

    modal.showModal();
  });
});

document
  .querySelector(".modal-close")
  .addEventListener("click", () => {
    modal.close();
  });

document
  .getElementById("modal-quote")
  .addEventListener("click", () => {
    modal.close();
  });

modal.addEventListener("click", (event) => {
  const rectangle =
    modal.getBoundingClientRect();

  const clickedInside =
    event.clientX >= rectangle.left &&
    event.clientX <= rectangle.right &&
    event.clientY >= rectangle.top &&
    event.clientY <= rectangle.bottom;

  if (!clickedInside) {
    modal.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    modal.open
  ) {
    modal.close();
  }
});

document
  .getElementById("quote-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const data =
      new FormData(event.currentTarget);

    const subject =
      encodeURIComponent(
        `Smart Shelf Market quote request from ${data.get("name")}`
      );

    const body =
      encodeURIComponent(
        [
          `Name: ${data.get("name")}`,
          `Business: ${data.get("company") || "Not provided"}`,
          `Email: ${data.get("email")}`,
          `Phone: ${data.get("phone") || "Not provided"}`,
          `Location type: ${data.get("location") || "Not selected"}`,
          "",
          "Project details:",
          data.get("message")
        ].join("\n")
      );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });