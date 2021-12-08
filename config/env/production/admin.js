module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '56e4fa61a5f1f0e2711ed8acc615c776'),
  },
});
