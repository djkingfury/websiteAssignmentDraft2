var images = document.getElementById("carouselImages");
var caption = document.getElementById("carouselCaption");
var previous = document.getElementById("carouselPrevious");
var next = document.getElementById("carouselNext");

fetch("assets/gallary.json").then(function(res) {
    res.json().then(function(json) {
        json.forEach(function(el, i) {
            var image = document.createElement('img');
            image.setAttribute("src", el.url);
            image.setAttribute("alt", el.caption);
            image.setAttribute("title", el.caption);
            images.appendChild(image);
        })
        setupCarousel(json);
    })
})

function setupCarousel(json) {
    var imageCount = images.childElementCount;

    var currentImage = 1;
    var imageWidth = 500;


    previous.addEventListener('click', function() {
        if (currentImage != 1) {
            --currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + "px";
        }
        caption.innerText = json[currentImage - 1].caption;
    });

    next.addEventListener('click', function() {
        if (currentImage != imageCount) {
            ++currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + "px";
        }
        caption.innerText = json[currentImage - 1].caption;
    });
    caption.innerText = json[currentImage - 1].caption;
}