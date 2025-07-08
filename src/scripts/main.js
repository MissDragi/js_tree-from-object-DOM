'use strict';

const createdTree = document.createElement('div');

createdTree.id = 'tree';
document.body.appendChild(createdTree);

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const key in food) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    for (const subKey in food[key]) {
      const subUl = document.createElement('ul');
      const subLi = document.createElement('li');

      subLi.textContent = subKey;
      subUl.appendChild(subLi);
      li.appendChild(subUl);

      for (const subSubKey in food[key][subKey]) {
        const subSubLi = document.createElement('li');
        const subSubUl = document.createElement('ul');

        subLi.appendChild(subSubUl);
        subSubLi.textContent = subSubKey;

        subSubUl.appendChild(subSubLi);
      }
    }
  }
}

createTree(tree, food);
