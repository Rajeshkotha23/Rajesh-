const supportPopup = document.getElementById('support-popup');
const openSupportIcon = document.getElementById('support-icon');
const closeSupportPopupButton = document.getElementById('close-support-popup');
const ticketForm = document.getElementById('ticket-form');
const submitTicketButton = document.getElementById('submit-ticket-button');
const ticketTypeSelect = document.getElementById('ticket-type');
const descriptionTextarea = document.getElementById('description');

openSupportIcon.addEventListener('click', () => {
    supportPopup.style.display = 'block';
});

closeSupportPopupButton.addEventListener('click', () => {
    supportPopup.style.display = 'none';
});

// Function to send a ticket to the backend
async function sendTicketToBackend(ticketData) {
    try {
        const response = await fetch('/your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ticketData),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Ticket sent to the backend:', responseData);
        } else {
            console.error('Failed to send the ticket to the backend.');
        }
    } catch (error) {
        console.error('An error occurred while sending the ticket:', error);
    }
}

ticketForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the selected ticket type and description
    const selectedTicketType = ticketTypeSelect.value;
    const description = descriptionTextarea.value;

    // Prepare the ticket data for submission
    const ticketData = {
        type: selectedTicketType,
        description: description,
    };

    // Send the ticket data to the backend
    sendTicketToBackend(ticketData);

    // Reset the form
    ticketForm.reset();

    // Close the support popup
    supportPopup.style.display = 'none';
});
