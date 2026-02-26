let thrivingList = [];
let strugglingList = [];

let total = document.getElementById('total');
let strugglingCount = document.getElementById('strugglingCount');
let thrivingCount = document.getElementById('thrivingCount');
//console.log(total);

const allCardSection = document.getElementById('allCards');
// console.log(allCardSection.children.length);

const mainContainer = document.querySelector('main');
console.log(mainContainer);

function calculateCount(){
    total.innerText= allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}
calculateCount()

// main er 3 ti button er color click korle change hobe
const allFilterBtn = document.getElementById('all-filter-btn');  
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');  


// main er button golu dorlam
function toggleStyle(id){
    //console.log('click',id);

    // adding gray bg for all
    allFilterBtn.classList.remove('bg-black', 'text-white');
    thrivingFilterBtn.classList.remove('bg-black' ,'text-white');
    strugglingFilterBtn.classList.remove('bg-black', 'text-white');

    // if any button has black then remove
    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    thrivingFilterBtn.classList.add('bg-gray-300' ,'text-black');
    strugglingFilterBtn.classList.add('bg-gray-300', 'text-black');
    //console.log(id)

    const selected = document.getElementById(id);
    //console.log(selected);

    // adding black bg for current button
    selected.classList.remove('bg-gray-300' ,'text-black');
    selected.classList.add('bg-black' ,'text-white');
   
}

// thriveStruggledown
//const thriveStruggledown = document.getElementById('thrive-struggle-down');

mainContainer.addEventListener('click', function(event){
    console.log(event.target.classList.contains('thriving-btn'));

    if (event.target.classList.contains('thriving-btn')) {
         const parentNode = event.target.parentNode.parentNode;
   const plantName = parentNode.querySelector('.plantName').innerText;
   const latinName = parentNode.querySelector('.plantName').innerText;

   const light = parentNode.querySelector('.light').innerText;
   const water = parentNode.querySelector('.water').innerText;

   const states = parentNode.querySelector('.states').innerText;
   const notes = parentNode.querySelector('.notes').innerText;
   //console.log(plantName, latinName, light, water, states, notes);

   //Object banabu and push korbo
   const cardInfo = {
    plantName, 
    latinName, 
    light, 
    water, 
    states, 
    notes
   }
   //console.log(cardInfo);

  const plantExist = thrivingList.find(item=> item.plantName ===cardInfo.plantName);
  if (!plantExist) {
    thrivingList.push(cardInfo);
  }
 //console.log(thrivingList);
 renderThriving ()
    }
  
})

//Element create korbo
const filterSection = document.getElementById('Filtered-section');
function renderThriving (){
    filterSection.innerHTML = '';

    for (let thrive of thrivingList){
        console.log(thrive)
        let div = document.createElement('div');
        div.className = 'cord flex justify-between border p-8';
        div.innerHTML = `
        <div class="space-y-6">
                <!-- part -1 -->
                <div class="">
                    <p class="plantName text-4xl">Plant Name 1</p>
                    <p class="latinName">Latin Name </p>
                </div>
                <!-- part -2 -->
                <div class="flex gap-2">
                    <p class="light bg-gray-200 px-5">Bright Indicate</p>
                    <p class="water bg-gray-200 px-5">Weekly</p>
                </div>
                <!-- part -3 -->
                 <div class="">
                    <p class="states">Not Applicable.</p>
                    <p class="notes">New leaf unfurling by the east window.</p>
                 </div>
                
                <div id="" class="flex gap-5">
                    <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                    <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                </div>
            </div>
            <!--Main part-2 -->
            <div class="">
                <button class="btn-delete bg-red-200 text-red-500 px-4 py-2">Delete</button>
            </div>

        `
    }
}