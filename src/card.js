export class Card {
  constructor(popupZoom,placesContainer){
    this.popupZoom = popupZoom;
    this.placesContainer = placesContainer;
  }

  like(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }

  }
  
  remove(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {
      const card = event.target.closest('.place-card');
      this.placesContainer.removeChild(card);
      
    }
  }

  zoomImage(){
    if (event.target.classList.contains('place-card__image')) {
      this.popupZoom.open(event.target.style.backgroundImage);
    }
    
  }
  

  create(card) {
    const placeCard = document.createElement('div');
    placeCard.dataset.cardId = card._id;
    const cardImage = document.createElement('div');
    const cardDeleteIcon = document.createElement('button');
    const cardDescription = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardLikeIcon = document.createElement('button');
    const placeCardLikeCount = document.createElement('div');

    placeCard.classList.add('place-card');
    cardImage.classList.add('place-card__image');
    //  cardImage.setAttribute('style', `background-image: url(${link}`);
    cardDeleteIcon.classList.add('place-card__delete-icon');
    cardDescription.classList.add('place-card__description');
    cardName.classList.add('place-card__name');
    //cardName.textContent = name;
    cardLikeIcon.classList.add('place-card__like-icon');
    placeCardLikeCount.classList.add('place-card__like-count');

    placeCard.appendChild(cardImage);
    placeCard.appendChild(cardDescription);
    cardImage.appendChild(cardDeleteIcon);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(cardLikeIcon);
    cardDescription.appendChild(placeCardLikeCount);

    cardImage.setAttribute('style', `background-image: url(${card.link})`);
    cardName.textContent = card.name;

    return placeCard;
  }


  updateLikesCount(element, count){
    element.querySelector('.place-card__like-count').textContent = count;
  }
}
