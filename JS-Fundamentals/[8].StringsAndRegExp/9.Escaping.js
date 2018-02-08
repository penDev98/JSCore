function escape(input) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
    console.log("<ul>");
    for(let i =0; i<input.length; i++){
        console.log("<li>" + input[i].htmlEscape() + "</li>");
    }
    console.log("</ul>");
}