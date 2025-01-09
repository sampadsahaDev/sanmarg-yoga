// why app check 4B.js
// #courses er functionlity should only work in mobile screen/small screen

// what we have here are-


// for courses highlighting
/*
please note that these js codes for #courses section
are written/ based on the fact that #courses section is manually
written not added dynamicaly by js, thus we know the number of course divs

if in future we create course divs dynamically, we need
to do a few changes in the code below 
for e.g
let dist0=coursesDivs[0].offsetTop;
let dist1=coursesDivs[0].offsetTop+coursesDivs[0].getBoundingClientRect().height;
let dist2=coursesDivs[1].offset...........
that should be changed, because manually hole toh amra jani koita course thakbe
dynamically course add korle we dont know
so codes should be in a manner, joto ta e course div hok
ekta codes dia e kah cholbe
*/

let coursesDivs=document.querySelectorAll('.course');;
coursesDivs=[...coursesDivs];

let dist0=coursesDivs[0].offsetTop;
let dist1=coursesDivs[0].offsetTop+coursesDivs[0].getBoundingClientRect().height;
let dist2=coursesDivs[1].offsetTop;
let dist3=coursesDivs[1].offsetTop+coursesDivs[1].getBoundingClientRect().height;
let dist4=coursesDivs[2].offsetTop;
let dist5=coursesDivs[2].offsetTop+coursesDivs[2].getBoundingClientRect().height;

/*
addEventListener('scroll',function(){
    if(window.scrollY>=dist0&&window.scrollY<dist1){
        coursesDivs[0].classList.add('course-highlighted');
    }
    else if(window.scrollY>=dist2&&window.scrollY<dist3){
        coursesDivs[1].classList.add('course-highlighted');
        coursesDivs[0].classList.remove('course-highlighted');
    }
    else if(window.scrollY>=dist4 && window.scrollY<dist5){
        coursesDivs[2].classList.add('course-highlighted');
        coursesDivs[1].classList.remove('course-highlighted');
    }
    else{
        // now why do we need i/
        
        // for e.g when you scroll to the first course then it highlighed
        // but instead of going down to second scroll you moved up, so we never went down to the 
        // second course, so the highligh class on the first course is not removed

        // so to only add highlight class when we scroll to that course, else will help to acheive that
        coursesDivs[0].classList.remove('course-highlighted');
        coursesDivs[1].classList.remove('course-highlighted');
        coursesDivs[2].classList.remove('course-highlighted');
    }
});
*/

/*
addEventListener('scroll',function(){
    if(window.scrollY+450>=dist0&&window.scrollY<dist1-450){
        coursesDivs[0].classList.add('course-highlighted');
    }
    else if(window.scrollY+450>=dist2&&window.scrollY<dist3-450){
        coursesDivs[1].classList.add('course-highlighted');
        coursesDivs[0].classList.remove('course-highlighted');
    }
    else if(window.scrollY+450>=dist4 && window.scrollY<dist5-450){
        coursesDivs[2].classList.add('course-highlighted');
        coursesDivs[1].classList.remove('course-highlighted');
    }
    else{
        // now why do we need it

        // for e.g when you scroll to the first course then it highlighed
        // but instead of going down to second scroll you moved up, so we never went down to the 
        // second course, so the highligh class on the first course is not removed

        // so to only add highlight class when we scroll to that course, else will help to acheive that
        
        // coursesDivs[0].classList.remove('course-highlighted');
        // coursesDivs[1].classList.remove('course-highlighted');
        // coursesDivs[2].classList.remove('course-highlighted');
        //or
        coursesDivs.forEach(function(course){
            course.classList.remove('course-highlighted');
        });
    }
});
*/

// app check 4b
// start
// highlight should only work in smaller screen
// so we can set a condition when, #courses er total height> 3 ta .course er height er total, tokhn e #courses er highlighting functioning ta kaj korbe
/*
**** the main idea is-
proti bar scroll korle, callback ta call hoibo as usual, like before, but etar functionlity ta/ (content inside the callback fucntion) tokhn e apply 
hobe jokhn oi je conditon ta bolechi oita satisfy hobe
*/
const courseSection=document.querySelector('#courses');
// const courseSectionHeight=courseSection.getBoundingClientRect().height;
let courseHeight=coursesDivs[0].getBoundingClientRect().height;
// console.log(courseSectionHeight);
// console.log(courseHeight);

//ai commented out code ta ekhane likhle kaj hobe na bcz ......
// then eta sudhu tokhn e kaj korbe when webpage open er time a e mobile or computer e opened. in btwn changed hoi ni large to small screen
// niche je functioning kora hoyeche big screen to small screen e eshe ektu scroll korle e highlingint functionliy r apply hobe na
// end

// calculate half of 100vh, then use it instead of 450
const banner=document.querySelector('.banner');
const halfOfDisplayHeight=banner.getBoundingClientRect().height/2;


addEventListener('scroll',function(){
    // app check 4b
    // start
    const courseSectionHeight=courseSection.getBoundingClientRect().height;
    // console.log(courseSectionHeight);
    // console.log(courseHeight);
    // end

    if(courseSectionHeight>courseHeight*3){//this if statement is added in app check 4B.js
        if(window.scrollY+halfOfDisplayHeight>=dist0&&window.scrollY<dist1-halfOfDisplayHeight){
            coursesDivs[0].classList.add('course-highlighted');
        }
        else if(window.scrollY+halfOfDisplayHeight>=dist2&&window.scrollY<dist3-halfOfDisplayHeight){
            coursesDivs[1].classList.add('course-highlighted');
            coursesDivs[0].classList.remove('course-highlighted');
        }
        else if(window.scrollY+halfOfDisplayHeight>=dist4 && window.scrollY<dist5-halfOfDisplayHeight){
            coursesDivs[2].classList.add('course-highlighted');
            coursesDivs[1].classList.remove('course-highlighted');
        }
        else{
            coursesDivs.forEach(function(course){
                course.classList.remove('course-highlighted');
            });
        }

    }
    
});
// but now there is one problem-
// suppose we scrolled down to the last course div
// so the last course will be highlighted
// and then we increase the screen size
// you will notice  last course highlighted hoye thakbe
// jotoi scroll koro eta jabe na

// the reason is jokhn .course-highlighed class add holo last course div a
// amra tokhn e screen boro kore feli, ekhn scroll event hole callback call hole o
// call back er content ta toh read hobe na bcz conditon satisfy hobe na, boro screen tai

// sol is for *any scroll event we will remove .course-highlighed from every course divs
// * any scroll hole hobe na, taile small screen e course-highlighted activated hoye abr o deactivated hoye jabe
window.addEventListener('scroll',function(){
    const courseSectionHeight=courseSection.getBoundingClientRect().height;
        if(courseSectionHeight<courseHeight*3){
            coursesDivs.forEach(function(course){
                course.classList.remove('course-highlighted');
            });
        }  
});


// now there is one more problem .course highlight hole pore boro hoye jai
// toh adjacent .course er sathe space ekdom kome jai

// solve it in styles check.css