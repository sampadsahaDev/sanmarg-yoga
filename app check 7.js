// #reviews section er slider dots
const reviewers=[
    {
        name:'Nancy',
        title:'ambient atmosphere and surrounding',
        comment:'amet consectetur adipisicing elit. Voluptatum, eligendi nobis quisquam deserunt neque hic harum exercitationem ut voluptas cumque!amet consectetur adipisicing elit. Voluptatum, eligendi nobis quisquam deserunt neque hic harum exercitationem ut voluptas cumque!',
        address:'Bengaluru, Karnataka',
    },
    {
        name:'Disha Kopalam',
        title:'great dedication and knowledge',
        comment:' Voluptatum, eligendi amet consectetur adipisicing elit. nobis quisquam deserunt neque hic harum exercitationem ut voluptas cumque!amet consectetur adipisicing elit. Voluptatum, eligendi nobis quisquam deserunt neque hic harum exercitationem ut voluptas cumque!',
        address:'Hosur, Karnataka',
    },
    {
        name:'Marhul Dwivedi',
        title:'not costly',
        comment:' Voluptatum, eligendi amet consectetur adipisicing elit. nobis quisquam deserunt neque hic harum exercitationem ut voluptas cumque!amet consectetur adipisicing elit. Voluptatum, eligendi nobis quisquam deserunt neque hic harum exercitationem ut voluptas cumque!',
        address:'Mysuru, Karnataka',
    },
    {
        name:'Shalini Awasthi',
        title:'nice experciene',
        comment:' adipisicing elit. Voluptatum, eligendi amet consectetur nobis quisquam deserunt neque hic harum exercitationem ut voluptas cumque!amet consectetur adipisicing elit. Voluptatum, eligendi nobis quisquam deserunt neque hic harum exercitationem ut voluptas cumque!',
        address:'Mysuru, Karnataka',
    }
];
const reviewsContainer=document.querySelector('.reviews-container');
reviewsContainer.innerHTML=``;


// creating multiple review divs
for(let i=0;i<reviewers.length;i++){
    reviewsContainer.innerHTML=reviewsContainer.innerHTML+`<div class="review"> 
                            <h2>${reviewers[i].title}</h2>
                            <p>${reviewers[i].comment}</p>
                            <div class="reviewer">
                              <h4>${reviewers[i].name}</h4>
                              <p>${reviewers[i].address}</p>
                           </div>
                        </div>`;
}
// stacking them in styles check.css
// first .review div will get the largest z-index
const reviewDivs=document.querySelectorAll('.review');
let j=reviewDivs.length-1;

reviewDivs.forEach(function(reviewDiv){
    reviewDiv.style.zIndex=j;
    j--;
});

// annimation part
// lets reduce the opacity for all the reviewDiv to almost 0
reviewDivs.forEach(function(reviewDiv){
    reviewDiv.style.opacity=0.1;
});
// except the 1st one
reviewDivs[0].style.opacity=1;
// end

let k=0;
function translateReviews(){
    if(k==reviewDivs.length){
        reviewDivs.forEach(function(reviewDiv){
            reviewDiv.classList.remove('review-translated');
            reviewDiv.style.opacity=0.1;

        });
        reviewDivs[0].style.opacity=1;
        k=0;
    }
    else{
        reviewDivs[k].classList.add('review-translated');
        // reviewDivs[k+1].style.opacity=1;
        if(k+1<reviewDivs.length){
            reviewDivs[k+1].style.opacity=1;
        }
        k++;
    }
}

// setInterval(translateReviews,2000);
// const setintervalForReviewsId=setInterval(translateReviews,2000);
const intervalIdReviewsSection=setInterval(translateReviews,2000);//we will need the id of the interval, to stop the interval in #reviews's slider dots functionality - app check 7


//#reviews section er slider dots functionlity- first thing-we will have no. of slider dots equal to no. of reviewers/reviews
const sliderDotsContainerOfreviewsSection=document.querySelector('#reviews .slider-dots-container');
sliderDotsContainerOfreviewsSection.innerHTML=``;
for(let i=0;i<reviewers.length;i++){
    sliderDotsContainerOfreviewsSection.innerHTML=sliderDotsContainerOfreviewsSection.innerHTML+`<span class="slider-dot"></span>`;
}


//#reviews section er slider dots functionlity- second thing-clicking on dot and corresponding review will be displayed
let sliderDotsOfreviewsSection=document.querySelectorAll('#reviews .slider-dot');
sliderDotsOfreviewsSection=[...sliderDotsOfreviewsSection];
sliderDotsOfreviewsSection.forEach(function(dot){
    dot.addEventListener('click',function(){
        clearInterval(intervalIdReviewsSection);

        reviewsContainer.innerHTML=`<div class="review"> 
                            <h2>${reviewers[sliderDotsOfreviewsSection.indexOf(dot)].title}</h2>
                            <p>${reviewers[sliderDotsOfreviewsSection.indexOf(dot)].comment}</p>
                            <div class="reviewer">
                              <h4>${reviewers[sliderDotsOfreviewsSection.indexOf(dot)].name}</h4>
                              <p>${reviewers[sliderDotsOfreviewsSection.indexOf(dot)].address}</p>
                           </div>
                        </div>`;


        sliderDotsOfreviewsSection.forEach(function(dot){
            dot.classList.remove('slider-dot-selected');
        });
        dot.classList.add('slider-dot-selected');
    });


    
});

//#reviews section er slider dots functionlity- third thing-highlighting the slider dot, during the annimation(a tough thing)


// part -2
//start
// first one should be selected at the very begining, (eta pore bujhba after nicher ti bujhe)
sliderDotsOfreviewsSection[0].classList.add('slider-dot-selected');//last part, of third thing-(highlighting the slider dot)
// r sliderDotsOfreviewsSection[0].classList.add('slider-dot-selected'); eta commnent out kore nebe nicher goli bujhar age
//end

// part-1
// start
// 2000ms complete hole first .review ta translated hoye jabe, 
// amader interval tar o first 2000ms complete hobe and function for highlightinig the slider dot will be called (nicher ta bujhe nile eta bujhte parbe, just ekta reading dao)
// since 1st .review ta already translated hoye jabe so we should highlight the 2nd sliderDot(see khata)


let dotNum=1;//1
function highlightTheSliderDot(){
    if(dotNum!=reviewers.length){//now we needed something to happen -jokhn dotNum, reviewer er equal hoia jaibo
        // what we want '....' hote hobe, so no highlighning, so the highlightTheSliderDot() function will be called and it will do nothing sudhu dotNum er value change korbe
        // -->so oi statements ti re else e put koira dilm r ekhane if//5
        sliderDotsOfreviewsSection.forEach(function(sliderDot){
            sliderDot.classList.remove('slider-dot-selected');
        });//4
        sliderDotsOfreviewsSection[dotNum].classList.add('slider-dot-selected');//2
        dotNum++;//3
    }
    else{//6
        sliderDotsOfreviewsSection.forEach(function(sliderDot){
            sliderDot.classList.remove('slider-dot-selected');
        });//8 this will be necessary you would know
        dotNum=0;//7,
    }
}
setInterval(highlightTheSliderDot,2000);
// end
