import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    findCharacter(name){
      this.transitionTo('characters.character', name)
    }
  }
});
