module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4dd927998cb72fb05cd10e6f26907009'),
  },
});
