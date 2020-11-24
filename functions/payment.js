const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const { token, amount } = JSON.parse(event.body);

  const body = {
    source: token.id,
    amount: amount,
    currency: "eur",
  };

  return new Promise((resolve, reject) => {
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        reject({
          statusCode: 500,
          body: { stripeErr },
        });
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ success: stripeRes }),
        });
      }
    });
  });
};
