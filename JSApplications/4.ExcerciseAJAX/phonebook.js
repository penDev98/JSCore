function attachEvents() {
    $('#btnLoad').on('click', loadData);
    $('#btnCreate').on('click', addData);
}
var url = 'https://softuni-6b123.firebaseio.com/';
function loadData(){
    var list = $('#phonebook');
    $.ajax({
        url: url + '.json',
        cache: false,
        success: addItems,
        error: handleError
    });

    function addItems(response){
        list.empty()
        let result = response;
        for (let contact in result) {
            let li = $(`<li id='${contact}'>`).text(result[contact]['name'] + ': ' + result[contact]['phone']);
            let Delete = $(`<button id='${contact}'>[Delete]</button>`).on('click', deleteContact);
            li.append(Delete);
            li.appendTo(list);
        }
    }

    function deleteContact(){
        $.ajax({
            method : 'DELETE',
            url: url + `${this.id}.json`,
            cache: false,
            error: handleError
        });
        $(`#${this.id}`).remove();
    }
}
function addData(){
    let name = $('#person').val();
    let phone = $('#phone').val();

    let postData = JSON.stringify({name, phone});

    let id = 0;
    $.ajax({
        method : 'POST',
        url: url + '.json',
        data: postData,
        cache: false,
        error: handleError
    });
    $('#person').val('');
    $('#phone').val('');


    var myVar;

    function myFunction() {
        myVar = setTimeout(loadData, 1500);
    }

    myFunction()

}

function handleError(err){
    console.log(err)
}