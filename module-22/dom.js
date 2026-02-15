const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for (const li of liCollection) {
    // console.log(li.innerText);
}

const foodTitleH1 = document.getElementById('food-title');
// console.log(foodTitleH1.innerText='FOOD I HAVE');


// Parent Node
const mainContainer = document.getElementById('main-container');
//console.log(mainContainer);

//2. Create Child node
const placesSection = document.createElement('section');

// Create h1
const h1 = document.createElement('h1');
h1.innerText = ('Places I Want to Visit');
placesSection.appendChild(h1)

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'bandorban';
ul.appendChild(li1);
placesSection.appendChild(ul);

const li2 = document.createElement('li');
li2.innerText = 'sundorban';
ul.appendChild(li2);
placesSection.appendChild(ul);

//3. Append PlaceSection to mainContainer
mainContainer.appendChild(placesSection);


// Easier to create HTML
const booksSection = document.createElement('section');

booksSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
<li>physics</li>
<li>CHE</li>
<li>ME</li>
<li>CE</li>

</ul>
`

mainContainer.appendChild(booksSection);