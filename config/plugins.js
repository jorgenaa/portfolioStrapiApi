module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'jorgen.arnes@gmail.com',
        defaultReplyTo: 'jorgen.arnes@gmail.com',
      },
    },
    // ...
  });