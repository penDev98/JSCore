class Dialog{
    constructor(text, callback){
        this.text = text;
        this.callback = callback;
        this.dialog = this.createDialog();
    }
    createDialog(){
        let overlay = $('<div class="overlay"></div>>');
        let dialog = $('<div class="dialog"></div>>');
        let paragraph = $(`<p>${this.text}</p>`);
        let OK = $('<button>OK</button>').click(() => {this.dialog.remove(); this.callback();});
        let cancel = $('<button>Cancel</button>').click(() => {this.dialog.remove();});

        dialog.append(paragraph);
        overlay.append(dialog);
        return overlay;

    }

    addInput(label, name, type){

    }
    render(){
        $('document')
    }

}


<div class="overlay">
    <div class="dialog">
        <p>Dialog, containing message text and input field.</p>
        <label>Name</label>
        <input name="name" type="text">
            <button>OK</button>
            <button>Cancel</button>
    </div>
</div>
