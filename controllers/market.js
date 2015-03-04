/**
 * Created by Mohamed on 2015-02-28.
 */


StockMarket.MarketController= Ember.ObjectController.extend({





    Logo: function(){


        var company= this.get("model");
        var logos= company.get('logo');
        //alert (logos);
        return logos;



    }.property("model")

    ,

    isMicro: function (){

        alert("hey");

        return false;

    }

    ,
    isApple: function () {

        return this.get('model.name') == 'Apple Inc. (AAPL)'
    }
    ,

    isFace: function () {


        return this.get('model.name') == 'Facebook, Inc. (FB)'


    }


});