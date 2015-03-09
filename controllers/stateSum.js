
/**
 * Created by Mohamed on 2015-02-20.
 */


StockMarket.StateSumController= Ember.Controller.extend({

needs: ["market", "placebidorder", "placesaleprice"],


    rateLogo: function(){

        var checks= this.get('model').get("rate");
        var name=this.get('model').get('name');
        if(this.get('model').get('rate')=="up") {
            e =  "up.png"
        } else if(this.get('model').get('rate')=="down"){

            e="down.png";
        }else if(this.get('model').get('rate')=="same") {
            e="noChange.png";
        }

        return e;

    }.property('model'),

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
