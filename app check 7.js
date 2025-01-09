// #reviews section er slider dots
const reviewers=[
    {
        name:'Nancy',
        title:'ambient atmosphere and surrounding',
        comment:"The environment is serene, and the instructors are incredibly knowledgeable. I’ve seen remarkable improvements in my flexibility and stress levels. Highly recommended for anyone looking to start their yoga journey!",
        address:'Bengaluru, Karnataka',
    },
    {
        name:'Disha Kopalam',
        title:'great dedication and knowledge',
        comment:"I feel so fortunate to have found this studio. The environment is serene, and the instructors are incredibly knowledgeable. I’ve seen remarkable improvements in my flexibility and stress levels!",
        address:'Hosur, Karnataka',
    },
    {
        name:'Marhul Dwivedi',
        title:'not costly',
        comment:'I was new to yoga, but the instructors at Sanmarg Yoga made me feel comfortable and supported. Their expertise and encouragement have helped me transform my physical and mental health.',
        address:'Mysuru, Karnataka',
    },
    {
        name:'Shalini Awasthi',
        title:'nice experciene',
        comment:'Joining Sanmarg Yoga was one of the best decisions I’ve made. The instructors provide personalized attention and motivate you to achieve your goals. I feel more energetic and confident every day.',
        address:'Mysuru, Karnataka',
    }
];
const reviewsContainer=document.querySelector('.reviews-container');
reviewsContainer.innerHTML=``;

/*
reviewsContainer.innerHTML=reviewsContainer.innerHTML+`<div class="review"> 
                            <h2>${reviewers[0].title}</h2>
                            <p>${reviewers[0].comment}</p>
                            <div class="reviewer">
                              <h4>${reviewers[0].name}</h4>
                              <p>${reviewers[0].address}</p>
                           </div>
                        </div>`;
*/
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

// eta first reviewer sheta last e chole geche solve this
// first .review div will get the largest z-index
const reviewDivs=document.querySelectorAll('.review');
let j=reviewDivs.length-1;

reviewDivs.forEach(function(reviewDiv){
    reviewDiv.style.zIndex=j;
    j--;
});

// annimation part

// app check 6 "to make nicher review ta almost invisible" er part 1
// start
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
            // app check 6 "to make nicher review ta almost invisible" part 3A
            // start
            reviewDiv.style.opacity=0.1;
            // end
        });
        // app check 6- "to make nicher review ta almost invisible" part 3B
        // start
        reviewDivs[0].style.opacity=1;
        // end

        k=0;
    }
    else{
        reviewDivs[k].classList.add('review-translated');
        // app check 6-"to make nicher review ta almost invisible"  er part 2
        // start
        // reviewDivs[k+1].style.opacity=1;
        if(k+1<reviewDivs.length){
            reviewDivs[k+1].style.opacity=1;
        }
        // end
        k++;
    }
}

// setInterval(translateReviews,2000);
// const setintervalForReviewsId=setInterval(translateReviews,2000);
const intervalIdReviewsSection=setInterval(translateReviews,2000);//we will need the id of the interval, to stop the interval in #reviews's slider dots functionality - app check 7

// app check 7 starts from here, but here ^ ektu ache
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

// *****old way-dont need to see

//first one should be selected at the very begining, then 2000ms complete hole first .review ta translated hoye jabe, tokhn amader interval tar o first 2000ms complete hobe and function for highlightinig the slider dot will be called 
//and second dot ta highlighted hobe 
//then the interval should start
/*
sliderDotsOfreviewsSection[0].classList.add('slider-dot-selected');
setInterval(sliderDotHighlighter,2000);//note 2:this does not give an error bcz it is asynchorous 2nd complete hoye ccall howar agei let dotNum=1; run hoye geche
// console.log(dotNum);//note 1:this gives error saying dotNum isnt initilized ofcourse let variable cant be used before delcaration
let dotNum=1;

function sliderDotHighlighter(){
    if(dotNum==sliderDotsOfreviewsSection.length+1){//third thing
        dotNum=0;
    }//note- this code will make one cycle equals 5 calls not 4

    sliderDotsOfreviewsSection.forEach(function(dot){
        dot.classList.remove('slider-dot-selected');        
    });

    if(dotNum!=sliderDotsOfreviewsSection.length){// second thing
        // first thing
        sliderDotsOfreviewsSection[dotNum].classList.add('slider-dot-selected');
    }    
    dotNum++;
}
*/


// *****new way

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
