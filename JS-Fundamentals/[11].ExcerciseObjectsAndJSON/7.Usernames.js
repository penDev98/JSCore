function usernames(input) {
    let usernames = new Set();

    for (let username of input) {
        usernames.add(username);
    }

    usernames = [...usernames];
    sortArray(usernames);

    console.log(usernames.join("\n"));

    function sortArray(arr) {
        arr.sort(function (a, b) {
            return a.length !== b.length ? a.length - b.length : a.localeCompare(b);
        });
    }
}