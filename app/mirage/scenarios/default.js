export default function(server) {
  // Seeding development database with 5 users.  Note, this is only for
  // presentation purposes.  Normally, you would not have a need to load
  // multiple users ;-)
  server.createList('user', 3);
}