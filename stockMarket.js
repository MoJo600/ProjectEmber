/**
 * Created by Abdelkader on 2015-01-31.s**/

StockMarket = Ember.Application.create();
StockMarket.ApplicationAdapter = DS.FixtureAdapter;
//stockMarket.Company.adapter = Ember.FixtureAdapter.create();
//stockMarket.CompanyAdapter = DS.FixtureAdapter.extend({});


Ember.TextField.reopen({
    attributeBindings: ['size', 'maxlength']
});

StockMarket.TextField = Ember.TextField.extend({
    attributeBindings: ['size', 'maxlength', 'autofocus', 'name', 'required']
});