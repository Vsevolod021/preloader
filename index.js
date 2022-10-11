const preloader = document.querySelector('.preloader');


window.onload = function() {
    preloader.classList.add('hide-preloader');
    setTimeout(function () {
        preloader.classList.add('hidden');
    }, 1000)
}