import Ember from 'ember';

var Band = Ember.Object.extend({
  name: ''
});

var ledZappelin = Band.create({
  name: 'ledZappelin'
});

var pearlJam = Band.create({
  name: 'pearlJam'
});

var fooFighters = Band.create({
  name: 'fooFighters'
})
var bands = [ledZappelin, pearlJam, fooFighters];

export default Ember.Route.extend({
  model: function() {
    return bands;
  }
});
