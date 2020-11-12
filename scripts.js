"use-strict";


(function(){

  const galleryContainer = document.querySelector("#gallery");
    const gallery = [{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    },{
        src:"./assets/1.jpg",
        details:"Eiusmod sit amet cupidatat incididunt dolor incididunt."
    }];
    
    const createGallery = () => {
        gallery.forEach((item) =>{
            //HTML template ES6
            let html = `<div class="col-md-2 m-2 item">
            <img src="${item.src}" width= "100%"/>
            </div>`;
            galleryContainer.innerHTML+= html;
        } );
    };
    
    createGallery();
  
$('.carousel').carousel({

    interval: 1000
  }) 
}());

