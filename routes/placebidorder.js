/**
 * Created by Mohamed on 2015-02-28.
 */




StockMarket.PlacebidorderRoute = Ember.Route.extend({

    model: function(params) {
        return this.store.find('company', params.company_id);
    }

});

