// Only declare once
if (!window.LOCATION_SCRIPT_LOADED) {
  window.LOCATION_SCRIPT_LOADED = true;

  const locations = [
    { country: "India", state: "Karnataka", zone: "South", district: "Bengaluru", city: "Bengaluru", status: "Urban", total: 250 },
    { country: "India", state: "Tamil Nadu", zone: "South", district: "Coimbatore", city: "Coimbatore", status: "Urban", total: 180 },
    { country: "India", state: "Uttar Pradesh", zone: "North", district: "Barabanki", city: "Barabanki", status: "Rural", total: 70 },
    { country: "India", state: "Maharashtra", zone: "West", district: "Pune", city: "Pune", status: "Urban", total: 210 },
    { country: "India", state: "Odisha", zone: "East", district: "Puri", city: "Konark", status: "Rural", total: 45 },
    { country: "India", state: "Himachal Pradesh", zone: "North", district: "Shimla", city: "Shimla", status: "Rural", total: 90 },
    { country: "India", state: "West Bengal", zone: "East", district: "Kolkata", city: "Kolkata", status: "Urban", total: 300 }
  ];

  function initLocationPage() {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");
    const zoneSelect = document.getElementById("zone");
    const districtSelect = document.getElementById("district");
    const citySelect = document.getElementById("city");
    const statusSelect = document.getElementById("status");

    const applyBtn = document.getElementById("applyBtn");
    const clearBtn = document.getElementById("clearBtn");
    const tableBody = document.getElementById("tableBody");
    const filterPopup = document.getElementById("filterPopup");

    if (!countrySelect) return; // safety check

    function loadDropdown(selectElement, values, label) {
      selectElement.innerHTML = `<option value="">All ${label}</option>`;
      [...new Set(values)].forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
      });
    }

    function loadAllFilters() {
      loadDropdown(countrySelect, locations.map(l => l.country), "countries");
      loadDropdown(stateSelect, locations.map(l => l.state), "states");
      loadDropdown(zoneSelect, locations.map(l => l.zone), "zones");
      loadDropdown(districtSelect, locations.map(l => l.district), "districts");
      loadDropdown(citySelect, locations.map(l => l.city), "cities");
      loadDropdown(statusSelect, locations.map(l => l.status), "statuses");
    }

    function renderTable(data) {
      tableBody.innerHTML = "";
      if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" class="text-center p-6 text-gray-500">No records found</td></tr>`;
        return;
      }

      data.forEach((item, index) => {
        tableBody.innerHTML += `
          <tr class="bg-slate-100 border-b border-gray-300 h-16">
            <td class="p-3 align-middle">${item.country}</td>
            <td class="p-3 align-middle">${item.state}</td>
            <td class="p-3 align-middle">${item.zone}</td>
            <td class="p-3 align-middle">${item.district}</td>
            <td class="p-3 align-middle">${item.city}</td>
            <td class="p-3 align-middle">
              <span class="${item.status === "Urban" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-700"} px-3 py-1 rounded-full text-sm">
                ${item.status}
              </span>
            </td>
            <td class="p-3 align-middle">${item.total}</td>
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

      lucide.createIcons(); // render Lucide icons
      attachRowActions(data);
    }

    function showFilterPopup() {
      filterPopup.classList.remove("hidden");
      setTimeout(() => filterPopup.classList.add("hidden"), 2000);
    }

    applyBtn.addEventListener("click", () => {
      const filteredData = locations.filter(item =>
        (!countrySelect.value || item.country === countrySelect.value) &&
        (!stateSelect.value || item.state === stateSelect.value) &&
        (!zoneSelect.value || item.zone === zoneSelect.value) &&
        (!districtSelect.value || item.district === districtSelect.value) &&
        (!citySelect.value || item.city === citySelect.value) &&
        (!statusSelect.value || item.status === statusSelect.value)
      );
      renderTable(filteredData);
      showFilterPopup();
    });

    clearBtn.addEventListener("click", () => {
      document.querySelectorAll("select").forEach(select => select.value = "");
      renderTable(locations);
    });

    // INITIAL LOAD
    loadAllFilters();
    renderTable(locations);

    // ----- ROW ACTIONS -----
    function attachRowActions(data) {
      // 👁️ VIEW RECORD
      document.querySelectorAll(".action-eye").forEach(icon => {
        icon.addEventListener("click", e => {
          const index = e.target.dataset.index;
          const record = data[index];
          openViewModal(record);
        });
      });

      // ✏️ EDIT RECORD
      document.querySelectorAll(".action-edit").forEach(icon => {
        icon.addEventListener("click", e => {
          const index = e.target.dataset.index;
          const record = data[index];
          openEditModal(record, index);
        });
      });

      // 🗑️ DELETE RECORD
      document.querySelectorAll(".action-delete").forEach(icon => {
        icon.addEventListener("click", e => {
          const index = e.target.dataset.index;
          deleteRecord(index, data);
        });
      });
    }

    function openViewModal(record) {
      const modalHtml = `
        <div id="viewModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div class="bg-white p-6 rounded-lg w-96">
            <h2 class="text-lg font-semibold mb-4">View Location</h2>
            <div class="flex flex-col gap-2">
              <p><strong>Country:</strong> ${record.country}</p>
              <p><strong>State:</strong> ${record.state}</p>
              <p><strong>Zone:</strong> ${record.zone}</p>
              <p><strong>District:</strong> ${record.district}</p>
              <p><strong>City:</strong> ${record.city}</p>
              <p><strong>Status:</strong> ${record.status}</p>
              <p><strong>Total Institutions:</strong> ${record.total}</p>
            </div>
            <div class="mt-4 flex justify-end">
              <button id="closeView" class="px-4 py-2 border rounded">Close</button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML("beforeend", modalHtml);
      document.getElementById("closeView").addEventListener("click", () => {
        document.getElementById("viewModal").remove();
      });
    }

    function openEditModal(record, index) {
      const modalHtml = `
        <div id="editModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div class="bg-white p-6 rounded-lg w-96">
            <h2 class="text-lg font-semibold mb-4">Edit Location</h2>
            <div class="flex flex-col gap-2">
              <input type="text" id="editCountry" class="border px-2 py-1" value="${record.country}" placeholder="Country">
              <input type="text" id="editState" class="border px-2 py-1" value="${record.state}" placeholder="State">
              <input type="text" id="editZone" class="border px-2 py-1" value="${record.zone}" placeholder="Zone">
              <input type="text" id="editDistrict" class="border px-2 py-1" value="${record.district}" placeholder="District">
              <input type="text" id="editCity" class="border px-2 py-1" value="${record.city}" placeholder="City">
              <select id="editStatus" class="border px-2 py-1">
                <option value="Urban" ${record.status==="Urban"?"selected":""}>Urban</option>
                <option value="Rural" ${record.status==="Rural"?"selected":""}>Rural</option>
              </select>
              <input type="number" id="editTotal" class="border px-2 py-1" value="${record.total}" placeholder="Total Institutions">
            </div>
            <div class="mt-4 flex justify-end gap-3">
              <button id="cancelEdit" class="px-4 py-2 border rounded">Cancel</button>
              <button id="saveEdit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML("beforeend", modalHtml);

      document.getElementById("cancelEdit").addEventListener("click", () => {
        document.getElementById("editModal").remove();
      });

      document.getElementById("saveEdit").addEventListener("click", () => {
        record.country = document.getElementById("editCountry").value;
        record.state = document.getElementById("editState").value;
        record.zone = document.getElementById("editZone").value;
        record.district = document.getElementById("editDistrict").value;
        record.city = document.getElementById("editCity").value;
        record.status = document.getElementById("editStatus").value;
        record.total = parseInt(document.getElementById("editTotal").value);

        renderTable(locations); // refresh table
        document.getElementById("editModal").remove();
      });
    }

   function deleteRecord(index, data) {
  const deleted = data.splice(index, 1)[0];
  renderTable(data);

  // CREATE UNDO BUTTON
  const undoDiv = document.createElement("div");
  undoDiv.className = `
    fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-2 rounded-full shadow-lg z-50 flex items-center gap-2 cursor-pointer
    hover:bg-gray-700 transition
  `;
  undoDiv.innerHTML = `
    <i data-lucide="corner-up-left" class="w-5 h-5"></i>
    <span class="text-sm">Undo</span>
  `;

  document.body.appendChild(undoDiv);
  lucide.createIcons(); // render icon

  // CLICK TO UNDO
  undoDiv.addEventListener("click", () => {
    data.splice(index, 0, deleted);
    renderTable(data);
    undoDiv.remove();
  });

  // AUTO REMOVE AFTER 5 SECONDS
  setTimeout(() => undoDiv.remove(), 5000);
}

  }

  window.initLocationPage = initLocationPage;
}
