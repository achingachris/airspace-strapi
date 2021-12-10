module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ca29d36369337d3ce7cd00568c56766'),
  },
});
