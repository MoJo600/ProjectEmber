/**
 * Created by Mohamed on 2015-02-16.
 */


StockMarket.Company= DS.Model.extend({


    name: DS.attr('string'),
    openPrice: DS.attr('string'),
    lastSale: DS.attr('string'),
    buyOrders: DS.hasMany('buyOrd'),
    sellOrders: DS.hasMany('sellOrd'),
    shareVol: DS.attr('string'),
    logo: DS.attr(),
    rate: DS.attr(),
    rateDIFF: DS.attr(),
    ratePERCENT: DS.attr()




});



