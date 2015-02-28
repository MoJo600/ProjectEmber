/**
 * Created by Mohamed on 2015-02-17.
 */



StockMarket.BuyOrd= DS.Model.extend({


    numShares: DS.attr(),
    price: DS.attr(),
    company: DS.belongsTo('company')


});

/*
StockMarket.BuyA= DS.Model.extend({


    numShares: DS.attr(),
    price: DS.attr()


});

StockMarket.BuyF= DS.Model.extend({


    numShares: DS.attr(),
    price: DS.attr()


});
    */