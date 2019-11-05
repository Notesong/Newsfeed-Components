/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  { link: 'Students', address: 'students.html' },
  { link: 'Faculty', address: 'faculty.html' },
  { link: "What's New", address: 'whatsnew.html' },
  { link: 'Tech Trends', address: 'trends.html' },
  { link: 'Music', address: 'music.html' },
  { link: 'Log Out', address: 'logout.html' }
];

/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.
  
*/

function createMenu(arr) {
  // main menu div setup
  const menu = document.createElement('div');
  menu.classList.add('menu');

  // unordered list 'ul' setup
  const unorderedList = document.createElement('ul');
  menu.appendChild(unorderedList);

  // create all list items from array
  arr.forEach(item => {
    const listItem = document.createElement('li');
    unorderedList.appendChild(listItem);
    const link = document.createElement('a')
    listItem.appendChild(link);
    link.textContent = item.link;
    link.href = item.address;
  });

  // menu functionality
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    if(menu.classList.contains('menu--open')) {
      TweenLite.to(".menu", 1, {left:'0', ease:Power2.easeInOut});
    } else {
      TweenLite.to(".menu", 1, {left:'-350', ease:Power2.easeInOut});
    }
    
  });

  return menu;
}

const menuParentComponent = document.querySelector('.header');
const newMenu = createMenu(menuItems);
menuParentComponent.prepend(newMenu);