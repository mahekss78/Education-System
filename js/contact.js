// ===============================
// CONTACT MANAGEMENT – SPA READY
// ===============================

// Sample contact data
window.contactData = [
    { name: "Dr. Priya Sharma", designation: "Principal", institution: "Global Institute", mobile: "+91-93820476254", email: "priya@gie.edu", location: "Bengaluru, India", group: "primary" },
    { name: "Mr. Rahul Verma", designation: "Principal", institution: "City Polytechnic College", mobile: "+91-93820476254", email: "rahul@cpc.edu", location: "Chennai, India", group: "primary" },
    { name: "Ms. Anjali Singh", designation: "Principal", institution: "Apex College", mobile: "+91-93820476254", email: "anjali@apex.edu", location: "Noida, India", group: "academic" },
    { name: "Prof. Alok Gupta", designation: "Dean", institution: "Regional Technical Institute", mobile: "+91-93820476254", email: "alok@rti.edu", location: "Hyderabad, India", group: "admin" },
    { name: "Dr. Smita Rao", designation: "Principal", institution: "Innovate Tech Campus", mobile: "+91-93820476254", email: "smita@itc.edu", location: "Bengaluru, India", group: "academic" },
    { name: "Mr. David Lee", designation: "Principal", institution: "Shimla University", mobile: "+91-93820476254", email: "david@su.edu", location: "Shimla, India", group: "primary" },
    { name: "Ms. Emily Chen", designation: "Principal", institution: "Kolkata University", mobile: "+91-93820476254", email: "emily@ku.edu", location: "Kolkata, India", group: "admin" }
];

// ===============================
// TABLE VIEW
// ===============================
window.initContactPage = function(filteredContacts = null) {
    const contacts = filteredContacts || window.contactData;

    const tableBody = document.getElementById("tableBody");
    const table = document.getElementById("contacts-table");
    const container = document.getElementById("contact-cards-container");
    const noContacts = document.getElementById("no-contacts");

    if (!tableBody || !table || !container || !noContacts) return;

    container.style.display = "none";
    table.style.display = "table";

    if (!contacts.length) {
        tableBody.innerHTML = `<tr><td colspan="7" class="text-center p-6 text-gray-500">No records found</td></tr>`;
        return;
    }

    tableBody.innerHTML = "";
    contacts.forEach((c, index) => {
        tableBody.innerHTML += `
            <tr style="height:69px; background:rgba(243,249,255,0.3); border:0.5px solid rgba(112,104,104,0.3);">
                <td class="p-3">${c.name}</td>
                <td class="p-3">${c.designation}</td>
                <td class="p-3">${c.institution}</td>
                <td class="p-3">${c.mobile}</td>
                <td class="p-3">${c.email}</td>
                <td class="p-3">${c.location}</td>
               <td class="p-3 align-middle">
              <div class="flex gap-4 items-center">
                <i data-lucide="eye" class="cursor-pointer action-eye" data-index="${index}"></i>
                <i data-lucide="edit" class="cursor-pointer action-edit" data-index="${index}"></i>
                <i data-lucide="trash" class="cursor-pointer action-delete" data-index="${index}"></i>
              </div>
            </td>
            </tr>
        `;
    });
lucide.createIcons(); // render icons
    attachRowActions(contacts);
};

// ===============================
// CARD VIEW
// ===============================
window.initContactCardsPage = function(filteredContacts = null) {
    const contacts = filteredContacts || window.contactData;

    const container = document.getElementById("contact-cards-container");
    const table = document.getElementById("contacts-table");
    const noContacts = document.getElementById("no-contacts");

    if (!container || !table || !noContacts) return;

    table.style.display = "none";
    container.style.display = "grid";

    container.innerHTML = "";

    if (!contacts.length) {
        noContacts.style.display = "block";
        return;
    } else {
        noContacts.style.display = "none";
    }

    contacts.forEach(c => {
        const card = document.createElement("div");
        card.className = "contact-card";
        card.innerHTML = `
            <div class="contact-card-header">
                <img src="assets/profile.png" alt="Avatar" class="contact-avatar" />
                <div class="contact-info">
                    <div class="contact-name">${c.name}</div>
                    <div class="contact-designation">${c.designation}</div>
                    <div class="contact-institution">${c.institution}</div>
                </div>
            </div>
            <div class="contact-details">
                <div class="detail-item"><strong>Mobile:</strong> ${c.mobile}</div>
                <div class="detail-item"><strong>Email:</strong> ${c.email}</div>
                <div class="detail-item"><strong>Location:</strong> ${c.location}</div>
            </div>
        `;
        container.appendChild(card);
    });
};

