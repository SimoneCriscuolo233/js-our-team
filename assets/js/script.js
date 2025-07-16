const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const generateCard = (member) => {
  const memberCard = `<div class="col-12 col-md-6 col-lg-4">
        <div class="card mb-3 bg-black text-white">
          <div class="row g-3">
            <div class="col-4">
              <img src="./assets/${member.img}" class="img-fluid" alt="...">
            </div>
            <div class="col-8">
              <div class="card-body d-flex flex-column pt-3">
                <h5 class="card-title fw-bold">${member.name}</h5>
                <p class="card-text">${member.role}</p>
                <p class="card-text"><small class="text-primary">${member.email}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  return memberCard;
}
const teamContainer = document.getElementById('team-row');

for (let i = 0; i < teamMembers.length; i++) {
  let card = generateCard(teamMembers[i]);

  teamContainer.innerHTML += card;
}

