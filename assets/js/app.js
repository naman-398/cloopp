setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
}, 4000);

/////////back-to-top/////////
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back-to-top");
  
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };
  
    button.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
  });

function toggleNav() {
    const body = document.body;
    const navList = document.getElementById('nav-list');
    const burgerMenu = document.getElementById('burger-menu');

    body.classList.toggle('overflow_hidden');
    navList.classList.toggle('show');


    burgerMenu.classList.toggle('cross');
}