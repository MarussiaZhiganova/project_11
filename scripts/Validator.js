class Validator {
    constructor(popupElement,error,inputName,inputUrl,ERROR_MESSAGES) {
      this.ERROR_MESSAGES = ERROR_MESSAGES;
      this.error = error;
      this.inputName = inputName;
      this.inputUrl = inputUrl;
      this.popupElement = popupElement;
      this.validate = this.validate.bind(this);
      this.formAdd = popupElement.querySelector('.popup__form');
      this.buttonAdd = this.formAdd.querySelector('.popup__button');
      this.formAdd.addEventListener('input', this.validate);
    }
      
    validate() {
        this.reset();
        function validate(event) {
          this.checkInputValidity(event.target, event.target.closest('div').querySelector('.error-message'));
          this.setSubmitButtonState(this.formAdd, this.buttonAdd);
      }
      this.formAdd.addEventListener('input', validate.bind(this));
      }
    
    checkInputValidity(input, error) {

      if (input.validity.valueMissing) {
        return error.textContent = this.error.valueMissing;
      }
      if (input.validity.tooShort) {
        return error.textContent = this.error.tooShort;
      }
      if (input.validity.tooLong) {
        return error.textContent = this.error.tooLong;
      }
      if (input.validity.typeMismatch) {
        return error.textContent = this.error.typeMismatch;
      }
      error.textContent = this.error.noError;
    }
    setSubmitButtonState(formAdd, buttonAdd) {
      buttonAdd.disabled = !formAdd.checkValidity();
      if (!formAdd.checkValidity()) {
        return buttonAdd.classList.add('popup__button_disabled');
      }
      return buttonAdd.classList.remove('popup__button_disabled');
    }
    resetAdd() {
      Array.from(this.formAdd.querySelectorAll('.error-message')).forEach(input => input.textContent = '');
      this.inputName.value = '';
      this.inputUrl.value  = '';
      this.formAdd         = document.querySelector('.popup__form');
      this.buttonAdd       = this.formAdd.querySelector('button[type="submit"]');
      this.setSubmitButtonState(this.formAdd, this.buttonAdd);
    }
    reset() {
      document.querySelector('.user-info__button').addEventListener('click', () => {
        this.resetAdd();
        this.setEventListener = () => (this.formAdd);
      })
    }
  }