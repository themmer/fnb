import Ember from 'ember';

export default Ember.Controller.extend({
  /**
   The session service.

   @private
   @property session
   @type Object
   */

  /**
   The currently active user

   @private
   @property user
   @type object
   */
  user: Ember.computed.alias('session.user'),

  /**
   The list of side loaded users

   @private
   @property users
   @type Object
   */
  users: null
});
