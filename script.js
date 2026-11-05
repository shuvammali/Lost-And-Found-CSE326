// Get the form and report display area
const itemForm = document.getElementById("itemForm");
const itemList = document.getElementById("itemList");
const filterType = document.getElementById("filterType");
const message = document.getElementById("message");

// Load saved reports from the browser
let reports = JSON.parse(localStorage.getItem("lpuReports")) || [];

// Display reports when the page opens
displayReports();

// Run this code when the form is submitted
itemForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Create an object using the form values
    const newReport = {
        type: document.getElementById("reportType").value,
        name: document.getElementById("itemName").value.trim(),
        category: document.getElementById("category").value,
        location: document.getElementById("location").value.trim(),
        date: document.getElementById("itemDate").value,
        description: document.getElementById("description").value.trim(),
        contact: document.getElementById("contact").value.trim()
    };

    // Add the new report to the array
    reports.push(newReport);

    // Save reports in the browser
    localStorage.setItem("lpuReports", JSON.stringify(reports));

    // Show a success message and clear the form
    message.textContent = "Your report has been submitted successfully!";
    itemForm.reset();

    // Refresh the list
    displayReports();
});

// Change the list when the filter changes
filterType.addEventListener("change", displayReports);

// This function displays reports on the page
function displayReports() {
    itemList.innerHTML = "";

    const selectedType = filterType.value;
    let filteredReports = reports;

    if (selectedType !== "All") {
        filteredReports = reports.filter(function(report) {
            return report.type === selectedType;
        });
    }

    if (filteredReports.length === 0) {
        itemList.innerHTML = "<p>No reports found.</p>";
        return;
    }

    filteredReports.forEach(function(report) {
        const card = document.createElement("article");
        card.className = "item-card";

        // Use textContent so user-entered text is displayed safely
        const heading = document.createElement("h3");
        heading.textContent = report.name;

        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = report.type;

        const category = document.createElement("p");
        category.textContent = "Category: " + report.category;

        const location = document.createElement("p");
        location.textContent = "Location: " + report.location;

        const date = document.createElement("p");
        date.textContent = "Date: " + report.date;

        const description = document.createElement("p");
        description.textContent = "Description: " + (report.description || "Not provided");

        const contact = document.createElement("p");
        contact.textContent = "Contact: " + report.contact;

        card.appendChild(heading);
        card.appendChild(tag);
        card.appendChild(category);
        card.appendChild(location);
        card.appendChild(date);
        card.appendChild(description);
        card.appendChild(contact);

        itemList.appendChild(card);
    });
}
