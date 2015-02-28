/**
 * Created by Mohamed on 2015-02-28.
 */



StockMarket.PlacebidorderController = Ember.Route.extend({

    actions: {

              createBuy: function(){

              var Company= this.get('model');
              var ex= this.model();

                  var buyOrder = this.store.createRecord('BuyOrd', {
                      numShares : this.get('numOfShares'),
                      price : this.get('price'),
                      company: Company
                  });



              },

             trans: function(){


                 this.transitionToRoute('stateSum');

             }



    }

});