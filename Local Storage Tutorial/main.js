function store() { //stores items in the localStorage. Invoked by the SubmitButton
    let brand = document.getElementById('carBrand').value;//Gets the user input after Submit button is clicked
    let price = document.getElementById('carPrice').value;//Gets input from the user
    let key = document.getElementById('key').value; //gets the key from the user

    const car = {//The above user input values are then passed to the car object
        brand: brand,
        price: price,
    }

    window.localStorage.setItem(key, JSON.stringify(car));//setItem method stores the car object values in local storage 
    //converting object to string
}


function retrieveRecords() { //retrieves items in the localStorage. Invoked by the retrieveButton
    console.log("retrieve records");
    let key = document.getElementById('retrieveKey').value;
    let records = window.localStorage.getItem(key);//This method fetches items from the localStorage using the getItem function
    let paragraph = document.createElement("p");//creates a new paragraph component in our web page
    let infor = document.createTextNode(records);//helps create the text that will be displayed to the user
    paragraph.appendChild(infor);//The text node is then added to the paragraph tag
    let element = document.getElementById("retrieve");//Shows these components in a specific place on the web page 
    element.appendChild(paragraph);//Shows these components in a specific place on the web page 
}


function removeItem() {  //deletes item from localStorage. Inoked by the removeButton
    var key = document.getElementById('removeKey').value;
    localStorage.removeItem(key)
    console.log("remove items");
}


function clearStorage() { //clears the entire localStorage. Invoked by the clearButton
    localStorage.clear()
    console.log("clear records");
}

//onClick property of all the buttons and onSubmit calls these functions when the webpage loads
window.onload = function () { //ensures the page is loaded before functions are executed.The functions will only be accessible after the page has finished loading
    document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}