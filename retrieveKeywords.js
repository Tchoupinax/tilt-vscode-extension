// Dirty Script to retrieve everything
var keywords = '';
document.querySelectorAll("#functions ~ ul").item(0).querySelectorAll("li").forEach(e => {
    var keyword = e.querySelector("a").innerHTML;

    if (keywords.length !== 0) {
        keywords = keywords + "|" + keyword
    } else {
        keywords = keyword
    }
})
console.log(keywords);