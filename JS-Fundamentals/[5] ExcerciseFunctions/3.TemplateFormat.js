function template(input) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<quiz>");
    for(let i=0; i < input.length; i+=2){
        var question = input[i];
        var answer = input[i+1];
        console.log("  <question>" +
            "    \n"+"    "+question+"" +
            "\n  </question>");
        console.log("  <answer>" +
            "    \n"+"    "+answer+"" +
            "\n  </answer>");
    }
    console.log("</quiz>");
}