/**
 * Created by Mohamed on 2015-03-01.
 */




StockMarket.PlacesalepriceController = Ember.ObjectController.extend({

    actions: {

        createSell: function(){

            alert("start");
            var company= this.get('model');
           // var ex= this.model();

            var sellOrder = this.store.createRecord('SellOrd', {
                numShares : this.get('numOfShares'),
                price : this.get('price')
              //  company: Company
            });
            sellOrder.save();
            company.get('sellOrders').pushObject(sellOrder);
         alert("finish");

        },

        trans: function(){


            this.transitionToRoute('stateSum');

        }



    }

});