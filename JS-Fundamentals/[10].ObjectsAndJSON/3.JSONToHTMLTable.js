function JSONToHTMLTable(string) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g , "&quot;")
            .replace(/'/g, "&#39;");
    };

    let input = JSON.parse(string);

    let properties = Object.keys(input[0]);

    let html = "<table>\n";

    html += "\t<tr>";
    for (let property of properties) {
        html += `<th>${property.toString().htmlEscape()}</th>`;
    }
    html += "</tr>\n";

    for (let element of input) {
        html += "\t<tr>";

        for (let value in element) {
            let test = Number(element[value]);

            if(isNaN(test)) {
                html += `<td>${element[value].htmlEscape()}</td>`;
            } else {
                html += `<td>${test}</td>`;
            }
        }

        html += "</tr>\n";
    }

    html += "</table>";

    return html;
}