// ===============================
// GROUP FILTER
// ===============================
window.filterByGroup = function(group) {
    const contacts = window.contactData;
    let filtered = contacts;

    if (group !== "all") {
        filtered = contacts.filter(c => c.group === group);
    }

    // Re-render table and card views
    window.initContactPage(filtered);
    window.initContactCardsPage(filtered);

    // Update sidebar active state
    document.querySelectorAll(".group-item").forEach(el => el.classList.remove("active"));
    const activeGroup = document.getElementById(`group-${group}`);
    if (activeGroup) activeGroup.classList.add("active");
};

// ===============================
// ROW ACTIONS (VIEW / EDIT / DELETE)
// ===============================
function attachContactRowActions(data) {
  // VIEW
  document.querySelectorAll(".action-eye").forEach(icon => {
    icon.addEventListener("click", e => {
      // if icon is replaced by SVG, use closest
      const idx = e.currentTarget.dataset.index || e.target.closest("[data-index]").dataset.index;
      openContactViewModal(data[idx]);
    });
  });

  // EDIT
  document.querySelectorAll(".action-edit").forEach(icon => {
    icon.addEventListener("click", e => {
      const idx = e.currentTarget.dataset.index || e.target.closest("[data-index]").dataset.index;
      openContactEditModal(data[idx], idx, data);
    });
  });

  // DELETE
  document.querySelectorAll(".action-delete").forEach(icon => {
    icon.addEventListener("click", e => {
      const idx = e.currentTarget.dataset.index || e.target.closest("[data-index]").dataset.index;
      deleteContactRecord(idx, data);
    });
  });
}


function openContactViewModal(c) {
  const modalHtml = `
    <div id="viewModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg w-96">
        <h2 class="text-lg font-semibold mb-4">View Contact</h2>
        <div class="flex flex-col gap-1">
          <p><strong>Name:</strong> ${c.name}</p>
          <p><strong>Designation:</strong> ${c.designation}</p>
          <p><strong>Institution:</strong> ${c.institution}</p>
          <p><strong>Mobile:</strong> ${c.mobile}</p>
          <p><strong>Email:</strong> ${c.email}</p>
          <p><strong>Location:</strong> ${c.location}</p>
        </div>
        <div class="mt-4 flex justify-end">
          <button id="closeView" class="px-4 py-2 border rounded">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
  document.getElementById("closeView").addEventListener("click", () => document.getElementById("viewModal").remove());
}

function openContactEditModal(c, index, data) {
  const modalHtml = `
    <div id="editModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg w-96">
        <h2 class="text-lg font-semibold mb-4">Edit Contact</h2>
        <div class="flex flex-col gap-2">
          <input type="text" id="editName" class="border px-2 py-1" value="${c.name}" placeholder="Name">
          <input type="text" id="editDesignation" class="border px-2 py-1" value="${c.designation}" placeholder="Designation">
          <input type="text" id="editInstitution" class="border px-2 py-1" value="${c.institution}" placeholder="Institution">
          <input type="text" id="editMobile" class="border px-2 py-1" value="${c.mobile}" placeholder="Mobile">
          <input type="email" id="editEmail" class="border px-2 py-1" value="${c.email}" placeholder="Email">
          <input type="text" id="editLocation" class="border px-2 py-1" value="${c.location}" placeholder="Location">
        </div>
        <div class="mt-4 flex justify-end gap-3">
          <button id="cancelEdit" class="px-4 py-2 border rounded">Cancel</button>
          <button id="saveEdit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  document.getElementById("cancelEdit").addEventListener("click", () => document.getElementById("editModal").remove());

  document.getElementById("saveEdit").addEventListener("click", () => {
    c.name = document.getElementById("editName").value;
    c.designation = document.getElementById("editDesignation").value;
    c.institution = document.getElementById("editInstitution").value;
    c.mobile = document.getElementById("editMobile").value;
    c.email = document.getElementById("editEmail").value;
    c.location = document.getElementById("editLocation").value;

    window.initContactPage(data);
    window.initContactCardsPage(data);
    document.getElementById("editModal").remove();
  });
}

function deleteContactRecord(index, data) {
  const deleted = data.splice(index, 1)[0];
  window.initContactPage(data);
  window.initContactCardsPage(data);

  // Undo button
  const undoDiv = document.createElement("div");
  undoDiv.className = "fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-2 rounded-full shadow-lg z-50 flex items-center gap-2 cursor-pointer hover:bg-gray-700 transition";
  undoDiv.innerHTML = `<i data-lucide="corner-up-left" class="w-5 h-5"></i><span class="text-sm">Undo</span>`;
  document.body.appendChild(undoDiv);
  lucide.createIcons();

  undoDiv.addEventListener("click", () => {
    data.splice(index, 0, deleted);
    window.initContactPage(data);
    window.initContactCardsPage(data);
    undoDiv.remove();
  });

  setTimeout(() => undoDiv.remove(), 5000);
}

// ===============================
// INITIAL LOAD
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  window.initContactPage();
  window.initContactCardsPage();
});