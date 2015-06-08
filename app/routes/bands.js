import Ember from 'ember';

//create the songs
var Song = Ember.Object.extend({
  title:  '',
  band:   '',
  rating: 0
});

var daughter = Song.create({
  title: 'Daughter',
  band:  'Pearl Jam',
  rating: 5
});

var blackDog = Song.create({
  title:  'Black Dog',
  band:   'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title:  'Yellow LedBetter',
  band:   'Pear Jam',
  rating: 4
});

var pretender = Song.create({
  title:  'The Pretender',
  band:   'Foo Fighters',
  rating: 2
});

// var SongCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
//   sortProperties: ['rating'],
//   sortAscending:  false,
//   content:        []
// });

// var songs = SongCollection.create();

// songs.pushObjects([daughter, blackDog, yellowLedbetter, pretender]);

//create the bands
var Band = Ember.Object.extend({
  name: '',

  slug: function(){
    return this.get('name').dasherize();
  }.property('name')
});

var ledZappelin = Band.create({
  name: 'Led Zappelin',
  songs: [blackDog]
});

var pearlJam = Band.create({
  name: 'Pearl Jam',
  songs: [daughter, yellowLedbetter]
});

var fooFighters = Band.create({
  name: 'Foo Fighters',
  songs: [pretender]
});

var BandsCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['name'],
  sortAscending:  false,
  content:        []
});

var bands = BandsCollection.create();

bands.pushObjects([ledZappelin, pearlJam, fooFighters]);

export default Ember.Route.extend({
  model: function() {
    return bands;
  }
});
