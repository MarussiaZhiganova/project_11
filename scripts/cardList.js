class CardList {
  constructor(container, card, api, userInfo) {
    this.container = container;
    this.card = card;
    this.api = api;
    this.userInfo = userInfo;
    container.addEventListener('click', this.eventHandler.bind(this));
  }
  addCard(card) {
    const element = this.card.create(card);
    this.card.updateLikesCount(element, card.likes.length);
    if (this.needLike(card)){
      this.card.setLike(element);
    }
    this.container.appendChild(element);
  }
  needLike(card){
    return card.likes.find((like) => like._id === this.userInfo._id)
  }
  setCards(initialCards){
    this.initialCards = initialCards;
  }
  render(initialCards) {
    this.initialCards = initialCards;
    for (const element of this.initialCards) {
      this.addCard(element);
    }
  }
  eventHandler(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
      const cardId = event.target.closest('.place-card').dataset.cardId;
      const card = this.initialCards.find(card => card._id === cardId);
      if (!this.needLike(card)){
        this.api.like(card._id)
          .then((newCard)=>        {
            card.likes = newCard.likes;
            this.card.like(event)
            this.card.updateLikesCount(event.target.closest('.place-card'), card.likes.length);
          })
      }
      else{
        this.api.dislike(card._id)
        .then((newCard)=>        {
          card.likes = newCard.likes;
          this.card.like(event)
          this.card.updateLikesCount(event.target.closest('.place-card'), card.likes.length);
        })
    }
    } else if (event.target.classList.contains('place-card__delete-icon')) {
      this.card.remove(event);
    } else if (event.target.classList.contains('place-card__image')) {
      this.popup.open(event.target.style.backgroundImage.slice(5, -2));
    }
  }
}