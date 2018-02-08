function JSONsTable(arr) {
    let html = "<table>\n";

    for (let string of arr) {
        let employee = JSON.parse(string);

        html += "\t<tr>\n";
        html += `\t\t<td>${employee.name}</td>\n`;
        html += `\t\t<td>${employee.position}</td>\n`;
        html += `\t\t<td>${employee.salary}</td>\n`;
        html += "\t\t<tr>\n";
    }

    html += "</table>";

    return html;
}