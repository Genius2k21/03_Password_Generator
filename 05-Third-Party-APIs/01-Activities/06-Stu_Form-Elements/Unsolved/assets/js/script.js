var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event){
     // Prevent the default behavior
  event.preventDefault();  
}

var shoppingItem = $('input[name="shopping-input"]').val();

if (!shoppingItem){
    console.log('No, shopping item filled out in form!');
    //return;
}
//print to the page
shoppingListEl.append('<li>'+ shoppingItem + '</li>');

$('input[name="shopping-input"]').val('');

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingformEl.on('submit', handleFormSubmit);