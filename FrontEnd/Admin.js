function changePage(pageNumber) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(`page${pageNumber}`).classList.add('active');
}
// SYSTEM-CODE

// Function to fetch system metrics and statistics from the backend API
async function fetchMetricsFromAPI() {
try {
const response = await fetch('your-api-endpoint-for-metrics');
if (!response.ok) {
    throw new Error('Network response was not ok');
}
const data = await response.json();
return data;
} catch (error) {
console.error('Error fetching metrics:', error);
return [];
}
}

// Function to update metrics with data from the API
async function updateMetrics() {
const metrics = await fetchMetricsFromAPI();
if (metrics.length > 0) {
const metricElements = document.querySelectorAll('.metric');
metricElements.forEach((metricElement, index) => {
    metricElement.querySelector('h2').textContent = metrics[index].name;
    metricElement.querySelector('p').textContent = metrics[index].value;
});
}
}

// Call the updateMetrics function to populate the initial metrics
updateMetrics();

// USER-ENGINEER-CODE

const userTable = document.getElementById("user-table");
const addUserForm = document.getElementById("add-user-form");

// Sample user and engineer data
const users = [
{ id: 1, name: "User 1", type: "User" },
{ id: 2, name: "User 2", type: "User" },
];
const engineers = [
{ id: 1, name: "Engineer 1", type: "Engineer" },
{ id: 2, name: "Engineer 2", type: "Engineer" },
];

// Render users and engineers
renderUsers(users);
renderUsers(engineers);

addUserForm.addEventListener("submit", (event) => {
event.preventDefault();

const name = addUserForm.name.value;
const type = addUserForm.type.value;

if (name && type) {
const newUser = {
    id: users.length + engineers.length + 1,
    name,
    type,
};
if (type === "User") {
    users.push(newUser);
} else {
    engineers.push(newUser);
}

// Clear the form
addUserForm.reset();

// Re-render the user table
renderUsers(users);
renderUsers(engineers);
}
});

function renderUsers(data) {
const tbody = userTable.querySelector("tbody");

// Clear existing rows
tbody.innerHTML = "";

data.forEach((user) => {
const row = document.createElement("tr");
row.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.type}</td>
    <td>
        <button onclick="editUser(${user.id})">Edit</button>
        <button onclick="deleteUser(${user.id})">Delete</button>
    </td>
`;

tbody.appendChild(row);
});
}

function editUser(userId) {
const userToEdit = getUserById(userId);
if (userToEdit) {
const newName = prompt("Enter the new name for the user:", userToEdit.name);
const newType = prompt("Enter the new type for the user:", userToEdit.type);

if (newName && newType) {
    userToEdit.name = newName;
    userToEdit.type = newType;

    // Re-render the user table to reflect the changes
    renderUsers(users);
    renderUsers(engineers);
}
}
}

function getUserById(userId) {
// Search for the user in both the "users" and "engineers" arrays
const user = users.find((user) => user.id === userId);
if (user) {
return user;
}

const engineer = engineers.find((engineer) => engineer.id === userId);
if (engineer) {
return engineer;
}

// If the user is not found in either array, return null
return null;
}


function deleteUser(userId) {
// Find the user's index in the users array
const userIndex = users.findIndex((user) => user.id === userId);

if (userIndex !== -1) {
users.splice(userIndex, 1); // Remove the user from the users array
renderUsers(users); // Re-render the user table
} else {
// If the user was not found in the users array, find it in the engineers array
const engineerIndex = engineers.findIndex((user) => user.id === userId);

if (engineerIndex !== -1) {
    engineers.splice(engineerIndex, 1); // Remove the user from the engineers array
    renderUsers(engineers); // Re-render the user table
} else {
    console.log("User not found.");
}
}
}

// TICKET-CODE
const openTicketFormButton = document.getElementById("open-ticket-form");
const ticketForm = document.getElementById("ticket-form");
const closeTicketFormButton = document.getElementById("close-ticket-form");
const submitTicketButton = document.getElementById("submit-ticket");
const ticketList = document.getElementById("ticket-list");
const ticketRows = document.getElementById("ticket-rows");

// Event listeners
openTicketFormButton.addEventListener("click", () => {
ticketForm.style.display = "block";
});

closeTicketFormButton.addEventListener("click", () => {
ticketForm.style.display = "none";
});

submitTicketButton.addEventListener("click", (event) => {
event.preventDefault();
createTicket();
});

// Sample ticket data
const tickets = [];

// Functions
function createTicket() {
const title = document.getElementById("title").value;
const description = document.getElementById("description").value;
const status = document.getElementById("status").value;

if (title && description) {
const newTicket = {
    title,
    description,
    status,
};

tickets.push(newTicket);
renderTickets();
clearForm();
ticketForm.style.display = "none";
}
}

function clearForm() {
document.getElementById("title").value = "";
document.getElementById("description").value = "";
document.getElementById("status").value = "Open";
}

function renderTickets() {
ticketRows.innerHTML = "";
tickets.forEach((ticket, index) => {
const row = document.createElement("tr");
row.innerHTML = `
    <td>${ticket.title}</td>
    <td>${ticket.description}</td>
    <td>${ticket.status}</td>
    <td>
        <button onclick="editTicket(${index})">Edit</button>
        <button onclick="deleteTicket(${index})">Delete</button>
    </td>
`;

ticketRows.appendChild(row);
});
}

function editTicket(index) {
// Find the ticket to edit
const ticketToEdit = tickets[index];

// Populate the form with ticket details
document.getElementById("title").value = ticketToEdit.title;
document.getElementById("description").value = ticketToEdit.description;
document.getElementById("status").value = ticketToEdit.status;

// Display the form for editing
ticketForm.style.display = "block";

// Add a submit button for editing
const editSubmitButton = document.createElement("button");
editSubmitButton.textContent = "Update";
editSubmitButton.onclick = () => {
updateTicket(index);
};
submitTicketButton.parentNode.replaceChild(editSubmitButton, submitTicketButton);

// Store the edited ticket index for later
ticketForm.dataset.editIndex = index;
}

function updateTicket(index) {
const title = document.getElementById("title").value;
const description = document.getElementById("description").value;
const status = document.getElementById("status").value;

if (title && description) {
// Update the ticket at the specified index
const updatedTicket = {
    title,
    description,
    status,
};
tickets[index] = updatedTicket;

// Re-render the ticket list
renderTickets();
clearForm();
ticketForm.style.display = "none";

// Restore the original submit button
const submitButton = document.createElement("button");
submitButton.textContent = "Create";
submitButton.onclick = () => {
    createTicket();
};
submitTicketButton.parentNode.replaceChild(submitButton, submitTicketButton);
}
}


function deleteTicket(index) {
tickets.splice(index, 1);
}

// SETTINGS CODE
const themeSelect = document.getElementById("theme");
const languageSelect = document.getElementById("language");
const notificationsCheckbox = document.getElementById("notifications");
const saveButton = document.getElementById("save-settings");

// Load settings from local storage (or a database)
const savedSettings = JSON.parse(localStorage.getItem("settings")) || {};

// Initialize settings from saved values
themeSelect.value = savedSettings.theme || "light";
languageSelect.value = savedSettings.language || "english";
notificationsCheckbox.checked = savedSettings.notifications || false;

// Save settings when the "Save Settings" button is clicked
saveButton.addEventListener("click", () => {
const settings = {
theme: themeSelect.value,
language: languageSelect.value,
notifications: notificationsCheckbox.checked,
};

// Save settings to local storage (or a database)
localStorage.setItem("settings", JSON.stringify(settings));
alert("Settings saved!");
});
