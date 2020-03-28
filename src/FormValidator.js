export class FormValidator {
  constructor(popupElement, userInfoParam) {
    this.userInfoParam = userInfoParam;
    this.form = popupElement.querySelector('.popup-edit__form');
    this.button = this.form.querySelector('button[type="submit"]');
    this.formName = this.form.querySelector('.popup-edit__input_type_name');
    this.formLink = this.form.querySelector('.popup-edit__input_type_link');
    this.userInfoName = this.userInfoParam.querySelector('.user-info__name');
    this.userInfoJob  = this.userInfoParam.querySelector('.user-info__job');
  }
    
    validateForm(){
      this.reset();
        function validate(event) {
          this.checkInputValidity(event.target, event.target.closest('div').querySelector('.error-message'));
          this.setSubmitButtonState(this.form, this.button);
      }
      this.form.addEventListener('input', validate.bind(this));
  }
  
  checkInputValidity(input, errorMessage) {
    if (input.validity.valueMissing) {
      return errorMessage.textContent = "Это обязательное поле";
    }
    if (input.validity.tooShort || input.validity.tooLong) {
      return errorMessage.textContent = "Должно быть от 2 до 30 символов";
    }
    errorMessage.textContent = '';
  }

  setSubmitButtonState(form, button) {
    button.disabled = !form.checkValidity();
    if (!form.checkValidity()) {
     
      this.button.classList.add('popup-edit__button-edit__disabled');
    }
    if (form.checkValidity()) {
     
      this.button.classList.remove('popup-edit__button-edit__disabled');
    }
  }
  resetEdit() {
   
    this.formName.value = this.userInfoName.textContent;
    this.formLink.value = this.userInfoJob.textContent;
    Array.from(this.form.querySelectorAll('.error-message')).forEach(input => input.textContent = '');
    this.form = document.querySelector('.popup-edit__form');
    this.button = this.form.querySelector('button[type="submit"]');
    this.setSubmitButtonState(this.form, this.button);
  }
  reset() {
    document.querySelector('.user-info__btn-add').addEventListener('click', () => {
      this.resetEdit();
      this.setEventListener = () => (this.form);
    })
  }
}


