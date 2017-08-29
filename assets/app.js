var handler = StripeCheckout.configure({
  key: 'pk_test_QdrTInhfNEUdPWehGtUaxblT',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
});

document.getElementById('basic').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handler.open({
    name: 'SUMOCCA',
    description: 'Basic',
    amount: 1999
  });
  e.preventDefault();
});

document.getElementById('plus').addEventListener('click', function (e) {
    e.stopPropagation();
    // Open Checkout with further options:
    handler.open({
        name: 'Plus',
        description: 'Plus',
        amount: 2999
    });
    e.preventDefault();
});

document.getElementById('premium').addEventListener('click', function (e) {
    // Open Checkout with further options:
    handler.open({
        name: 'SUMOCCA',
        description: 'Premium',
        amount: 6999
    });
    e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});