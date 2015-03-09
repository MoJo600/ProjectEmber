/**
 * Created by Mohamed on 2015-02-28.
 */



StockMarket.PlacebidorderController = Ember.ObjectController.extend({

needs: ["stateSum"],

    actions: {

              createBuy: function() {

                  alert("start");
                  //console.log("Sheesh");
                  var Company = this.get('model');
                  var flag = false;
                  var sellLength = Company.get('sellOrders.length');
                  var orders = Company.get('sellOrders');
                  //  var ex= this.model();
                  var statSumCnt = this.get('controllers.stateSum');

                  //buyOrder.save();
                  var buynumShares = this.get('numOfShares');
                  var buyPrice = this.get('price');
                  var valueOfPossibility=0;
                  for (var i = 0; i < sellLength; ++i) {

                      var sellShares = orders.objectAt(i).get('numShares');
                      var sellPrice = orders.objectAt(i).get('price');

                      if (buyPrice == sellPrice) {


                          if (parseInt(sellShares) > parseInt(buynumShares)) {

                              alert("Sale");
                              var openPrice= Company.get('openPrice');
                              Company.set('lastSale', sellPrice);
                              Company.set('rateDIFF',parseInt(sellPrice)- parseInt(openPrice));
                              if(parseInt(sellPrice)- parseInt(openPrice)<0)
                                  Company.set('rate', 'down.png');
                              else if(parseInt(sellPrice)- parseInt(openPrice)>0)
                                  Company.set('rate', 'up.png');
                              else Company.set('rate', 'noChange.png');
                              var compPercentage=(parseInt(sellPrice)- parseInt(openPrice))/parseInt(openPrice);
                              compPercentage= compPercentage*100;
                              Company.set('ratePERCENT', compPercentage);
                              var j = parseInt(sellShares) - parseInt(buynumShares);
                              orders.objectAt(i).set('numShares', parseInt(sellShares) - parseInt(buynumShares));


                              flag = true;
                          }

                          if (parseInt(sellShares) < parseInt(buynumShares)) {

                              var openPrice= Company.get('openPrice');
                              Company.set('lastSale', sellPrice);

                              Company.set('rateDIFF',parseInt(sellPrice)- parseInt(openPrice));
                              if(parseInt(sellPrice)- parseInt(openPrice)<0)
                                  Company.set('rate', 'down.png');
                              else if(parseInt(sellPrice)- parseInt(openPrice)>0)
                                  Company.set('rate', 'up.png');
                              else Company.set('rate', 'noChange.png');

                              var compPercentage=(parseInt(sellPrice)- parseInt(openPrice))/parseInt(openPrice);
                              compPercentage= compPercentage*100;
                              Company.set('ratePERCENT', compPercentage);

                              valueOfPossibility = parseInt(buynumShares) - parseInt(sellShares);




                              orders.objectAt(i).deleteRecord();


                              var oldShare = Company.get('shareVol');
                              var k = oldShare + valueOfPossibility;
                              Company.set("shareVol", oldShare + valueOfPossibility);


                          }

                          else if (parseInt(sellShares) == parseInt(buynumShares)) {

                              alert("Sale!");

                              orders.objectAt(i).deleteRecord();

                             flag=true;
                          }


                      }


                  }
                  if (flag == false) {

                      var buyOrder = this.store.createRecord('BuyOrd', {
                          numShares: valueOfPossibility,
                          price: this.get('price'),
                          company: Company
                      });
                      buyOrder.save();
                      Company.get('buyOrders').pushObject(buyOrder);

              }





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