module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfb5e6a30d277f86d9a29d78a4418f75'),
  },
});
