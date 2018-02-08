function sortArray(arr) {
    return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .sort((a, b) => a.length - b.length)
        .join("\n");
}