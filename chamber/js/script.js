const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
const today = {month: 'long', day: 'numeric', year: 'numeric'};

document.getElementById('lastMod').textContent = new Date().toLocaleDateString('en-UK', options);

document.getElementById("currentDate").textContent = new Date().toLocaleDateString('en-us', options);

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classlist.toggle("responsive");
}

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// banner toggle function

    const bannerday = new Date();
    const day = bannerday.getDay();

    let banner = document.querySelector(".banner");
    if (day == '1') {
        banner.setAttribute("display", "block");
    }
    else if (day == '2') {
        banner.setAttribute("display", "block");
    }
    else {
        banner.setAttribute("display", "none");
    }


const images = document.querySelectorAll("[data-src]");

function preLoadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src){
        return;
    }
    
    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting) {
            return;
        }
        else {
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})