
// Select DOM elements
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

// Add event listener for the "Add" button
button.addEventListener("click", () => {
    const taskValue = input.value.trim(); // Trim whitespace
    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.innerText = taskValue;

    // Create a "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("Delete"); // Align with CSS class

    // Append the "Delete" button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the unordered list
    ul.appendChild(listItem);

    // Log the input value and clear the input field
    console.log(`Added: ${taskValue}`);
    input.value = "";
});

// Add event listener for the unordered list (event delegation for delete functionality)
ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("Delete")) {
        // Remove the corresponding list item
        const listItem = event.target.parentElement;
        listItem.remove();

        // Log the delete action
        console.log("Deleted");
    }
});
