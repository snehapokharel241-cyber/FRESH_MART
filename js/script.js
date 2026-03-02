// ============================================================
// script.js  –  Fresh Mart
// ONLY contains vegData and legacy grid renderer.
// All cart logic lives in cart.js (loaded first).
// ============================================================

const vegData = [
    { name: "Potato", np: "आलु", price: 50, img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80" },
    { name: "Tomato", np: "गोलभेडा", price: 75, img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=400&q=80" },
    { name: "Onion", np: "प्याज", price: 60, img: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80" },
    { name: "Garlic", np: "लसुन", price: 250, img: "images/garlic.jpg" },
    { name: "Ginger", np: "अदुवा", price: 120, img: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80" },
    { name: "Green Chili", np: "खुर्सानी", price: 140, img: "images/green%20chilly.jpg" },
    { name: "Cauliflower", np: "काउली", price: 45, img: "images/cauliflower.webp" },
    { name: "Cabbage", np: "बन्दा", price: 35, img: "images/cabbage.avif" },
    { name: "Brinjal", np: "भन्टा", price: 55, img: "images/brinjal.webp" },
    { name: "Okra/Bhindi", np: "भिन्डी", price: 130, img: "images/okra.webp" },
    { name: "Mushroom", np: "च्याउ", price: 280, img: "images/mushroom.jpg" },
    { name: "Bitter Gourd", np: "करेला", price: 80, img: "images/bitter%20guard.webp" },
    { name: "Bottle Gourd", np: "लौका", price: 45, img: "images/bottle%20gaurd.png" },
    { name: "Mustard Greens", np: "रायो साग", price: 40, img: "images/mustard%20green.jpg" },
    { name: "Pumpkin", np: "फर्सी", price: 35, img: "images/pumpkin.jpg" },
    { name: "Radish", np: "मूला", price: 30, img: "images/raddish.webp" },
];

