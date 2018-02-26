function createBook(id, bookTitle, bookAuthor, ISBN) {
    let div = $('<div id="book1" style="border: medium none;"></div>')
        .append(`<p class="title">${bookTitle}</p>`)
        .append(`<p class="author">${bookAuthor}</p>`)
        .append(`<p class="isbn">${ISBN}</p>`)
        .append("<button id='selectBtn'>Select</button>")
        .append("<button id='deselectBtn'>Deselect</button>");
    div.appendTo(id)

    $("#selectBtn").on('click', function(){
        div.css('border', '2px solid blue')
    });
    $('#deselectBtn').on('click', function(){
        div.css('border', '')
    })
}
