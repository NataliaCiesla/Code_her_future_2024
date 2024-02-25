function helloWorld(name){
    console.log("Dzień dobry w niedziele"+name);
}
//wywołanie funkcji w javascript
//helloWorld();
helloWorld("Ania");
helloWorld("Asia");
function mobileMenu(){
let mobileMenuIcon=document.getElementById("mobile_menu_icon");
console.log(mobileMenuIcon);
let menu=document.getElementById("main_menu");
console.log(menu);

if(mobileMenuIcon){
    mobileMenuIcon.addEventListener("click"),function(){
        menu.classList.toggle("opened");
        mobileMenuIcon.classList.toggle("opened")
    }
}
};

//wywołanie funkcji
mobileMenu()