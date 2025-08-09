let uptoExperience = 0;
let upToCars = 1900;
let upToClients = 900;

function updateYearsOfExperience() {
  let count = document.querySelector(".text-counter-xp");
  count.innerHTML = ++uptoExperience + "<span class='text-primary'>ani de experiență</span>";
  if (uptoExperience === 33) {
    clearInterval(countExperience);
  }
}

function updateCarsValue() {
  let count = document.querySelector(".text-counter-cars");
  const increased = ++upToCars;
  count.innerHTML = increased.toLocaleString() + " + <span class='text-primary'>autovehicule verificate</span>";
  if (upToCars === 2000) {
    clearInterval(countCars);
  }
}

function updateClientsValue() {
  let count = document.querySelector(".text-counter-clients");
  const increased = ++upToClients;
  count.innerHTML = increased.toLocaleString() + " + <span class='text-primary'>clienți mulțumiți</span>";
  if (upToClients === 1000) {
    clearInterval(countClients);
  }
}

let countExperience;
let countCars;
let countClients;

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("text-counter-xp") && !countExperience) {
          countExperience = setInterval(updateYearsOfExperience, 100);
        }
        if (entry.target.classList.contains("text-counter-cars") && !countCars) {
          countCars = setInterval(updateCarsValue, 30);
        }
        if (entry.target.classList.contains("text-counter-clients") && !countClients) {
          countClients = setInterval(updateClientsValue, 30);
        }
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".text-counter-xp, .text-counter-cars, .text-counter-clients").forEach((el) => observer.observe(el));
