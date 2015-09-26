import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id(i) {
    return i;
  },
  name(i) {
    return ['Bam Bam', 'Fred', 'Wilma', 'Barney', 'Betty'][i];
  },
  age(i) {
    return 15 + (i * 5);
  },
  email(i) {
    return `user${i}@fnb.com`;
  },
  phone(i) {
    return `402-888-${8000 + i}`;
  }
});