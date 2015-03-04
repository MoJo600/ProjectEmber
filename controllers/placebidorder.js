/**
 * Created by Mohamed on 2015-02-28.
 */



StockMarket.PlacebidorderController = Ember.ObjectController.extend({

    actions: {

              createBuy: function(){

                  alert("hey");
                  //console.log("Sheesh");
              var Company= this.get('model');
              var ex= this.model();

                  var buyOrder = this.store.createRecord('BuyOrd', {
                      numShares : this.get('numOfShares'),
                      price : this.get('price'),
                      company: Company
                  });
                  buyOrder.save();
                  Company.get('buyOrders').pushObject(buyOrder);


              },

             trans: function(){


                 this.transitionToRoute('stateSum');

             }



    }

});