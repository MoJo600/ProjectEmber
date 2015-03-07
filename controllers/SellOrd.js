/**
 * Created by Mohamed on 2015-03-06.
 */

StockMarket.SellOrdController=Ember.ArrayController.create({


    model: SellOrd,
    sortProperties: ['numShares'],
    sortAscending: false
});