const displayedImage = document.querySelector('.displayedImage');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images= ["0cover.png","01grain.jpg","redsteam.jpg","roses.jpg","sneaker.jpg"];
/* Declaring the alternative text for each image file */
const alt= {
    '0cover.png' : "photoshop collage of a girl",
    '01grain.jpg' : "grain in sun",
    'redsteam.jpg' : "steam in yellowstone", 
    'roses.jpg' : "dead roses", 
    'sneaker.jpg' : "sneaker on back of an old truck", 
};
/* Looping through images */
function loopingImg() {
    for (let i = 0; i < images.length; i++ ) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', 'images/' + images[i]);
        newImage.setAttribute('alt', alt[images[i]]);
        thumbBar.appendChild(newImage);

        newImage.addEventListener('click', e=>{
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.alt;
        });
    }

}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
 
});


window.addEventListener ('load', (event) => {
    loopingImg();
});
