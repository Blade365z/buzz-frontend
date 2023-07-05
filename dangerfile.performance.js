const { danger } = require('danger');
const universeDangerJs = require('@razorpay/universe-cli/danger.web');

universeDangerJs(
  {
    auditPerformance: {
      type: 'warn',
      config: {
        localhost: {
          url: `https://${process.env.APP_NAME}-pr-${danger.github.pr.number}.dev.razorpay.in/`,
        },
      },
    },
  },
  // disable other default checks
  false,
);
