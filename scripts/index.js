(function () {

const ERROR_MESSAGES = {
  valueMissing: 'Это обязательное поле',
  tooShort: 'Должно быть от 2 до 30 символов',
  tooLong: 'Должно быть от 2 до 30 символов',
  typeMismatch: 'Здесь должна быть ссылка',
  noError: ''
}

  const root = document.querySelector('.root');
  const placesContainer = root.querySelector('.places-list');
  const popUp = document.querySelector('.popup');
  const userButtonAdd = document.querySelector('.user-info__btn-add');
  const container = document.querySelector('.places-list');
  const popUpEdit = document.querySelector('.popup-edit');
  const userButton = document.querySelector('.user-info__button');
  const formName = document.querySelector('.popup-edit__input_type_name');
  const formLink = document.querySelector('.popup-edit__input_type_link');
  const userInfoName = document.querySelector('.user-info__name');
  const userInfoJob = document.querySelector('.user-info__job');
  const popupImage = document.querySelector('.popup-image');
  const userInfoParam = document.querySelector('.user-info');
  const inputName = document.querySelector('.popup__input_type_name');
  const inputUrl  = document.querySelector('.popup__input_type_link-url');
  const photoUser = document.querySelector('.user-info__photo');
  
  const popupZoom = new PopupZoom(popupImage);

const card = new Card(popupZoom, placesContainer);
 const api = new Api ({
 baseUrl: 'https://praktikum.tk/cohort8',
            headers: {
                   authorization: 'aabc310c-c163-48de-b35e-7be2de3c519d',
                   'Content-Type': 'application/json'
                 }
  });

  const userInfo = new UserInfo(userInfoName, userInfoJob, formName, formLink, api);
 
Promise.all([
  api.getInitialCards(),
  api.getUserInfo(),
])
  .then(([initialCards, user]) => {
    userInfo.setUserInfo(user._id, user.name, user.about);
    userInfo.updateUserInfo();
    cardList.render(initialCards);
  });

const cardList =  new CardList(container, card, api, userInfo);

 api.getInitialCards()
 .then(initialCards => cardList.render(initialCards))

  const popupEditProfile = new PopupEditUser(popUpEdit, userInfo, api);
  userButtonAdd.addEventListener('click', popupEditProfile.open.bind(popupEditProfile));
  
  const popupProfile = new PopupAddCard(popUp, cardList);
  userButton.addEventListener('click', popupProfile.open.bind(popupProfile));

  const validator = new Validator(popUp,ERROR_MESSAGES,inputName,inputUrl);
  validator.validate();

  const formValidator = new FormValidator(popUpEdit,userInfoParam);
  formValidator.validateForm();


  




})();












 



