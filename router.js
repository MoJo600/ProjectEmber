/**
 * Created by Mohamed on 2015-02-16.
 */


StockMarket.Router.map(function() {
    this.resource('stateSum', {path: '/'}, function(){
        this.resource('market', {path: 'market/:company_id'});

    });
    this.resource('placebidorder', {path: '/placebidorder/:company_id'});
    this.resource('placesaleprice', {path: '/placesaleprice/:company_id'});

    //this.resource('marketorder', {path: '/order'});
    //this.resource('marketprice', {path: '/price'});


});