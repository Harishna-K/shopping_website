var productContainer = document.querySelector('.products-grid');

var search = document.getElementById('search');

var productCards = productContainer.querySelectorAll('.product-card');

search.addEventListener('keyup', function (event) {
  var enteredValue = event.target.value.toUpperCase().trim();

  productCards.forEach(function (card) {
    var productNameElement = card.querySelector('h3');
    if (!productNameElement) return;

    var productName = productNameElement.textContent.toUpperCase();

    if (productName.includes(enteredValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
