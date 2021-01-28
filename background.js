const updateWebsite = () => {
  console.log('test');
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

  const divNotCreated = document.querySelector('.mouser-bom-total') === null;

  if (divNotCreated) {
    // Adds the Total cost to the HTML
    let entry = document.createElement('div');
    entry.innerHTML = `<div class="mouser-bom-total" style="text-align: center; background-color: #dff0d8;"><span style="font-weight: bold; font-size: 16px; margin-top: 8px; margin-bottom: 8px;" class="mouser-bom-total value">TOTAL ${formatter.format(
      totalPrice
    )}</span></div>`;

    // Insert a new row on top of the table
    document.querySelector('.bom.hidden-for-nojs').appendChild(entry);
  } else {
    document.querySelector(
      '.mouser-bom-total.value'
    ).innerText = `TOTAL ${formatter.format(totalPrice)}`;
  }
};

// updateWebsite();

window.mouserUpdateTotalTimeout = null;
document
  .querySelector('.bom-table') //.hidden-for-nojs')
  .addEventListener('DOMSubtreeModified', () => {
    if (window.mouserUpdateTotalTimeout !== null) {
      clearTimeout(window.mouserUpdateTotalTimeout);
    }
    window.mouserUpdateTotalTimeout = setTimeout(updateWebsite, 300);
  });
