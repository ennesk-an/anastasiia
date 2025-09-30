// GA4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0SNMWTMGCL');

// Функция перехода на checkout
function goToCheckout(product) {
  window.location.href = "checkout.html?product=" + product;
}

// Начало оформления
function logBeginCheckout(product) {
  gtag('event', 'begin_checkout', {
    currency: 'UAH',
    items: [{ item_id: product, item_name: product }]
  });
  console.log("Event: begin_checkout", product);
}

// Завершение покупки
function logPurchase(product) {
  gtag('event', 'purchase', {
    transaction_id: Date.now().toString(),
    value: 400,
    currency: 'UAH',
    items: [{ item_id: product, item_name: product }]
  });
  console.log("Event: purchase", product);
}
