function findVariables(string) {
    return string.match(/\b_{1}[a-zA-Z0-9]+\b/g).join(",").split("_").join("");
}