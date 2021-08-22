module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "3bdad2ac1c8bdf656aa495f815bc3156"),
    },
  },
});
