// Mobile class
function Mobile(brand, model, netork,speed,os){
 this.brand      = brand;
 this.model      = model;
 this.ramSize   = ram;
 this.netork    = netork;
 this.os         = os;
 this.Speed     = Speed;
 this.landline   = true;
}
// Parent methods
Mobile.prototype.makeCall = function(number){
   return "calling " + number + " with " + this.brand;
};
Mobile.prototype.installSoftware = function(){
   if(this.Speed > 2){
       return "You can proceed with your download";
   }
   else{
       return "Installation failed, you need more than " + this.speed + " gb of ram to proceed with installation";
   }
};

Mobile.prototype.displayResolution = function(screen_size){
   switch(screen_size){
       case "9.7'":
           console.log ("Screen Resolution: 2048 x 1536");
       break;
       case "5.7'":
           console.log ("Screen Resolution: 1440 x 2560");
       break;
       case "4.3"
           console.log ("Screen Resolution: 960 x 540");
       break;
     default:
        console.log ("Screen Resolution: 1024 x 768");
   }
 };

 Mobile.prototype.sendEmail = function(){
     return "Sending email";
 };

//Nokia class calls the Mobile class
 function Nokia(brand, model, netork,speed, os){
     Mobile.call(this, brand, model, netork,speed, os);
 }
// Nokia class extends Mobile class 
 Nokia.prototype = Object.create(Mobile.prototype);
 Nokia.prototype.constructor   = Nokia;
//Nokia method overides the Mobile sendEmail method 
 Nokia.prototype.sendEmail = function(){
     return "Email has been sent";
 };
// iPhone class calls the Mobile class
 function iPhone(brand, model, netork,speed, os
     Mobile.call(this, brand, model, netork,speed, os)
     var productId     = "499-OEM-64987-0028"; //private variable
 }  
     this.getProductId = function(productId){
       return productId;
};

// iPhone extends Mobile class   
iPhone.prototype             = Object.create(Mobile.prototype);
iPhone.prototype.constructor = iPhone;

// creates instances 
var myNokia = new Nokia('Nokia', 'N6', '2G', 'LTE', 'Lumia OS');
var iPhone = new iPhone('iPhone' '6','4G', 'LTE', 'iOS');

