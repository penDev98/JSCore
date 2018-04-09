function getArticleGenerator(value) {
    let content = $('#content');
    let count = 0;
        return function () {
            if(count < 5) {
                content.append(`<article>${value.shift()}</article>`);
                count++
            }
        }
    }
