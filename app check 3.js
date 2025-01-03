// why app check 3.js
// .banner er
// background img changing functionlity


// what we have here are-
//  .banner er background img chaginging
const courses=[
    {
        heading:'Studio batch',
        details: 'perfect enviorment for you Nisi Ea Ex Architecto Ullam SintLorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. ',
        img:`url(photos/studio.jpg)`,

    },
    {
        heading:'Our Teacher Training Program',
        details: 'Nisi Ea Ex Architecto Ullam SintLorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. ',
        img:`url(photos/studio.webp)`, /*change this*/

    },
    
    {
        heading:'Online classes ',
        details: 'same benefits at more flexibility you Nisi Ea Ex Architecto Ullam SintLorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.',
        img:`url(photos/online.jpg)`,

    },
    
    
];
// first thing is, according to the number of courses we will have slider dots

const sliderDotsContainer=document.querySelector('.slider-dots-container');
sliderDotsContainer.innerHTML=``;
for(let i=0;i<courses.length;i++){
    sliderDotsContainer.innerHTML=  sliderDotsContainer.innerHTML+`<span class="slider-dot"></span>`;
}
// second thing is-
// banner-info  should be from courses array and first slider-dot should also be selected
const bannerInfo=document.querySelector('.banner-info');
let sliderDots=document.querySelectorAll('.slider-dot');
sliderDots=[...sliderDots];
bannerInfo.innerHTML=`<h1>${courses[0].heading}</h1>
                        <p>${courses[0].details}</p>`;
sliderDots[0].classList.add('slider-dot-selected');
// ********app check 3.js part 1
// start
bannerInfo.parentElement.style.backgroundImage=courses[0].img;
// end
// third thing is- arrow btns, upon clicking them .banner-info will chnage, also diff slider dots will be selected  
const leftArrowBtn=document.querySelector('.arrow.left-btn');
const rightArrowBtn=document.querySelector('.arrow.right-btn');
let i=0;
rightArrowBtn.addEventListener('click',arrowBtnClicked);
leftArrowBtn.addEventListener('click',arrowBtnClicked);

function arrowBtnClicked(e){
    /*
    if(e.currentTarget==rightArrowBtn){
        i++;
        if(i==courses.length){
            i=0;
        }
        bannerInfo.innerHTML=`<h1>${courses[i].heading}</h1>
                        <p>${courses[i].details}</p>`;
    }
    else{
        
        i--;
        if(i==-1){
            i=courses.length-1;
        }
        bannerInfo.innerHTML=`<h1>${courses[i].heading}</h1>
                        <p>${courses[i].details}</p>`;
        
    }
    */
    if(e.currentTarget==rightArrowBtn){
        i++;//main
        if(i==courses.length){
            i=0;
        }
    }
    else{
        i--;//main
        if(i==-1){
            i=courses.length-1;
        }

    }
    bannerInfo.innerHTML=`<h1>${courses[i].heading}</h1>
                        <p>${courses[i].details}</p>`;
    sliderDots.forEach(function(dot){
        dot.classList.remove('slider-dot-selected');
    });
    sliderDots[i].classList.add('slider-dot-selected');
    // app check 3.js er part 2
    // start
    bannerInfo.parentElement.style.backgroundImage=`${courses[i].img}`;
    // end
}
// fourth-we want slider dots btns functional

sliderDots.forEach(function(dot){
    dot.addEventListener('click',function(){
        sliderDots.forEach(function(dot){
            dot.classList.remove('slider-dot-selected');
        });
        dot.classList.add('slider-dot-selected');

        bannerInfo.innerHTML=`<h1>${courses[sliderDots.indexOf(dot)].heading}</h1>
                        <p>${courses[sliderDots.indexOf(dot)].details}</p>`;
        // app check 3.js er part3
        // start
        bannerInfo.parentElement.style.backgroundImage=courses[sliderDots.indexOf(dot)].img;
        // end

        // app check 2.js
        // start
        i=sliderDots.indexOf(dot);
       // end
        
    });
});

