// get elements
const togglebtn = document.querySelector('.toggle');
const maincontainer = document.querySelector('.maincontainer');
const menu = document.querySelector('.menuHolder');
const h1 = document.querySelector('h1');
const nav = document.querySelector('nav');


togglebtn.addEventListener('click', showMenu);


function showMenu(){
    // prompt('ready?',"yes","no");
    togglebtn.classList.toggle('Close');
    maincontainer.classList.toggle('Close');
    menu.classList.toggle('Close');
}


const Shop = nav.children[1];
const About = nav.children[2]; 
const Contact= nav.children[3];
// change content per menu
Shop.addEventListener('click',shop);

function shop(){
    h1.textContent="Shop";
    maincontainer.textContent=" shop^30.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum minima enim deserunt quia, nam officiis quaerat veniam, ipsum distinctio soluta alias magni ad inventore! Pariatur doloribus aperiam maxime aspernatur fugiat impedit nulla expedita sit iste saepe. Error animi earum veritatis vitae corrupti vero! Quas quidem accusantium pariatur saepe in! SHOP";
};

About.addEventListener('click',about);

function about(){
    h1.textContent="About";
    maincontainer.textContent=" About.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum minima enim deserunt quia, nam officiis quaerat veniam, ipsum distinctio soluta alias magni ad inventore! Pariatur doloribus aperiam maxime aspernatur fugiat impedit nulla expedita sit iste saepe. Error animi earum veritatis vitae corrupti vero! Quas quidem accusantium pariatur saepe in! SHOP";
};

Contact.addEventListener('click', ontact);

function ontact(){
    h1.textContenContact="Contact us";
    maincontainer.textContent=" Contact Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum minima enim deserunt quia, nam officiis quaerat veniam, ipsum distinctio soluta alias magni ad inventore! Pariatur doloribus aperiam maxime aspernatur fugiat impedit nulla expedita sit iste saepe. Error animi earum veritatis vitae corrupti vero! Quas quidem accusantium pariatur saepe in! SHOP";
};
