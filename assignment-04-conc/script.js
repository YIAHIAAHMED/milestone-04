let currentTab= 'all';
const tabActive = ['bg-navy', 'border-navy', 'text-white'];
const tabInactive = ['bg-transparent', 'border-slate-200', 'text-black']


//Job Cards er nicher gulu
const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('reject-container');
//console.log(allContainer, interviewContainer, rejectedContainer);

// empty stat
const emptyStat = document.getElementById('empty-state');


// Tabs Heading Button
function switchTab(tab){
    //console.log(tab);
    const tabs = ['all', 'interview', 'rejected'];
    currentTab = tab;
    //button 3ti dhorbo
    for (const t of tabs){
        const tabName = document.getElementById('tab-'+t);
        //console.log(tabName);
        if (t===tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }

    // sudhu jeta te click korbo setar hidden hobe eta korar jonne
    const pages = [allContainer, interviewContainer, rejectedContainer];
    for(const section of pages){
        section.classList.add('hidden');
    }

    // empty stat
    emptyStat.classList.add('hidden')

    // all e click korle hidden remove hobe
    if (tab==='all') {
        allContainer.classList.remove('hidden');
        if (allContainer.children.length<1) {
            emptyStat.classList.remove('hidden');
        }
    }else if (tab==='interview') {
        interviewContainer.classList.remove('hidden');
        if (interviewContainer.children.length<1) {
            emptyStat.classList.remove('hidden');
        }
    }else if (tab==='rejected') {
        rejectedContainer.classList.remove('hidden');
        if (rejectedContainer.children.length<1) {
            emptyStat.classList.remove('hidden');
        }
    }

    updateStat()
}

//stats-card er count
const statTotal = document.getElementById('stat-total');
const statInterview = document.getElementById('stat-interview');
const statReject = document.getElementById('stat-reject');
const statAvailable = document.getElementById('available');

//total count dhorci
statTotal.innerText = allContainer.children.length;

//all ke selected rakhar jonne
switchTab(currentTab);

// je je button e click korbo sekhane add event listener lagate hoyece/hoy
document.getElementById('jobs-container').addEventListener('click', function(event){
    //console.log(event.target);
    const clickedElement = event.target;
    // full div ke dhorar jonne prothom ti 2ti button er div tarpore ti dlete button bade then, then full div
    // but eta dile hoche na karon delete e click korle all job card show kore 
    //console.log(clickedElement.parentNode.parentNode.parentNode.parentNode);

    // for solution above this problem
    // closest mane tar upore jeta pabe seta dhorbe
    const card = clickedElement.closest('.card');
    const parent = card.parentNode;
    //console.log(card);

    // not applicable change hobe
    const status = card.querySelector('.status');

    if (clickedElement.classList.contains('interview')) {
       //console.log('interview Clicked');
       status.innerText = 'Interviewed';
       interviewContainer.appendChild(card);
       //updateStat()
    }else if (clickedElement.classList.contains('rejected')) {
        //console.log('Rejected Clicked');
        status.innerText = 'Rejected';
        rejectedContainer.appendChild(card);
        //updateStat()
    }else if (clickedElement.classList.contains('delete')) {
        //console.log('Delete Clicked');

        // delete e click korle delete hobe
        parent.removeChild(card);
        //updateStat()
    }
    updateStat()
});

// udate stat count
function updateStat(){
    // statTotal.innerText = allContainer.children.length;
    // statInterview.innerText = interviewContainer.children.length;
    // statReject.innerText = rejectedContainer.children.length;

    // object nilam sob gulu use korar jonne
    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length
    };

    statTotal.innerText = counts['all'];
    statInterview.innerText = counts['interview'];
    statReject.innerText = counts['rejected'];
    statAvailable.innerText = counts[currentTab];

    // no jobs available properly show kora
    if (counts[currentTab]<1) {
        emptyStat.classList.remove('hidden');
    }else{
        emptyStat.classList.add('hidden');
    }

}
updateStat()