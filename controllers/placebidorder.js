/**
 * Created by Mohamed on 2015-02-28.
 */



StockMarket.PlacebidorderController = Ember.ObjectController.extend({

needs: ["stateSum"],

    actions: {

              createBuy: function(){

                  alert("start");
                  //console.log("Sheesh");
              var Company= this.get('model');
                  var flag=false;
                  var sellLength= Company.get('sellOrders.length');
                  var orders= Company.get('sellOrders');
            //  var ex= this.model();
                  var statSumCnt= this.get('controllers.stateSum');
                  var buyOrder = this.store.createRecord('BuyOrd', {
                      numShares : this.get('numOfShares'),
                      price : this.get('price'),
                      company: Company
                  });
                  buyOrder.save();
                  for(var i=0;i<sellLength;++i){

                      var sellShares= orders.objectAt(i).get('numShares');
                      var sellPrice= orders.objectAt(i).get('price');

                      if(buyOrder.get('numShares')==sellShares && buyOrder.get('price')==sellPrice){


                          alert("Sale");

                          Company.set('lastSale', sellPrice);
                          var oldShare= Company.get('shareVol');
                          Company.set("shareVol", oldShare+sellShares);
                          this.get('controller').deleteRecord(sellShares, sellPrice);
                          flag=true;


                      }



                  }
                  if(flag==false)
                  Company.get('buyOrders').pushObject(buyOrder);





                 alert("finish");
              },



             deleteRecord: function(shares, price){

                 var Company= this.get('model');
                 var sellLength= Company.get('sellOrders.length');
                 var sellOrders= Company.get('sellOrders');


                 for(var i=0;i<sellLength;++i){

                    var sellShares= sellOrders.objectAt(i).get('numShares');
                     var sellPrice= sellOrders.objectAt(i).get('price');

                     if(shares==sellShares && price==sellPrice) {
                         sellOrders.splice(i);
                         break;

                     }
                 }

             },

             trans: function(){


                 this.transitionToRoute('stateSum');

             }



    }

});