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

    getBuys: function(){

        var company= this.get("model");
        var orders= company.get("buyOrders");
        return orders;



    }.property("model"),

    getSells: function(){

        var company= this.get("model");
        var sells= company.get("sellOrders");
        return sells;



    }.property("model"),


    getAll: function(){

        var company= this.get("model");
        var sells= company.get("sellOrders");
        var orders= company.get("buyOrders");
        var array= new Array();
        var orderLength= company.get("buyOrders.length");
        var sellLength= company.get("sellOrders.length");
        var max;
        if(sellLength>orderLength)
            max=sellLength;
        else max=orderLength;

        var ordersController= Ember.ArrayController.create({
            model: orders,
            sortProperties: ['numShares'],
            sortAscending: true

        });

        //var e= ordersController.objectAt(0).get('numShares');

        //alert(e);

        var sortedBuys = this.get('model').get('buyOrders').sortBy('numShares');
        var sortedSells= this.get('model').get('sellOrders').sortBy('numShares');

        //var c= sortedBuys.objectAt(0).get('numShares');
        //var j= sortedBuys.objectAt(1).get('numShares');

        //
        // orders.sort(function(a,b){ return (a.get('numShares')- b.get('numShares'))});
        var cJ=0;
        for(var i=max-1; i>=0; --i){

            var buyShares="";
            var buyPrice="";
            var sellShares="";
            var sellPrice="";
            if((orderLength-1)>=0) {
                buyShares = sortedBuys.objectAt(i).get('numShares');
                buyPrice = sortedBuys.objectAt(i).get('price');
                --orderLength;
            }
            if(cJ<sellLength) {
                sellShares = sortedSells.objectAt(cJ).get('price');
                sellPrice = sortedSells.objectAt(cJ).get('numShares');
                ++cJ;
            }

            var obj={

                buyS: buyShares,
                buyP: buyPrice,
                sellP: sellPrice,
                sellS: sellShares
            }

            array.push(obj);


        }
        if(array.length==0){

            var obj={

                buyS: "",
                buyP: "",
                sellP: "",
                sellS: ""
            }

            array.push(obj);


        }


        return array;


    }.property("model"),



    sortingFunction: function(){


       return this.get('model').get('buyOrders').sortBy('numShares')


    }.property('buyOrders.@each.numShares'),


    populateTable: function(){

        var company= this.get("model");
        var sells= company.get("sellOrders");
        var buys= company.get("buyOrders");
        var arraySells= new Array();
        var arrayBuys= new Array();
        var buyLength= company.get("buyOrders.length");
        var sellLength= company.get("sellOrders.length");
        var deadPriceList= new Array();

        var buyCount=1;
        var sellCount=1;

        for(var i=0;i<buyLength;++i){

            var buyObjPrice= buys.objectAt(i).get('price');
            var buyObjShares= buys.objectAt(i).get('numShares');

            if(deadPriceList.contains(buyObjPrice))
            continue;

            for(var j=i+1;j<buyLength;++j){

               if(buys.objectAt(j).get('price')==buyObjPrice){
                   ++buyCount;
                   var temp= parseInt(buyObjShares)+ parseInt(buys.objectAt(j).get('numShares'));
                   buyObjShares= String(temp);

               }



            }
            deadPriceList.push(buyObjPrice);

            var obj={
                count: buyCount,
                shares: buyObjShares,
                price: buyObjPrice
            };
            buyCount=1;
            arrayBuys.push(obj);


        }

        deadPriceList=[];

        for(var i=0;i<sellLength;++i){

            var sellObjPrice= sells.objectAt(i).get('price');
            var sellObjShares= sells.objectAt(i).get('numShares');

            if(deadPriceList.contains(sellObjPrice))
                continue;

            for(var j=i+1;j<sellLength;++j){

                if(sells.objectAt(j).get('price')==sellObjPrice){
                    ++sellCount
                    var temp= parseInt(sellObjShares)+ parseInt(sells.objectAt(j).get('numShares'));
                    sellObjShares= String(temp);

                }



            }
            deadPriceList.push(sellObjPrice);

            var obj={
                count: sellCount,
                shares: sellObjShares,
                price: sellObjPrice
            };
            sellCount=1;
            arraySells.push(obj);


        }

        var totalArr= new Array();
        arrayBuys.sort(function(a, b){
            return b['shares']- a['shares'];
        });
        arraySells.sort(function(a, b){
            return a['shares']- b['shares'];
        });
       // var test= arrayBuys[0]['shares'];
        //
        // test= arrayBuys[1]['shares'];
        //test= arrayBuys[2]['shares'];
       // test= arrayBuys[3]['shares'];
        var max
        if(arraySells.length>arrayBuys.length)
            max=arraySells.length;
        else max=arrayBuys.length;

        for(var i=0; i<max;++i ){

            var buyCount=0;
            var buyShare="";
            var buyPrice="";
            var sellCount=0;
            var sellShare="";
            var sellPrice="";

            if(i<buyLength) {
                buyCount = arrayBuys[i]["count"];
                buyShare = arrayBuys[i]["shares"];
                buyPrice = arrayBuys[i]["price"];
            }
            if(i<sellLength) {
                sellCount = arraySells[i]["count"];
                sellShare = arraySells[i]["shares"];
                sellPrice = arraySells[i]["price"];
            }

            var obj={

            buyCount: buyCount,
                buyShare: buyShare,
                buyPrice: buyPrice,
                sellCount: sellCount,
                sellShare: sellShare,
                sellPrice: sellPrice


            }


            totalArr.push(obj)




        }


      // var testing = totalArr[0]['buyShare'];
       // var resting = totalArr[1]['buyShare'];


        return totalArr;

    }.property("model"),



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