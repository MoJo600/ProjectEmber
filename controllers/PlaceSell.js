/**
 * Created by Mohamed on 2015-03-01.
 */




StockMarket.PlacesaleorderController = Ember.Route.extend({

    actions: {

        createSell: function(){

            var Company= this.get('model');
            var ex= this.model();

            var SellOrder = this.store.createRecord('SellOrd', {
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