/**
 * Created by Mohamed on 2015-02-17.
 */



StockMarket.StateSumRoute= Ember.Route.extend({

    model: function() {

        return this.store.find('company');

        // "this.store" is the data store represented by the adapter
    },


    events: {

        trans: function(){
            console.log("It's clicked, router");
        }
    },

    renderTemplate: function() {
        this.render('marketprice', {   // the template to render
            into: 'stateSum',                // the template to render into
            outlet: 'marketprice'              // the name of the outlet in that template
            //controller: 'MarketpriceController'        // the controller to use for the template
        });
        this.render('marketorder', {
            into: 'stateSum',
            outlet: 'marketorder'
            //controller: 'MarketorderController'
        });
    }



});


