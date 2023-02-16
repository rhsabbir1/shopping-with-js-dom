// for first card 
let count = 0;

function showData (productName,productPrice,procuctQuantity,totalPRice){
  count = count + 1;
  const tableContainer = document.getElementById('table-container')
  const tr = document.createElement('tr');
  tr.innerHTML = `<th>${count}</th>
  <td>${productName}</td>
  <td>${productPrice}</td>
  <td>${procuctQuantity}</td>
  <td>${totalPRice}</td>`

  tableContainer.appendChild(tr)
}

function getAllData(){
  
}

// for first card 
document.getElementById('first-card').addEventListener('click', function () {
  const productName = document.getElementById('first-name').innerText;

  const productPrice = document.getElementById('first-price').innerText;

  const procuctQuantity = document.getElementById('first-quantity').innerText;

  const totalPRice = parseInt(productPrice) * parseInt(procuctQuantity);
  // console.log(productName, productPrice, procuctQuantity, totalPRice)

  // count = count + 1;

  showData(productName,productPrice, procuctQuantity,totalPRice)
  // const tableContainer = document.getElementById('table-container')
  // const tr = document.createElement('tr');
  // tr.innerHTML = `<th>${count}</th>
 
  // <td>${productName}</td>
  // <td>${productPrice}</td>
  // <td>${procuctQuantity}</td>
  // <td>${totalPRice}</td>`

  // tableContainer.appendChild(tr)

})

// for second card 

document.getElementById('second-card').addEventListener('click', function(e){
  // const pName = e.target.nodelist.children[0]
  const pName =e.target.parentNode.parentNode.children[0].innerText;
  const pPrice =e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity =e.target.parentNode.parentNode.children[3].children[0].innerText;

  const totalPrice = parseInt(pPrice) + parseInt(pQuantity)
  console.log(pName,pPrice,pQuantity,totalPrice)


  showData(pName,pPrice,pQuantity,totalPrice)
})



// for second card 

document.getElementById('third-card').addEventListener('click', function () {
  const productName = document.getElementById('third-title').innerText;

  const productPrice = document.getElementById('third-price').innerText;

  const procuctQuantity = document.getElementById('third-quantity').innerText;

  const totalPRice = parseInt(productPrice) - parseInt(procuctQuantity);
  

  showData(productName,productPrice, procuctQuantity,totalPRice)

})


