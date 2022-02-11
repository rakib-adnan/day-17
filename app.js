
// get elements 
const tabManu = document.querySelectorAll('.c17_tabSec .aks_tab ul li a');
const tab_pan_all = document.querySelectorAll('.c17_tabSec .aks_tab .tab-body .tab-pane')

tabManu.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        tabManu.forEach(item => {
            item.classList.remove('active')
        })
        
        item.classList.add('active');
        const get_pan = document.querySelector(this.getAttribute('href'));
        tab_pan_all.forEach(item => {
            item.classList.remove('active')
        })
        get_pan.classList.add('active')
        console.log(get_pan);
    })
})




const tabManuu = document.querySelectorAll('.left-body-menu ul li a.m-item');
const tabManuAll = document.querySelectorAll('.left-body-menu ul li a');
const Allpane = document.querySelectorAll('.main-contetn .contetnt-body .tab-pen');



tabManuAll.forEach(item => {
    
    item.addEventListener('click', function (e) {
        e.preventDefault(); 

        

        Allpane.forEach(item => {
            if(item != this){
                item.classList.remove('activeFP');
                
            }   
        });
        tabManuAll.forEach(element => {
            if(element != this){
                element.classList.remove('activeCM');
            }
        });

        const pane = document.querySelector(this.getAttribute('href'));
        pane.classList.add('activeFP')
        
        
        if(item == this){
            item.classList.add('activeCM');
        }else{
            item.classList.remove('activeCM');

        }
        
    });


});



tabManuu.forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();

        
        tabManuu.forEach(item => {
            item.classList.remove('active');
            item.nextElementSibling.style.height = '0'
        })
        
        if(item == this){
            item.classList.add('active');
            item.nextElementSibling.style.height = 'fit-content';
        }else{
            item.classList.remove('active');
            item.nextElementSibling.style.height = '0';
        }

    });
});










// console.log(tabManu);
// console.log(tabManuAll);
//e.nextElementSibling.style.height = 0;


// console.log(tabManu);
