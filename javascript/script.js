// Sidebar navigation
const sidebarItems = document.querySelectorAll(".sidebar li");
const sections = document.querySelectorAll(".section");

sidebarItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    sidebarItems.forEach((i) => i.classList.remove("active"));
    sections.forEach((sec) => sec.classList.remove("active"));
    item.classList.add("active");
    sections[index].classList.add("active");
  });
});

// Modal
const modal = document.getElementById("abilityModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.querySelector(".close");

closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Section grids
const traitsGrid = document.querySelector("#traits .grid");
const subtraitsGrid = document.querySelector("#subtraits .grid");
const specsGrid = document.querySelector("#specs .grid");

// ========== TRAITS ==========
const traits = [
  {
    name: "None",
    desc: `Base: Nothing.<br><br>On Flow: You gain a subtle boost in every stat — becoming a true Jack of All Trades.`
  },
  {
    name: "Flexible Torso",
    desc: `Base: More torso control for sharper spikes and sneaky attack angles.<br><br>On Flow: Unlock extreme flexibility — drive your hits even deeper.`
  },
  {
    name: "Strong Hitter",
    desc: `Base: +0.5 Power and a slightly higher chance to deliver heavy knockbacks.<br><br>On Flow: Spikes come out faster and hit harder.`
  },
  {
    name: "Explosive Legs",
    desc: `Base: +1 JumpPower — leap higher for massive spikes and stronger blocks.<br><br>On Flow: Increased hops with +1.5 JumpPower.`
  },
  {
    name: "Big Arms",
    desc: `Base: Expands your receiving and diving hitboxes — you're a massive presence on the court.<br><br>On Flow: Even bigger coverage: enhanced receive/dive hitboxes, Stabilized Core, stronger Accelerator, buffed Iron Lungs with faster regen, and the ability to dive even further.`
  },
  {
    name: "Expansive Reach",
    desc: `Base: Increases your TopHitbox — stretch higher for sets and spikes.<br><br>On Flow: Extended reach, auto-hits green spikes, and powered-up Controlled Sets. Precision and range combined.`
  },
  {
    name: "Firm Hands",
    desc: `Base: Extends your blocking hitbox and prevents tools from happening too often. Negates strong wipes from “Wipeout Specialist”, resulting in simpler one-touches.<br><br>On Flow: You get an even larger block hitbox, almost leaving you no chance to get tooled.`
  },
  {
    name: "Topspin Specialist",
    desc: `Base: Load your serves with extra topspin — faster drops and tricky curves.<br><br>On Flow: Buffs your serves even more — faster topspin serves with nastier side spins.`
  }
];

// ========== SUBTRAITS ==========
const subtraits = [
  {
    name: "None",
    desc: `Nothing.`
  },
  {
    name: "Trained Legs",
    desc: `Auto ‘boom’ jumps without costing stamina, plus a noticeable boost to gliding speed — launch and fly with ease.`
  },
  {
    name: "Athletic",
    desc: `+0.35 JumpPower, +1 Stamina, quicker approach, a touch more airtime, and improved sprint speed — built for all-around mobility.`
  },
  {
    name: "Iron Lungs",
    desc: `+4 Stamina and faster stamina regeneration so you can keep going longer without gasping out.`
  },
  {
    name: "Side Spinner",
    desc: `Adds extra sidespin to your serves for sneaky, curving deliveries that confuse receivers.`
  },
  {
    name: "Soft Touch",
    desc: `When tilting up with ≤3 Power you get a delicate feint — a light tap that drops quickly for deceptive plays.`
  },
  {
    name: "Controlled Sets",
    desc: `Higher, floatier sets with bigger arcs — plus the ability to place sets sideways for creative plays.`
  },
  {
    name: "Accelerator",
    desc: `Massive sprint-speed boost — get from A to B in a flash.`
  },
  {
    name: "Fast Approach",
    desc: `Greatly reduces jump delay so your approach is crisp and responsive.`
  },
  {
    name: "Wipeout Specialist",
    desc: `Your wipes/blockouts and tools become faster, stronger and longer if you hit the ball exactly at the top of the blocker’s hitbox.`
  },
  {
    name: "Rebounder",
    desc: `50% chance to turn blocks into rebounds that bounce back if you hit the ball exactly into the top of the blocker’s hitbox — but it won’t always succeed.`
  },
  {
    name: "Heavy Hitter",
    desc: `50% chance to cause a receive break that sends the ball the opposite way — brutal power on contact.`
  },
  {
    name: "Stabilized Core",
    desc: `Resists knockback from hard hits and nullifies receive breaks.`
  },
  {
    name: "Quick Blocker",
    desc: `Drastically cuts jump delay when blocking — even faster than Fast Approach.`
  },
  {
    name: "Split Stepper",
    desc: `Grants a rapid, dash-like step in any direction for sharp, reactive movement.`
  },
  {
    name: "Heavy Floater",
    desc: `Makes your floats heavier and more pronounced — they hang, then suddenly drop.`
  },
  {
    name: "Hang Time",
    desc: `Increases airtime so you stay aloft longer for bigger, messier plays.`
  }
];

// ========== SPECS ==========
// ========== SPECS ==========
const specs = [
  // ---- Opposite Hitter Specs ----
  {
    name: "Opposite Hitter Specs: Ushijima",
    desc: `
      <strong>Ushijima 🌟🌟🌟🌟🌟</strong><br>
      Height: 6'3 (6'1 - 6'5)<br><br>
      <strong>Passives:</strong><br>
      Strong Hitter, Expansive Reach, Wipeout Specialist, Side Spinner, Trained Legs, Heavy Hitter<br><br>
      <strong>Actives:</strong><br>
      Buffed Strong Hitter (16.2), Buffed Expansive Reach (1.5), Athletic, Receive Break (Spec only)<br><br>
      <strong>Duration:</strong> 10s<br>
      <strong>Cooldown:</strong> 180s<br>
      <strong>Aura:</strong> Plum
    `
  },
  {
    name: "Opposite Hitter Specs: Mad Dog",
    desc: `
      <strong>Mad Dog ⭐⭐⭐⭐</strong><br>
      Height: 5'11 (5'9 - 6'1)<br><br>
      <strong>Passives:</strong><br>
      Strong Hitter, Accelerator, Heavy Hitter, Nerfed Explosive Legs (.5)<br><br>
      <strong>Actives:</strong><br>
      Buffed Strong Hitter (15.9), Flexible Torso<br>
      Mad Dog can’t get a red; receive hitbox worsens when active.<br><br>
      <strong>Duration:</strong> 12.5s<br>
      <strong>Cooldown:</strong> 165s<br>
      <strong>Aura:</strong> Yellow
    `
  },
  {
    name: "Opposite Hitter Specs: Gao",
    desc: `
      <strong>Gao ⭐⭐⭐</strong><br>
      Height: 6'8 (6'6 - 6'10)<br><br>
      <strong>Passives:</strong><br>
      Expansive Reach, Strong Hitter, Firm Hands<br><br>
      <strong>Actives:</strong><br>
      Buffed Strong Hitter (15.8), Buffed Expansive Reach (1.75), Quick Blocker<br><br>
      <strong>Duration:</strong> 15s<br>
      <strong>Cooldown:</strong> 155s<br>
      <strong>Aura:</strong> White
    `
  },

  // ---- Setter Specs ----
  {
    name: "Setter Specs: Oikawa",
    desc: `
      <strong>Oikawa ⭐⭐⭐⭐</strong><br>
      Height: 6'1 (5'11 - 6'3)<br><br>
      <strong>Passives:</strong><br>
      Topspin Specialist, Athletic, Expansive Reach, Accelerator, Big Arms<br>
      (Team buff: All teammates get Expansive Reach — doesn’t stack)<br><br>
      <strong>Actives:</strong><br>
      16.7 Power (serve only), Buffed Side Spinner, Buffed Topspin Specialist<br><br>
      <strong>Duration:</strong> 13s<br>
      <strong>Cooldown:</strong> 170s<br>
      <strong>Aura:</strong> Blue
    `
  },
  {
    name: "Setter Specs: Kageyama",
    desc: `
      <strong>Kageyama ⭐⭐⭐⭐</strong><br>
      Height: 6’0 (5’10 - 6’2)<br><br>
      <strong>Passives:</strong><br>
      Expansive Reach, Iron Lungs, Accelerator, Athletic, Stop Sets (20s CD)<br><br>
      <strong>Actives:</strong><br>
      Strong Hitter, Stop Sets no CD, Top Spinner, No Quick Debuff<br><br>
      <strong>Duration:</strong> 20s<br>
      <strong>Cooldown:</strong> 175s<br>
      <strong>Aura:</strong> Orange / Black
    `
  },

  // ---- Middle Blocker Specs ----
  {
    name: "Middle Blocker Specs: Hirugami",
    desc: `
      <strong>Hirugami 🌟🌟🌟🌟🌟</strong><br>
      Height: 6'3 (6'1 - 6'5)<br><br>
      <strong>Passives:</strong><br>
      Firm Hands, Expansive Reach, Quick Blocker, Fast Approach, Heavy Floater<br>
      (Glides faster in the air)<br><br>
      <strong>Actives:</strong><br>
      Untoolable / Unbreakable Blocks, Block hitbox widens by .5, Floaters cause Receive Break<br><br>
      <strong>Duration:</strong> 13s<br>
      <strong>Cooldown:</strong> 180s<br>
      <strong>Aura:</strong> White
    `
  },
  {
    name: "Middle Blocker Specs: Rintaro",
    desc: `
      <strong>Rintaro ⭐⭐⭐⭐</strong><br>
      Height: 6'2 (6'0 - 6'4)<br><br>
      <strong>Passives:</strong><br>
      Flexible Torso, Nerfed Expansive Reach (.75), Athletic, Quick Blocker<br><br>
      <strong>Actives:</strong><br>
      Expansive Reach, Extremely Buffed Flexible Torso<br><br>
      <strong>Duration:</strong> 10s<br>
      <strong>Cooldown:</strong> 160s<br>
      <strong>Aura:</strong> Black / Grey
    `
  },
  {
    name: "Middle Blocker Specs: Tsukishima",
    desc: `
      <strong>Tsukishima ⭐⭐⭐</strong><br>
      Height: 6'2 (6'0 - 6'4)<br><br>
      <strong>Passives:</strong><br>
      Expansive Reach, Firm Hands, Quick Blocker<br><br>
      <strong>Actives:</strong><br>
      Soft Touch, Fast Approach, Athletic, Buffed Firm Hands<br><br>
      <strong>Duration:</strong> 15s<br>
      <strong>Cooldown:</strong> 150s<br>
      <strong>Aura:</strong> Yellow / Orange
    `
  },

  // ---- Outside Hitter Specs ----
  {
    name: "Outside Hitter Specs: Sakusa",
    desc: `
      <strong>Sakusa 🌟🌟🌟🌟🌟</strong><br>
      Height: 6'2 (6'0 - 6'4)<br><br>
      <strong>Passives:</strong><br>
      Expansive Reach, Topspin Specialist, Side Spinner, Wipeout Specialist, Big Arms, Stabilized Core<br><br>
      <strong>Actives:</strong><br>
      Curve Spikes (A = left, D = right), Hang Time, Strong Hitter, Heavy Hitter<br><br>
      <strong>Duration:</strong> 13s<br>
      <strong>Cooldown:</strong> 180s<br>
      <strong>Aura:</strong> Green / Black
    `
  },
  {
    name: "Outside Hitter Specs: Kiryuu",
    desc: `
      <strong>Kiryuu 🌟🌟🌟🌟🌟</strong><br>
      Height: 6'2 (6'0 - 6'4)<br><br>
      <strong>Passives:</strong><br>
      Explosive Legs, Strong Hitter (15.9), Athletic, Trained Legs, Heavy Hitter, Wipeout Specialist<br><br>
      <strong>Actives:</strong><br>
      Access to 16.2 Power, Receive Shattering Spikes, Expansive Reach, Topspin Specialist<br><br>
      <strong>Duration:</strong> 13s<br>
      <strong>Cooldown:</strong> 180s<br>
      <strong>Aura:</strong> Dark Green
    `
  },
  {
    name: "Outside Hitter Specs: Korai",
    desc: `
      <strong>Korai ⭐⭐⭐⭐</strong><br>
      Height: 5'6 (5'4 - 5'8)<br><br>
      <strong>Passives:</strong><br>
      Buffed Explosive Legs (2.5), Big Arms, Firm Hands, Soft Touch, Trained Legs<br><br>
      <strong>Actives:</strong><br>
      Extremely Buffed Explosive Legs (4), Accelerator, Auto Tool (A = left, D = right)<br><br>
      <strong>Duration:</strong> 15s<br>
      <strong>Cooldown:</strong> 175s<br>
      <strong>Aura:</strong> White / Feathered
    `
  },
  {
    name: "Outside Hitter Specs: Bokuto",
    desc: `
      <strong>Bokuto ⭐⭐⭐⭐</strong><br>
      Height: 6'3 (6'1 - 6'5)<br><br>
      <strong>Passives:</strong><br>
      Athletic, Iron Lungs, Heavy Hitter, Wipeout Specialist, Rebounder<br><br>
      <strong>Actives:</strong><br>
      Access to 16 Power, Accelerator, Hang Time, Air Turn (0.5s)<br><br>
      <strong>Duration:</strong> 15s<br>
      <strong>Cooldown:</strong> 170s<br>
      <strong>Aura:</strong> Gold / Grey
    `
  },
  {
    name: "Outside Hitter Specs: Asahi",
    desc: `
      <strong>Asahi ⭐⭐⭐</strong><br>
      Height: 6'1 (5'11 - 6'3)<br><br>
      <strong>Passives:</strong><br>
      Strong Hitter, Expansive Reach, Wipeout Specialist, Hang Time<br><br>
      <strong>Actives:</strong><br>
      Access to 15.9 Power, Heavy Hitter, 2x Hang Time<br><br>
      <strong>Duration:</strong> 10s<br>
      <strong>Cooldown:</strong> 160s<br>
      <strong>Aura:</strong> Dark Orange
    `
  },

  // ---- Libero ----
  {
    name: "Libero Specs: Motoya",
    desc: `
      <strong>Motoya 🌟🌟🌟🌟🌟</strong><br>
      Height: 5'10 (5'8 - 6'0)<br><br>
      <strong>Passives:</strong><br>
      Big Arms, +1 Dive Hitbox, Iron Lungs, Stabilized Core, Accelerator<br><br>
      <strong>Actives:</strong><br>
      Athletic, +2 Dive Hitbox, Buffed Accelerator, Split Stepper<br><br>
      <strong>Duration:</strong> 25s<br>
      <strong>Cooldown:</strong> 180s<br>
      <strong>Aura:</strong> Yellow
    `
  }
];


// ========== RENDER FUNCTION ==========
function renderCards(container, list) {
  container.innerHTML = "";
  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${item.name}</h3>`;
    card.addEventListener("click", () => {
      modal.style.display = "flex";
      modalTitle.textContent = item.name;
      modalDescription.innerHTML = item.desc;
    });
    container.appendChild(card);
  });
}

// Render everything
renderCards(traitsGrid, traits);
renderCards(subtraitsGrid, subtraits);
renderCards(specsGrid, specs);

// ========== SEARCH BAR ==========
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });

    // If query present, show the section(s) that contain visible cards and hide others
    const showSectionIfHasVisibleCards = (sectionId) => {
      const section = document.getElementById(sectionId);
      const cards = section.querySelectorAll(".card");
      const anyVisible = Array.from(cards).some(c => c.style.display !== "none");
      if (anyVisible) {
        sections.forEach((s) => s.classList.remove("active"));
        section.classList.add("active");
      }
    };

    if (query === "") {
      sections.forEach((s) => s.classList.remove("active"));
      document.getElementById("dashboard").classList.add("active");
    } else {
      // prioritize traits, then subtraits, then specs for which section to open
      showSectionIfHasVisibleCards("traits");
      showSectionIfHasVisibleCards("subtraits");
      showSectionIfHasVisibleCards("specs");
    }
  });
} else {
  console.warn("searchInput not found in DOM. Make sure your HTML includes an input with id='searchInput'");
}
