//  Write a function that generates an email given a username and a domain
// albert@eldohub.co.ke , kipchirchir563@gmail.com, youko@yahoo.com


function generateEmail(username,domain){
    const email = username + "@" + domain; // string concatenation - joining two or more strings together
    return email;
}

console.log(generateEmail("kipchirchir", "eldohub.co.ke"));
console.log(generateEmail("kipchirchir563", "gmail.com"));
console.log(generateEmail("youko", "yahoo.com"));