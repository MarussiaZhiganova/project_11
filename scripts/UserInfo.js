class UserInfo {
    constructor(userInfoName, userInfoJob, formName, formLink) {
        this.name = userInfoName;
        this.job  = userInfoJob;
        this.formName = formName;
        this.formLink = formLink;
    }

    setUserInfo(id, name, job) {
        this.id = id;
        this.nameValue = name;
        this.jobValue = job;
        this.formName.value = this.name.textContent;
        this.formLink.value = this.job.textContent;
    }

    updateUserInfo() {
        this.name.textContent = this.nameValue;
        this.job.textContent = this.jobValue;
    }
}
