let currentTab= 'all';
const tabActive = ['bg-navy', 'border-navy', 'text-white'];
const tabInactive = ['bg-transparent', 'border-slate-200', 'text-black']


//Job Cards er nicher gulu
const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('reject-container');
//console.log(allContainer, interviewContainer, rejectedContainer);


// Tabs Heading Button
function switchTab(tab){
    //console.log(tab);
    const tabs = ['all', 'interview', 'rejected'];
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

    // all e click korle hidden remove hobe
    if (tab==='all') {
        allContainer.classList.remove('hidden');
    }else if (tab==='interview') {
        interviewContainer.classList.remove('hidden');
    }else if (tab==='rejected') {
        rejectedContainer.classList.remove('hidden');
    }
}

//all ke selected rakhar jonne
switchTab(currentTab);