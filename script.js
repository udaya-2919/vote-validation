 // Access DOM elements
 let nameInput = document.getElementById('nameInput');
 let ageInput = document.getElementById('ageInput');
 let nationalityInput = document.getElementById('nationalityInput');
 let idType = document.getElementById('idType');
 let idNumber = document.getElementById('idNumber');
 let checkBtn = document.getElementById('checkBtn');
 let result = document.getElementById('result');

// Add event handler for button click
function check() 
{
    let name = nameInput.value;
    let age = ageInput.value;
    let nationality = nationalityInput.value;
    let selectedIdType = idType.value;
    let idNum = idNumber.value;

    // Validation of empty fields
    if (name=="" || age=="" || nationality=="" || selectedIdType=="" || idNum=="") 
    {
        result.textContent = "Please fill all fields.";
        result.style.color = "red";
        return;
    }

    // Validation of nationality
    if (nationality.toLowerCase() !== "indian") 
    {
        result.textContent = "You must be an Indian national to be eligible.";
        result.style.color = "red";
        return;
    }

    // Validation of age
    if (age < 18) 
    {
        result.textContent = "You are not eligible to vote. Must be at least 18 years old.";
        result.style.color = "red";
        return;
    }

    if(selectedIdType ==="aadhar" && idNum.length!=12)
    {
        result.textContent = "Invalid ID number length for aadhar id type.";
        result.style.color = "red";
    }
    else if(selectedIdType ==="pan" && idNum.length!=10)
    {
        result.textContent = "Invalid ID number length for pan id type.";
        result.style.color = "red";
    }
    else if(selectedIdType ==="voter" && idNum.length!=10)
    {
        result.textContent = "Invalid ID number length for pan id type.";
        result.style.color = "red";
    }
    // If all validations pass
    else
    {
        result.textContent = "You are eligible to vote!";
        result.style.color = "green";
    }
}