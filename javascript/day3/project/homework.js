var item = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < item.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var sub = this.nextElementSibling;
        if (sub - item.style.maxHeight) {
            sub.style.maxHeight = null;
        } else {
            sub.style.maxHeight = sub.scrollHeight + "px";
        }
    });
}

remove
open