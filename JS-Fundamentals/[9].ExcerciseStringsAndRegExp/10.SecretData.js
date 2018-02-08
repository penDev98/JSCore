function secretData(input) {
    let nameRegex = /(\*[A-Z][A-Za-z]*)[\t ]/g;
    let phoneRegex = /(\+[0-9\-]{10})[\t ]/g;
    let idRegex = /(![A-Za-z0-9]+)[\t ]/g;
    let baseRegex = /(_[A-Za-z0-9]+)[\t ]/g;

    for (let line of input) {
        line += ' ';

        let nameRep = line.match(nameRegex);
        let phoneRep = line.match(phoneRegex);
        let idRep = line.match(idRegex);
        let baseRep = line.match(baseRegex);

        if (nameRep) {
            line = replace(line, nameRep);
        }

        if (phoneRep) {
            line = replace(line, phoneRep);
        }

        if (idRep) {
            line = replace(line, idRep);
        }

        if (baseRep) {
            line = replace(line, baseRep);
        }

        console.log(line.trim());
    }

    function replace(text, matches) {
        for (let i = 0; i < matches.length; i++) {
            let match = matches[i];
            let rep = '|'.repeat(match.length - 1) + ' ';
            text = text.replace(match, rep);
        }

        return text;
    }
}