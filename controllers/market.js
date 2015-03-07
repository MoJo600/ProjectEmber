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

        var e= ordersController.objectAt(0).get('numShares');
        var c= ordersController.objectAt(1).get('numShares');
        var g= ordersController.objectAt(2).get('numShares');
        alert(e);

        var sorted = sells.sort(function(a,b) {
            return b.get('numShares') - a.get('numShares');
        });
        orders.sort(function(a,b){ return (a.get('numShares')- b.get('numShares'))});
        for(var i=0; i<max; ++i){


            var buyShares= orders.objectAt(i).get('numShares');
            var buyPrice= orders.objectAt(i).get('price');
            var sellShares= sells.objectAt(i).get('price');
            var sellPrice= sells.objectAt(i).get('numShares');


            var obj={

                buyS: buyShares,
                buyP: buyPrice,
                sellP: sellPrice,
                sellS: sellShares
            }

            array.push(obj);


        }


        return array;


    }.property("model"),



    sortingFunction: function(a, b){

        if (a.get('numShares') < b.get('numShares'))
            return -1;
        if (a.get('numShares') > b.get('numShares'))
            return 1;

        return 0;



    },


    populateTable: function(){

        var w="hey";
       // var body= document.getElementsByTagName('tbody')[1];
        var test= document.getElementById(this.get('tbody'));
        var company= this.get("model");
        var sells= company.get("sellOrders");
        var orders= company.get("buyOrders");
        var ret=0;

        var orderLength= company.get("buyOrders.length");
        var sellLength= company.get("sellOrders.length");
        var max;
        if(sellLength>orderLength)
        max=sellLength;
        else max=orderLength;

for(var i=0; i<max; ++i)
        {
            var row = document.createElement('tr');
            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");
            var cell3 = document.createElement("td");
            var cell4 = document.createElement("td");
            if(i<orderLength) {
                var textnode1 = document.createTextNode(orders.objectAt(i).numShares);
                var textnode2 = document.createTextNode(orders.objectAt(i).price);
                cell1.appendChild(textnode1);
                cell2.appendChild(textnode2);
            }
            if(i<sellLength) {
                var textnode1 = document.createTextNode(orders.objectAt(i).price);
                var textnode2 = document.createTextNode(orders.objectAt(i).numShares);
                cell3.appendChild(textnode1);
                cell4.appendChild(textnode2);
            }


            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);


           this.get('metable').append(row);


        }

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