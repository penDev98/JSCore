function extractUsernames(inputEmails) {
    let result = [];
    for (let email of inputEmails){
        let[names, domain] = email.split('@');
        let username = names + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(s => username += s[0]);
        result.push(username);
    }
    console.log(result.join(', '));
}
