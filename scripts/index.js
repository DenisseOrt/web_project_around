// popup editar
const popupEdit = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__info-button");
const closePopupButton = document.querySelector(".popup__button-close");

const form = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-name");
const occupationInput = document.querySelector(".popup__form-occupation");

const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");

openPopupButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileDescription.textContent;

  popupEdit.classList.add("popup_opened");
});

closePopupButton.addEventListener("click", () => {
  popupEdit.classList.remove("popup_opened");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = occupationInput.value;

  popupEdit.classList.remove("popup_opened");
});

// popup nuevo lugar
const popupAdd = document.querySelector(".popup-add");
const openAddButton = document.querySelector(".profile__info-button-add");
const closeAddButton = document.querySelector(".popup-add__button-close");

const addForm = document.querySelector(".popup-add__form");
const placeInput = document.querySelector(".popup-add__form-place");
const urlInput = document.querySelector(".popup-add__form-url");

const cardsContainer = document.querySelector(".elements");

openAddButton.addEventListener("click", () => {
  placeInput.value = "";
  urlInput.value = "";
  popupAdd.classList.add("popup-add_opened");
});

closeAddButton.addEventListener("click", () => {
  popupAdd.classList.remove("popup-add_opened");
});

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = placeInput.value;
  const imageUrl = urlInput.value;

  const newCard = createCard(title, imageUrl);
  cardsContainer.prepend(newCard);

  popupAdd.classList.remove("popup-add_opened");
});

// crear nueva tarjeta
function createCard(title, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("elements__card");

  card.innerHTML = `
    <button class="elements__card-delete"></button>
    <img src="${imageUrl}" alt="${title}" class="elements__card-image" />
    <div class="elements__card-text">
      <p class="elements__card-name">${title}</p>
      <button class="elements__card-like"></button>
    </div>
  `;

  const deleteButton = card.querySelector(".elements__card-delete");
  deleteButton.addEventListener("click", () => {
    card.remove();
  });

  const likeButton = card.querySelector(".elements__card-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("elements__card-like_active");
  });

  return card;
}

function initializeCardEvents(card) {
  const deleteButton = card.querySelector(".elements__card-delete");
  const likeButton = card.querySelector(".elements__card-like");

  if (deleteButton) {
    deleteButton.addEventListener("click", () => {
      card.remove();
    });
  }

  if (likeButton) {
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("elements__card-like_active");
    });
  }
}

document.querySelectorAll(".elements__card").forEach(initializeCardEvents);

// popup imagen
const popupImage = document.querySelector(".elements__popup");
const popupImg = popupImage.querySelector(".elements__popup-img");
const popupText = popupImage.querySelector(".elements__popup-text");
const popupCloseBtn = popupImage.querySelector(".elements__popup-button-close");

function openImagePopup(imageSrc, altText) {
  popupImg.src = imageSrc;
  popupImg.alt = altText;
  popupText.textContent = altText;
  popupImage.classList.add("popup_opened");
}

popupCloseBtn.addEventListener("click", () => {
  popupImage.classList.remove("popup_opened");
});

cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("elements__card-image")) {
    const img = event.target;
    openImagePopup(img.src, img.alt);
  }
});

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData.name, cardData.link);
  cardsContainer.append(cardElement);
});
