function checkQuantityTextbox(qtyTextbox) {
    const qtyAva = parseInt(qtyTextbox.dataset.qtyAva); // Get available quantity from dataset
    const qty = parseInt(qtyTextbox.value); // Get entered quantity
    const errorSpan = document.getElementById(qtyTextbox.id + "_errors");
    // Check if entered quantity exceeds available quantity
    if (qty > qtyAva) { 
     // Changes the error message to the following
      errorSpan.innerHTML = `We don't have ${qty} available`;
      // Sets textbox value to available quantity
      qtyTextbox.value = qtyAva; 
      // Changes textbox border color to red when value is > qtyAva
      qtyTextbox.style.borderColor = "red"; 
    } 
    // Clears error message and changes border color back to default
    else { 
      errorSpan.innerHTML = "";
      qtyTextbox.style.borderColor = "";
    }
 };