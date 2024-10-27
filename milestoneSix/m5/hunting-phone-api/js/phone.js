

const loadPhone = async (searchText='oppo', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);

}


const displayPhones = (phones, isShowAll) => {
    // console.log(phones)

    // 1
    const phoneContainer = document.getElementById('phone-container')
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    // console.log(phones.length)
    
    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 6 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }

    // console.log('is show all', isShowAll)
    // display only first 6 phones if not show all
    if(!isShowAll){
        phones = phones.slice(0, 6)
    }


    phones.forEach(phone => {
        // console.log(phone);
        // 2 craete a div
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card bg-gray-700 p-10 shadow-xl`
        // 3 set inner html
        phoneCard.innerHTML = `
            <figure>
                <img
                src="${phone.image}"
                alt="Cell phone" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.brand}</h2>
                <p>${phone.phone_name} </p>
                <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `;
        //4 append child
        phoneContainer.appendChild(phoneCard);
    });

    // hide loading spinner
    toggleLoadingSpinner(false);

}

// 
const handleShowDetail = async (id) =>{
    // console.log('show details clicked', id)
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone)

}

// display show details
const showPhoneDetails = (phone) =>{
    console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
        <img src="${phone.image}" alt="Cell phone" />
        <p><span>Storage:</span> ${phone?.mainFeatures?.storage}</p>
        <p><span>Sensors:</span> ${phone.others?.GPS || 'No GPS available'}</p>
        <p><span>Sensors:</span> ${phone.others?.GPS ? phone.others.GPS : 'No GPS available in this device'}</p>
    `



    // show the modal
    show_details_modal.showModal()
}

// handle search button
const handleSearch = (isShowAll) =>{
    // console.log('search handle')
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    // console.log(searchText)
    loadPhone(searchText, isShowAll)
}


// spinner 
const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

// handle show all
const handleShowAll = () =>{
    handleSearch(true);
}


loadPhone();
