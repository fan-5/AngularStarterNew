let app = angular.module('MyApp');

app.component('WelcomePage1', {
  template:
   `<div>
      <h1> HEllo WORLD ! </h1>
      <img  className="Img" src="https://i.pinimg.com/originals/6b/1a/e2/6b1ae29eecf24e0e046e51293891bb20.jpg" />
      
      </div>`
//https://www.freepik.com/free-photo/gold-cutlery-set-black-background_4506326.htm 
//https://www.freepik.com/free-photo/various-mexican-food-dark-background_1565891.htm
//https://www.freepik.com/free-photo/plate-ripe-vegetables-assortment_1443322.htm
//https://www.freepik.com/free-photo/colorful-healthy-unhealthy-food-white-textured-background_2955602.htm

  ,
  
  controller : {

  },

  bindings: {
    WelcomePageKeyBinded: '>'
  }
});