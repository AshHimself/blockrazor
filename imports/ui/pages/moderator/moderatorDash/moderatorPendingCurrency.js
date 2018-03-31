import { Template } from 'meteor/templating'
import './moderatorPendingCurrency.html'

import swal from 'sweetalert'

Template.moderatorPendingCurrency.onCreated(function() {
  // a way to get parent's template instance
  let view = this.view

  while (view) {
    if (view.name === 'Template.moderatorDash') {
      break
    }
    view = view.parentView
  }

  this.parent = view.templateInstance()
})

Template.moderatorPendingCurrency.onRendered(function (){
  this.parent.reject.set(false);
  });

Template.moderatorPendingCurrency.events({
    'click #approve': function(data) {
        data.preventDefault();

        Meteor.call('approveCurrency', this._id, (err, data) => {

            if (err) {
                swal({
                    icon: "error",
                    text: "You can't approve your own currency",
                    button: { className: 'btn btn-primary' }
                });
            }
        })
    },
    'click #reject': function(data, templateInstance) {
        data.preventDefault();
        Meteor.call('setRejected', this._id, true);
        templateInstance.parent.currentlyRejecting.set(this._id)
        templateInstance.parent.reject.set(true)
        templateInstance.parent.submittername.set(this.username)
        templateInstance.parent.owner.set(this.owner)
        templateInstance.parent.currencyName.set(this.currencyName)
    }
});
Template.moderatorPendingCurrency.helpers({
  display () {
    if(this.rejected) {
      return "none";
    }},
  finalValue () {
    if (this.maxCoins && this.marketCap) {
    return Math.round(this.marketCap / this.maxCoins).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "calculating..."
  }
  },
  marketCap () {
    return Math.round(this.marketCap).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  circulating () {
    return Math.round(this.circulating).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  launchDate () {
    if (this.genesisTimestamp) {
    return "Launched " + moment(this.genesisTimestamp).fromNow();
  } else {
    return "";
  }
  },
  link () {
    if (this.genesisTimestamp) {
    return "#";
  } else {
    return "/currency/" + this._id + "?edit=launchdate";
  }
  },
  linktext () {
    if (this.genesisTimestamp) {
      return "";
    } else {
      return "Add the " + this.currencyName + " launch date!"
    }
  }
});


