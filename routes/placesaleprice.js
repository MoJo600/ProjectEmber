/**
 * Created by Mohamed on 2015-03-03.
 */


StockMarket.PlacesalepriceRoute = Ember.Route.extend({

    model: function(params) {
        return this.store.find('company', params.company_id);
    }

});