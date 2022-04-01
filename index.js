var wrapper = document.getElementByCLassName("title")[0];

wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");

var spans = wrapper.getElementsByTagName("span");

for (var i = 0; i < spans.length; i++) {
    spans[i].style.animationDelay = i * 200 + "ms";
}