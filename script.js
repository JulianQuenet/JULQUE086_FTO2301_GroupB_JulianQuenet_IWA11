//Order 1 query selectors
const root1 = document.querySelector('[data-key = "order1"]');
const biscuitsCount1 = (root1.querySelector(".biscuits dd").textContent = root1.dataset.biscuits);
const donutsCount1 = (root1.querySelector(".donuts dd").textContent = root1.dataset.donuts);
const pancakesCount1 = (root1.querySelector(".pancakes dd").textContent =root1.dataset.pancakes);

//Order 2 query selectors
const root2 = document.querySelector('[data-key="order2"]');
const biscuitsCount2 = (root2.querySelector(".biscuits dd").textContent =root2.dataset.biscuits);
const donutsCount2 = (root2.querySelector(".donuts dd").textContent =root2.dataset.donuts);
const pancakesCount2 = (root2.querySelector(".pancakes dd").textContent =root2.dataset.pancakes);

//Order 3 query selectors
const root3 = document.querySelector('[data-key="order3"]');
const biscuitsCount3 = (root3.querySelector(".biscuits dd").textContent =root3.dataset.biscuits);
const donutsCount3 = (root3.querySelector(".donuts dd").textContent =root3.dataset.donuts);
const pancakesCount3 = (root3.querySelector(".pancakes dd").textContent =root3.dataset.pancakes);

// Delivery statuses and amounts
const sent = "Delivered, zero awaiting order items";
const notSent1 = "Pending:"
const notSent = "Waiting delivery";
//order 1
const orderOne = ` ${biscuitsCount1}:Biscuits Still ${notSent} 
${donutsCount1}:Donuts Still ${notSent}
${pancakesCount1}:Pancakes Still ${notSent}`;
//Order 2
const orderTwo = ` ${biscuitsCount2}:Biscuits Still ${notSent} 
${donutsCount2}:Donuts Still ${notSent}
${pancakesCount2}:Pancakes Still ${notSent}`;

//Order 3
const orderThree = ` ${biscuitsCount3}:Biscuits Still ${notSent} 
${donutsCount3}:Donuts Still ${notSent}
${pancakesCount3}:Pancakes Still ${notSent}`;

//Fetching the span elements and replacing contents
const section1 = document.querySelector("section:nth-of-type(1)");
const section2 = document.querySelector("section:nth-of-type(2)");
const section3 = document.querySelector("section:nth-of-type(3)");

const status1 = section1.querySelector(".status");
const status2 = section2.querySelector(".status");
const status3 = section3.querySelector(".status");

root1.dataset.delivered === "true"?(status1.textContent = sent) : (status1.textContent = `${notSent1} ${orderOne}`);
root2.dataset.delivered === "true"?(status2.textContent = sent) : (status2.textContent = `${notSent1} ${orderTwo}`);
root3.dataset.delivered === "true"?(status3.textContent = sent) : (status3.textContent = `${notSent1} ${orderThree}`);

