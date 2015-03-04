
/**
 * Created by Mohamed on 2015-02-20.
 */


StockMarket.StateSumController= Ember.Controller.extend({


actions: {

    trans: function () {


        this.transitionToRoute('placebidorder');  // the thing in quotations must be the template name

    },

    brance: function(){


        this.transitionToRoute('marketorder');

    },

    trance: function(){

        this.transitionToRoute('marketprice');

    },

    openModal: function(param) {
        this.render(param, {
            into: 'statSum',
            outlet: 'modal'
        });
    }


}


});
