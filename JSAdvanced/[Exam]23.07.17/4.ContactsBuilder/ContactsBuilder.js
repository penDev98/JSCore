class Contact{
    constructor(name, surname, phone, email){
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.email = email;

        this._article = this._createArticle();
        this.online = false;
    }
    get online(){
        return this._online;
    }
    set online(input){
        this._online = input;
        this._update();
    }

    _update(){
        if (this.online) {
            this._article.find('.title').addClass('online');
        } else {
            this._article.find('.title').removeClass('online');
        }
    }

    _createArticle(){
        let article = $("<article>");
        let divTitle = $(`<div class="title">${this.name} ${this.surname}</div>`);
        let info = $('<div class="info" style="display:none;">');
        info.hide();
        let phoneSpan = $(`<span>&phone; ${this.phone}</span>`);
        let emailSpan = $(`<span>&#9993; ${this.email}</span>`);
        let button = ($(`<button>&#8505;</button>`).click(() => info.toggle()));
        button.appendTo(divTitle);
        info.append(phoneSpan).append(emailSpan);
        article.append(divTitle);
            article.append(info);


        return article;
    }
    render(id){
        $(`#${id}`).append(this._article);
    }
}



let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
