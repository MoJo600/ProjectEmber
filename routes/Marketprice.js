/**
 * Created by Mohamed on 2015-02-28.
 */


StockMarket.MarketpriceRoute= Ember.Route.extend({

    model: function () {

        return this.store.find('company');

        // "this.store" is he data store represented by the adapter
    }
});