(function () {
'use strict';
    
    var finalList=[];
    var shoppingList=[
      {
          name:"Молока",
          quantity:"2"
      },
        {
          name:"Бургерів",
          quantity:"200"
        },
        {
          name:"Печень",
          quantity:"300"
        },
        {
          name:"Школадок",
          quantity:"5"
        },
        {
          name:"Батончиків",
          quantity:"77"
        }
    ];
    
angular.module('ShoppingListApp',[])
    .controller('ShoppingListController',ShoppingListController)
    .controller('ShoppingListController1',ShoppingListController1)
    .service('Service',Service);
    
    ShoppingListController.$inject = ['Service'];
    
    function ShoppingListController(Service){
        var item = this;
        item.shoppingList=Service.getItemToBy();
        item.sell=function(index){
            Service.sell(index);
        }
        /*
        item.addToList=function(){
            Service.addToList();
        }
        */
    }
    ShoppingListController1.$inject = ['Service'];
    
    function ShoppingListController1(Service){
        var item=this;
        item.finalList=Service.getAlreayBoughtedItem();
    }
    
    function Service(){
        var service = this;
        
        /*
        service.addToList = function(){
            var newItem = {
                name:service.newItemName,
                quantity:service.newItemQuantity
            };
            shoppingList.push(newItem);
        };
        */
        
        service.getItemToBy=function(){
            return shoppingList;
        };
        
        service.getAlreayBoughtedItem= function(){
            return finalList;
        };
        service.sell=function(index){
            finalList.push(shoppingList[index]);
            shoppingList.splice(index,1);
        };
    }
    
})();