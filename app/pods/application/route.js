import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel() {
    // Side load users from the /users api.  Normally, we would not
    // do this but we need to show different use cases during our
    // presentation.
    return this.store.findAll('user');
  },

  model() {
    // Check if there is an existing user.  This can be more stringent
    // however, for demo purposes, we assume a single user per computer.
    let user = $.cookie('fnb');
    let session = this.get('session');

    if (user) {
      try {
        user = JSON.parse(user);
      } catch (e) {
        Ember.Logger.info('Unable to parse saved user, creating...');
      }

      return this.store.findRecord('user', user.id)
        .then((user) => {
          session.set('user', user);
        });
    }

    // Unable to find or hydrate a user.  Creating a new one instead
    user = this.store.createRecord('user');
    session.set('user', user);

    return true;
  },

  actions: {
    loadNewUser(userId) {
      let session = this.get('session');
      session.set('user', this.store.query('user', userId));
    }
  }
});