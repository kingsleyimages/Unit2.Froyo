function getOrder() {
  // get order of froyo flavors
  let order = prompt(
    'Enter the flavors you would like separated by commas (no spaces).'
  );
  // convert order string into an array
  let orderArray = order.split(',');
  // console.log(typeof orderArray);
  // console.log(orderArray);

  // get unique flavors in order
  let flavors = [];
  for (i = 0; i < orderArray.length; i++) {
    if (!flavors.includes(orderArray[i])) {
      flavors.push(orderArray[i]);
    }
  }

  // create object to store flavors and their quantity
  const fullOrder = {};

  //count references in original array and assign to object
  count = 0;
  for (i = 0; i < flavors.length; i++) {
    for (j = 0; j < orderArray.length; j++) {
      if (orderArray[j] === flavors[i]) {
        count++;
      }
      fullOrder[flavors[i]] = count;
    }
    //reset count for next flavor
    count = 0;
  }
  console.log(fullOrder);
}

getOrder();
