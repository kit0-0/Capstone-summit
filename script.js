const mobileMenu = document.getElementById('mobile-menu');
const menu = document.getElementById('menu');
const close = document.getElementById('close-btn');
const mobileLinks = document.querySelectorAll('.nav-list');

function openMenu() {
  mobileMenu.style.display = 'flex';
}

function closeMenu() {
  mobileMenu.style.display = 'none';
}

menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// speaker
const speakerData = [
  {
    img: './images/speaker_01.png',
    name: 'Yochai Benkler',
    profession: 'Harvard Law School Professor',
    description: 'Focusing on a common approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia. (Main publications: The Wealth of Networks, Penguin and Levidon)',
  },
  {
    img: './images/speaker_02.png',
    name: 'Kilnam Chon',
    profession: 'Korea Advanced Institute of Science and Technology (KAIST) Emeritus Professor',
    description: 'It opened the Internet era in earnest by developing Asia\'s first internet protocol network SDN and leading the nation\'s first dedicated line Internet connection in 1990.',
  },
  {
    img: './images/speaker_03.png',
    name: 'Sohyeong Noh',
    profession: 'Art Center Nabi Director, CC Korea Director',
    description: 'As the author of <Digital Art, Art of Our Time>, he opened \'Art Center Nabi\', the first digital art institution in Korea in 2000, and is currently working there.',
  },
  {
    img: './images/speaker_04.png',
    name: 'Julia Reda',
    profession: 'Representative of the Young Pirates of Europe',
    description: 'European integration and young people\'s participation in politics and democracy online are major concerns, and he has published a report that will potentially affect the revision of the European Union\'s copyright law in July.',
  },
  {
    img: './images/speaker_05.png',
    name: 'Lila Tretikov',
    profession: 'Secretary General of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages each month to over 100 million people, nearly half of the world\'s population.',
  },
  {
    img: './images/speaker_06.png',
    name: 'Ryan Merkley',
    profession: 'Creative Commons CEO, former Mozilla Foundation COO',
    description: 'He led the open source project at the Mozilla Foundation and joined the CC CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

const container = document.getElementById('container');

function data() {
  speakerData.forEach((speaker) => {
    container.innerHTML += `<div class="speaker-list">
    <img src="${speaker.img}" alt="" class="speaker-img">
    <div class="speaker-content">
      <h2 class="speaker-header">${speaker.name}</h2>
      <h3 class="speaker-profession">${speaker.profession}</h3>
      <hr class="speaker-line">
      <p class="speaker-description">${speaker.description}</p>
    </div>
  </div>`;
  });
}

data();

// program-categories
const programCategoriesData = [
  {
    icon: 'images/program_icon_01.png',
    title: 'Conferences',
    description: 'Listen to lectures from speakers from various countries and find out about the latest global trends.',
  },
  {
    icon: 'images/program_icon_02.png',
    title: 'Exhibition',
    description: 'Meet the creations of artists from various fields who share the open spirit of CC.',
  },
  {
    icon: 'images/program_icon_03.png',
    title: 'Forum',
    description: 'We have time to share our thoughts and opinions with experts for each topic covered.',
  },
  {
    icon: 'images/program_icon_04.png',
    title: 'Workshop',
    description: 'Instead of just looking at creations using open source, you can create them yourself.',
  },
  {
    icon: 'images/program_icon_05.png',
    title: 'Party',
    description: 'Create opportunities to freely network with CC personnel from around the world.',
  },
];

const programCategoriesContainer = document.querySelector('.program-categories');

function createProgramCategories() {
  programCategoriesData.forEach((category) => {
    programCategoriesContainer.innerHTML += `
      <div class="program-categories-details flex-container">
        <img src="${category.icon}" alt="program-ico">
        <span>${category.title}</span>
        <p>${category.description}</p>
      </div>
    `;
  });
}

createProgramCategories();

// More button functionality

const moreButton = document.querySelector('.more-btn');
const speakers = Array.from(document.querySelectorAll('.speaker-list'));

moreButton.addEventListener('click', () => {
  speakers.slice(-4).forEach((speaker) => {
    speaker.classList.toggle('hidden');
  });

  if (moreButton.textContent === 'More') {
    moreButton.textContent = 'Less';
  } else {
    moreButton.textContent = 'More';
  }
});

function hideSpeakers() {
  if (window.innerWidth < 768) {
    speakers.slice(-4).forEach((speaker) => {
      speaker.classList.add('hidden');
    });
    moreButton.textContent = 'More';
  } else {
    speakers.forEach((speaker) => {
      speaker.classList.remove('hidden');
    });
    moreButton.textContent = 'More';
  }
}

hideSpeakers();

window.addEventListener('resize', () => { // check window on resizing
  hideSpeakers();
});
