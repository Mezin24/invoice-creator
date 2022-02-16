const btns = document.querySelector('.card-btns');
const list = document.querySelector('.card-list-body');
const totalEl = document.querySelector('.total');

const price = {
  wash: 10,
  mow: 20,
  pull: 30,
};

const order = [];

let total = 0;

const displayTotal = (amount) => (totalEl.textContent = `$${amount}`);
displayTotal(total);

btns.addEventListener('click', (event) => {
  const target = event.target.id;

  if (order.includes(target)) return;

  order.push(target);
  total += price[target];

  list.innerHTML += `
    <li class="card-list-item" data-task="${target}">
        <p>${
          event.target.textContent.split(':')[0]
        }</p><button class="remove">Remove</button>
        <p class="price"><span>$</span>${price[target]}</p>
    </li>
  `;

  displayTotal(total);
});

list.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.classList.contains('remove')) return;

  const parentEl = target.closest('li');
  const task = parentEl.getAttribute('data-task');
  total -= price[task];
  displayTotal(total);

  parentEl.remove();
  const index = order.findIndex((el) => el === task);
  order.splice(index, 1);

  console.log(parentEl.getAttribute('data-task'));
});
