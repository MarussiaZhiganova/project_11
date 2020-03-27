
class Popup {
  constructor(popupElement) {
    this.popupElement = popupElement;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.popupElement.querySelector('.popup__close')
                     .addEventListener('click', this.close);
  }
  open() {
    this.popupElement.classList.toggle('popup_is-opened');
  }

  close() {
    this.popupElement.classList.remove('popup_is-opened');
  }
}

class PopUpWithSubmit extends Popup{
  constructor (popupElement){
    super(popupElement);
    this.form = popupElement.querySelector('form');
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(){
    
    this.close();
  }
}

class PopupEditUser extends PopUpWithSubmit {
  constructor(popupElement, userInfo, api) {
    super(popupElement);
    this.userInfo = userInfo;
    this.api = api;
  }

  onSubmit(){
    event.preventDefault();
    const name = this.form.querySelector('.popup-edit__input_type_name').value;
    const job  = this.form.querySelector('.popup-edit__input_type_link').value;
    this.api.sendUserInfo(name,job).then(({id, name,job})=>{
      this.userInfo.setUserInfo(id, name, job);
      this.userInfo.updateUserInfo();
      this.close();
    })
    .catch((err) => {
      alert(err)
    });
  }
}

class PopupPl {
  constructor(popupElement) {
    this.popupElement = popupElement;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.popupElement
      .querySelector('.popup__close')
      .addEventListener('click', this.close);

  }
  open() {
    this.popupElement.classList.toggle('popup_is-opened');
  }

  close() {
    this.popupElement.classList.remove('popup_is-opened');
  }
}


class PopupPlWithForm extends PopUpWithSubmit {
  constructor(popupElement, cardList) {
    super(popupElement);
    this.cardList = cardList;
  }

    onSubmit(){
      this.close();
    }
}

class PopupAddCard extends PopUpWithSubmit {
  constructor(popupElement, cardList) {
    super(popupElement);
    this.cardList = cardList;
  }

  onSubmit(){
    event.preventDefault();
    this.form = this.popupElement.querySelector('.popup__form'); 
    this.cardList.addCard(this.form.querySelector('.popup__input_type_name').value, this.form.querySelector('.popup__input_type_link-url').value);
    this.form.reset();
    this.close();
  }
}

class PopupZoom extends Popup{
  constructor(popupElement){
    super(popupElement);
    this.image = popupElement.querySelector('.popup-image__content');
  }

  open(backgroundImage){
    super.open();
    this.image.style.backgroundImage = backgroundImage;
  }
}
