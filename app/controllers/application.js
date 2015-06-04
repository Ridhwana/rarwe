import Ember from 'ember';

var Song = Ember.Object.extend({
  title:  '',
  band:   '',
  rating: 0
});

var SongCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['rating'],
  sortAscending:  false,
  content:        []
});

var songs = SongCollection.create();

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

songs.pushObjects([blackDog, yellowLedbetter, pretender]);

export default Ember.Controller.extend({
  songs: songs
});
