function scoreToHTML(string) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g , "&quot;")
            .replace(/'/g, "&#39;");
    };

    let competitors = JSON.parse(string);

    let html = "<table>\n";
    html += `\t<tr><th>name</th><th>score</th></tr>\n`;

    for (let competitor of competitors) {
        html += `\t<tr><td>${competitor.name.htmlEscape()}</td><td>${competitor.score}</td></tr>\n`;
    }

    html += "</table>";

    return html;
}