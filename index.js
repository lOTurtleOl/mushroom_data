let id = 3; // id of the index we have filled to

document.getElementById("add").addEventListener('click', (event) => { // grabs the add element and on click event, prevents refresh
    event.preventDefault();
    let table = document.getElementById('shrooms'); // assign table variable with table id
    let newRow = table.insertRow(); // assign newRow variable with insertRow() JS function
    newRow.classList.add(rowColor(getUses())); // give the new row a color based on the checked uses

    let newRowNumber = id + 1; // create a newRowNumber variable and assign it the next expected indexed value

    let cell1 = newRow.insertCell(0); // new var cell1 set to first index cell / cell1 html set to increasing row number based on index id
    cell1.innerHTML = `<th scope="row" id="thead-${newRowNumber}" class="text-center">${newRowNumber}</th>`; 
    cell1.classList.add("text-center"); // center new text in each cell
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = document.getElementById('species').value; // cell2/3/4 html set to value input for respective label
    cell2.classList.add("text-center");
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = document.getElementById('origin').value;
    cell3.classList.add("text-center");
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = getUses(); // set html to value returned by getUses()
    cell4.classList.add("text-center");

    id++;

    // Set all form values back to undefined for convenience
    document.getElementById('species').value = ''; 
    document.getElementById('origin').value = '';
    document.getElementById('culinary').checked = undefined;
    document.getElementById('medicinal').checked = undefined;
    document.getElementById('toxic').checked = undefined;
})

// function to check checkboxes and return each value checked
function getUses() {
    let culinary = document.getElementById('culinary').checked;
    let medicinal = document.getElementById('medicinal').checked;
    let toxic = document.getElementById('toxic').checked;

    let uses = [];

    if (culinary) {
        uses.push('Culinary');
    } 
    if (medicinal) {
        uses.push('Medicinal');
    }
    if (toxic) {
        uses.push('Toxic');
    }
    return uses.join(', ');
    
}

// function using uses array to color row based on checkboxes by importance
function rowColor(uses) {
    if (uses.includes('Toxic')) {
        return "table-danger";
    } else if (uses.includes('Culinary')) {
        return "table-warning";
    } else if (uses.includes('Medicinal')) {
        return "table-success";
    }
}

