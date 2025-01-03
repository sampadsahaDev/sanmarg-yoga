// extra translation effect on the .sidebar-menu
const asideElement=document.querySelector('aside');
const navToggleBtn=document.querySelector('.nav-toggle-btn');

const sidebarMenu=document.querySelector('.sidebar-menu');
navToggleBtn.addEventListener('click',function(){
    asideElement.classList.add('aside-show');
    sidebarMenu.classList.add('sidebar-menu-show');
});

const crossBtn=document.querySelector('.cross-btn');
crossBtn.addEventListener('click',function(){
    asideElement.classList.remove('aside-show');
    sidebarMenu.classList.remove('sidebar-menu-show');/*translation will be added*/

});
