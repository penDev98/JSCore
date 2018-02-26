function search() {
    let input = $("#searchText").val();
    let matched = $(`ul#towns li:contains(${input})`);
    matched.css("font-weight", "bold");
    $(`ul#towns li:not(:contains(${input}))`).css("font-weight", "");
    $("#result").text(`${matched.length} matches found.`);
}
