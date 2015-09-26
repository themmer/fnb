export function initialize(container, application) {
  application.inject('component', 'session', 'service:session');
  application.inject('controller', 'session', 'service:session');
  application.inject('route', 'session', 'service:session');
}

export default {
  name: 'session',
  initialize: initialize
};