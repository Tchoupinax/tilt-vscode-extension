// Dirty Script to retrieve everything
// Go on https://docs.tilt.dev/api.html and copy/paste the script
let keywords = '';
document.querySelectorAll("#functions ~ ul").item(0).querySelectorAll("li").forEach(e => {
    const keyword = e.querySelector("a").innerHTML;

    if (keywords.length !== 0) {
        keywords = keywords + "|" + keyword
    } else {
        keywords = keyword
    }
})
console.log(keywords);
