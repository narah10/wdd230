const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

/*create an li element
create a delete button
populate the li elements textContent or innerHTML with the input
populate the button textContent with an ❌
append the li element with the delete button
append the list element with the li element just created and appended with text and the delete button
add an event listener to the delete button that removes the li element when clicked
send the focus to the input element
clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.*/

button.addEventListener('click', function() {
    let inputContent = input.value;
    input.value = "";
    

    const listContent = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    listContent.textContent = inputContent;
    deleteButton.textContent = '❌';
    listContent.appendChild(deleteButton);
    list.appendChild(listContent);
    deleteButton.addEventListener('click', function() {
        list.removeChild(listContent);
    })

    input.focus();
    
})