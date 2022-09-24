//navigation var
var navbar = document.getElementById('navbar__list');

//section var
var sections = document.querySelectorAll('section');


//build the Bar 

    const navList = () => {

        console.log(navList)

        //the loop for all sections
        sections.forEach(section => {

            const sectionID = section.id;
            const sectionDataNav = section.dataset.nav;
            const style = 'color: black; margin: 10px'

            let navList = `<li> <a class= "menu__link" style ='${style}' href= "#${sectionID}" menu__link="${sectionID}"> ${sectionDataNav}</a></li>`;
            
        
        
        navbar.innerHTML += navList;


        });

        
        
    }

navList ();

//remove the active class and add the active class

console.dir(navbar)

navbar.childNodes.forEach(element => {
    element.addEventListener("click", function(){
        navbar.childNodes.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active");


    })


});


    window.addEventListener ('scroll', () => {
        //const el = document.getElementById(item.getAttribute ("menu__link"));
        //section.scrollIntoView ({behavior: "smooth", block: "center"})

   

     //loop over each section to check position
        sections.forEach(section => {
            if (container.getBoundingClientRect().top <window.innerHeight)
            inviewport = () => landing__container 
             section.classList.remove ('active')
             section.classList.add(inviewport(),'active')


        });
    });






