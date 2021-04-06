var tabs = [];

function createLinks() {
    tabs = document.getElementsByClassName("header-grid")[0].children;
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function() {
            let open = tabs[i].getAttribute("open");
            let tabContent = document.getElementById(open);
            if(tabContent != null) {
                document.getElementsByClassName("header-grid")[0].getElementsByClassName("selected")[0].classList.remove("selected");
                document.getElementsByClassName("active")[0].classList.remove("active");
                tabContent.classList.add("active");
                tabs[i].classList.add("selected");
            }
        }
    }
}