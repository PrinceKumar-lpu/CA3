document.addEventListener("DOMContentLoaded", () => {
    const appointmentForm = document.getElementById("appointment-form");
    const appointmentsList = document.getElementById("appointments-list");

    appointmentForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the form values
        const patientName = document.getElementById("patient-name").value;
        const appointmentDate = document.getElementById("appointment-date").value;
        const appointmentTime = document.getElementById("appointment-time").value;
        const doctorName = document.getElementById("doctor-name").value;
        const disease = document.getElementById("disease-select").value;

        // Create a new appointment entry
        const appointmentEntry = document.createElement("div");
        appointmentEntry.classList.add("appointment");
        appointmentEntry.innerHTML = `
            <p><strong>Patient Name:</strong> ${patientName}</p>
            <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
            <p><strong>Appointment Time:</strong> ${appointmentTime}</p>
            <p><strong>Doctor:</strong> ${doctorName}</p>
            <p><strong>Common Disease:</strong> ${disease || "N/A"}</p>
            <button class="cancel-btn">Cancel Appointment</button>
        `;

        // Add the new appointment to the list
        appointmentsList.appendChild(appointmentEntry);

        // Reset the form fields
        appointmentForm.reset();

        // Add event listener for the cancel button
        const cancelButton = appointmentEntry.querySelector(".cancel-btn");
        cancelButton.addEventListener("click", () => {
            appointmentsList.removeChild(appointmentEntry);
        });
    });
});