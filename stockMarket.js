/**
 * Created by Abdelkader on 2015-01-31.s**/

StockMarket = Ember.Application.create();
//StockMarket.ApplicationAdapter = DS.FixtureAdapter;
//stockMarket.Company.adapter = Ember.FixtureAdapter.create();
StockMarket.CompanyAdapter = DS.FixtureAdapter;
StockMarket.BuyOrdAdapter = DS.LSAdapter.extend({});
StockMarket.SellOrdAdapter = DS.LSAdapter.extend({});


