const menuData = {
  starters: [
    {
      title: "Samosa (2 pcs)",
      desc: "Crispy golden pastry stuffed with spiced potatoes and peas, served with mint chutney and tamarind sauce.",
      price: "₹60",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    },
    {
      title: "Paneer Tikka",
      desc: "Soft cottage cheese cubes marinated in tandoori spices and grilled to perfection in a clay oven.",
      price: "₹220",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: true
    },
    {
      title: "Chicken Seekh Kebab",
      desc: "Minced chicken mixed with fresh herbs, green chillies, and spices, skewered and charcoal-grilled.",
      price: "₹280",
      tag: "Non-Veg",
      tagClass: "bg-danger",
      headerClass: "bg-dark text-warning",
      spicy: true
    },
    {
      title: "Pani Puri",
      desc: "Crispy hollow puris filled with spiced mashed potato and tangy tamarind-mint flavoured water.",
      price: "₹80",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: true
    },
    {
      title: "Dahi Bhalla",
      desc: "Soft lentil dumplings soaked in creamy yogurt, topped with tamarind chutney and chaat masala.",
      price: "₹100",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    },
    {
      title: "Fish Amritsari",
      desc: "Battered fish fillet seasoned with ajwain, red chilli, and ginger-garlic, deep fried until crispy.",
      price: "₹320",
      tag: "Non-Veg",
      tagClass: "bg-danger",
      headerClass: "bg-dark text-warning",
      spicy: true
    }
  ],
  mains: [
    {
      title: "Butter Chicken",
      desc: "Tender chicken pieces simmered in a rich, creamy tomato-butter gravy with aromatic spices. Best with naan.",
      price: "₹320",
      tag: "Non-Veg",
      tagClass: "bg-danger",
      headerClass: "bg-dark text-warning",
      spicy: false
    },
    {
      title: "Dal Makhani",
      desc: "Slow-cooked black lentils and kidney beans in a silky butter-cream tomato base, simmered overnight.",
      price: "₹220",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    },
    {
      title: "Chicken Biryani",
      desc: "Fragrant basmati rice layered with spiced chicken, caramelised onions, saffron and fresh mint. Served with raita.",
      price: "₹380",
      tag: "Non-Veg",
      tagClass: "bg-danger",
      headerClass: "bg-dark text-warning",
      spicy: true
    },
    {
      title: "Palak Paneer",
      desc: "Fresh cottage cheese cubes in a smooth, spiced spinach gravy. A North Indian classic. Served with roti.",
      price: "₹240",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    },
    {
      title: "Mutton Rogan Josh",
      desc: "Slow-braised tender mutton in a bold Kashmiri gravy of whole spices, fennel, and dried ginger.",
      price: "₹420",
      tag: "Non-Veg",
      tagClass: "bg-danger",
      headerClass: "bg-dark text-warning",
      spicy: true
    },
    {
      title: "Chole Bhature",
      desc: "Spicy chickpea curry served with fluffy deep-fried bhature bread, pickled onions and green chilli.",
      price: "₹180",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: true
    }
  ],
  desserts: [
    {
      title: "Gulab Jamun",
      desc: "Soft milk-solid dumplings deep fried and soaked in rose-flavoured sugar syrup. Served warm.",
      price: "₹80",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    },
    {
      title: "Rasmalai",
      desc: "Delicate spongy cottage cheese patties soaked in chilled saffron-pistachio flavoured cream milk.",
      price: "₹120",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    },
    {
      title: "Kulfi Falooda",
      desc: "Traditional Indian ice cream on a stick with rose syrup, vermicelli noodles, and basil seeds.",
      price: "₹110",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    },
    {
      title: "Gajar Ka Halwa",
      desc: "Classic slow-cooked carrot pudding with milk, sugar, ghee, and topped with roasted cashews and raisins.",
      price: "₹130",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    },
    {
      title: "Kheer",
      desc: "Creamy rice pudding slow-cooked in full-fat milk, sweetened with sugar, and flavoured with cardamom.",
      price: "₹90",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    },
    {
      title: "Jalebi with Rabri",
      desc: "Crispy spiral jalebis dipped in sugar syrup served alongside thick saffron-flavoured reduced milk.",
      price: "₹100",
      tag: "Veg",
      tagClass: "bg-success",
      headerClass: "bg-warning text-dark",
      spicy: false
    }
  ]
};

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Kolkata",
    initials: "PS",
    avatarClass: "bg-warning text-dark",
    stars: 5,
    text: "The Butter Chicken here is absolutely divine! Rich, creamy and perfectly spiced. Reminds me of home-cooked food. Will visit again!"
  },
  {
    name: "Ananya Das",
    location: "Kalna",
    initials: "AD",
    avatarClass: "bg-dark text-warning",
    stars: 5,
    text: "Best Chicken Biryani in Bardhaman district, no doubt. The aroma when the handi opens is something else entirely. Top class!"
  },
  {
    name: "Biswarup Goswami",
    location: "Dhatrigram",
    initials: "BG",
    avatarClass: "bg-warning text-dark",
    stars: 4.5,
    text: "Came for the Thali Special and was blown away by the variety. Dal Makhani and Gulab Jamun are must-tries. Friendly staff too!"
  }
];

function renderCards(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = menuData[category].map(item => `
    <div class="col-sm-6 col-lg-4">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-header ${item.headerClass} fw-semibold d-flex justify-content-between align-items-center">
          <span><i class="bi bi-star-fill me-1"></i>${item.title}</span>
          ${item.spicy ? '<span class="badge bg-danger ms-2">🌶 Spicy</span>' : ''}
        </div>
        <div class="card-body">
          <p class="card-text text-muted">${item.desc}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center bg-white border-0">
          <span class="fs-5 fw-bold text-dark">${item.price}</span>
          <span class="badge ${item.tagClass}">${item.tag}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  container.innerHTML = testimonials.map(t => {
    const fullStars = Math.floor(t.stars);
    const halfStar = t.stars % 1 !== 0;
    let starsHTML = '<i class="bi bi-star-fill"></i>'.repeat(fullStars);
    if (halfStar) starsHTML += '<i class="bi bi-star-half"></i>';
    return `
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100 p-3">
          <div class="card-body">
            <div class="mb-3 text-warning">${starsHTML}</div>
            <p class="card-text fst-italic text-muted">"${t.text}"</p>
            <div class="d-flex align-items-center mt-3">
              <div class="avatar ${t.avatarClass} me-3">${t.initials}</div>
              <div>
                <p class="mb-0 fw-semibold">${t.name}</p>
                <small class="text-muted">${t.location}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function handleReservation() {
  const msg = document.getElementById('reservation-msg');
  msg.innerHTML = `
    <div class="alert alert-success d-flex align-items-center" role="alert">
      <i class="bi bi-check-circle-fill me-2"></i>
      Table reserved successfully! We'll confirm via call shortly. 🙏
    </div>
  `;
  setTimeout(() => { msg.innerHTML = ''; }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards('starters', 'starters-cards');
  renderCards('mains', 'mains-cards');
  renderCards('desserts', 'desserts-cards');
  renderTestimonials();
});
