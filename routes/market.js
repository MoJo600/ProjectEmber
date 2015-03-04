/**
 * Created by Mohamed on 2015-02-28.
 */


StockMarket.MarketRoute= Ember.Route.extend({

    model: function (params) {

        return this.store.find('company', params.company_id);

        // "this.store" is he data store represented by the adapter
    }

    //events: {
    //
    //    isMicro: function () {
    //
    //        alert("hello");
    //
    //        if (this.get('model.id') == 1) {
    //            return true;
    //        } else return false;
    //
    //    }
    //},


    //setupController: function (controller, model) {
    //    controller.set('model', model);
    //}


});