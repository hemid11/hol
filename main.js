
function openVideo() {
    window.open("https://www.youtube.com/watch?v=_aSS66X30Ag", "_blank");
}

// SSSSS
let currentIndex = 0;
function autoChangeBlogPosts() {
    createBlogPosts();

    currentIndex++;
    if (currentIndex >= blogPosts.length) {
        currentIndex = 0;
    }
}

createBlogPosts();

setInterval(autoChangeBlogPosts, 1000);



// ourservices button
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const servicesContainer = document.querySelector('.services-container');

prevBtn.addEventListener( () => {
    servicesContainer.scrollBy(-300, 0);
});

nextBtn.addEventListener( () => {
    servicesContainer.scrollBy(300, 0);
});

