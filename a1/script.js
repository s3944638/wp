const skills = [
  { name: "Intro to PHP & MySQL", rate: "$55.00/hr" },
  { name: "Intermediate Fingerstyle", rate: "$45.00/hr" },
  { name: "Artisan Bread Baking", rate: "$25.00/hr" },
  { name: "French Pastry Making", rate: "$50.00/hr" }
];

const skillsList = document.getElementById("skillsList");

skills.forEach(skill => {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.innerHTML = `
    <h3>${skill.name}</h3>
    <p>Rate: ${skill.rate}</p>
    <button>View Details</button>
  `;
  skillsList.appendChild(card);
});