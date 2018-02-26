 function extractText() {
        let result = [];
        $("#items li").each((i, e) => result.push(e.textContent));
        $("#result").text(result.join(', '));
}
