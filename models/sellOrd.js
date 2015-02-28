/**
 * Created by Mohamed on 2015-02-17.
 */

StockMarket.SellOrd= DS.Model.extend({


    numShares: DS.attr(),
    price: DS.attr(),
    company: DS.belongsTo('company')


});

