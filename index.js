// for first card 
let count = 0;
document.getElementById('first-card').addEventListener('click', function () {
  const productName = document.getElementById('first-name').innerText;

  const productPrice = document.getElementById('first-price').innerText;

  const procuctQuantity = document.getElementById('first-quantity').innerText;

  const totalPRice = productPrice * procuctQuantity;
  console.log(productName, productPrice, procuctQuantity, totalPRice)

  count = count + 1;

  const tableContainer = document.getElementById('table-container')
  const tr = document.createElement('tr');
  tr.innerHTML = `<th>${count}</th>
 
  <td>${productName}</td>
  <td>${productPrice}</td>
  <td>${procuctQuantity}</td>
  <td>${totalPRice}</td>`

  tableContainer.appendChild(tr)

})
