const updateWebsite = () => {
  // Retrieve rows with the price
  const prices = document.querySelectorAll(
    '.row.pricebreaks-row.active .col-xs-4.bold'
  );

  // Sum all the prices
  let totalPrice = 0;
  prices.forEach((priceStr) => {
    const price = parseFloat(priceStr.innerText.replace('$', ''));
    totalPrice = totalPrice + price;
  });

  // Create formatter for USD currency
  const formatter = new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD',
  });

  // Insert a new row on top of the table
  const row = document.querySelector('.cart-body').insertRow(0);

  // Adds the Total cost to the HTML
  row.innerHTML = `<td colspan="10" style="text-align: center; background-color: #dff0d8;"><span style="font-weight: bold; font-size: 16px; margin-top: 8px; margin-bottom: 8px;">TOTAL ${formatter.format(
    totalPrice
  )}</span></td>`;
};

updateWebsite();
