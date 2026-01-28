const statusData = [
  {id:1, institute:"Indian Institute of Technology Bombay", type:"B.Tech", state:"Maharashtra", status:"active", area:"urban", ranking:1, lastInspection:"2025-01-12"},
  {id:2, institute:"Indian Institute of Science Bangalore", type:"B.Tech", state:"Karnataka", status:"active", area:"urban", ranking:2, lastInspection:"2025-02-03"},
  {id:3, institute:"Delhi University", type:"B.Sc", state:"Delhi", status:"active", area:"urban", ranking:12, lastInspection:"2024-12-18"},
  {id:4, institute:"Jawaharlal Nehru University", type:"BBA", state:"Delhi", status:"active", area:"urban", ranking:9, lastInspection:"2025-01-28"},
  {id:5, institute:"Anna University", type:"B.Tech", state:"Tamil Nadu", status:"active", area:"urban", ranking:18, lastInspection:"2024-11-22"},
  {id:6, institute:"Osmania University", type:"B.Sc", state:"Telangana", status:"pending", area:"urban", ranking:45, lastInspection:"2024-10-14"},
  {id:7, institute:"Banaras Hindu University", type:"B.Sc", state:"Uttar Pradesh", status:"active", area:"urban", ranking:6, lastInspection:"2025-01-05"},
  {id:8, institute:"Aligarh Muslim University", type:"BBA", state:"Uttar Pradesh", status:"active", area:"urban", ranking:25, lastInspection:"2024-12-02"},
  {id:9, institute:"University of Hyderabad", type:"B.Sc", state:"Telangana", status:"active", area:"urban", ranking:17, lastInspection:"2025-02-10"},
  {id:10, institute:"Jadavpur University", type:"B.Tech", state:"West Bengal", status:"active", area:"urban", ranking:5, lastInspection:"2025-01-18"},

  {id:11, institute:"Savitribai Phule Pune University", type:"B.Sc", state:"Maharashtra", status:"active", area:"urban", ranking:30, lastInspection:"2024-11-30"},
  {id:12, institute:"Calcutta University", type:"B.Sc", state:"West Bengal", status:"inactive", area:"urban", ranking:55, lastInspection:"2024-09-12"},
  {id:13, institute:"Madras Christian College", type:"BCA", state:"Tamil Nadu", status:"active", area:"urban", ranking:42, lastInspection:"2024-12-08"},
  {id:14, institute:"Loyola College Chennai", type:"BBA", state:"Tamil Nadu", status:"active", area:"urban", ranking:7, lastInspection:"2025-01-22"},
  {id:15, institute:"Christ University Bangalore", type:"BCA", state:"Karnataka", status:"active", area:"urban", ranking:13, lastInspection:"2025-02-01"},
  {id:16, institute:"Jamia Millia Islamia", type:"B.Sc", state:"Delhi", status:"active", area:"urban", ranking:10, lastInspection:"2024-12-15"},
  {id:17, institute:"Manipal Academy of Higher Education", type:"B.Tech", state:"Karnataka", status:"active", area:"urban", ranking:20, lastInspection:"2025-01-09"},
  {id:18, institute:"Amity University Noida", type:"BBA", state:"Uttar Pradesh", status:"pending", area:"urban", ranking:85, lastInspection:"2024-10-01"},
  {id:19, institute:"Vellore Institute of Technology", type:"B.Tech", state:"Tamil Nadu", status:"active", area:"urban", ranking:8, lastInspection:"2025-02-05"},
  {id:20, institute:"SRM Institute of Science and Technology", type:"B.Tech", state:"Tamil Nadu", status:"active", area:"urban", ranking:19, lastInspection:"2025-01-14"},

  {id:21, institute:"Symbiosis International University", type:"BBA", state:"Maharashtra", status:"active", area:"urban", ranking:32, lastInspection:"2024-12-20"},
  {id:22, institute:"Lovely Professional University", type:"Polytechnic", state:"Punjab", status:"active", area:"rural", ranking:38, lastInspection:"2024-11-18"},
  {id:23, institute:"Guru Gobind Singh Indraprastha University", type:"BCA", state:"Delhi", status:"pending", area:"urban", ranking:65, lastInspection:"2024-10-25"},
  {id:24, institute:"Birla Institute of Technology Mesra", type:"B.Tech", state:"Jharkhand", status:"active", area:"rural", ranking:21, lastInspection:"2025-01-07"},
  {id:25, institute:"Shiv Nadar University", type:"BBA", state:"Uttar Pradesh", status:"active", area:"rural", ranking:28, lastInspection:"2024-12-28"},
  {id:26, institute:"Ashoka University", type:"B.Sc", state:"Haryana", status:"active", area:"rural", ranking:35, lastInspection:"2025-02-02"},
  {id:27, institute:"NMIMS University Mumbai", type:"BBA", state:"Maharashtra", status:"active", area:"urban", ranking:23, lastInspection:"2025-01-16"},
  {id:28, institute:"ICAI Institute of Accounting", type:"BBA", state:"Delhi", status:"inactive", area:"urban", ranking:90, lastInspection:"2024-08-30"},
  {id:29, institute:"Indian Statistical Institute Kolkata", type:"B.Sc", state:"West Bengal", status:"active", area:"urban", ranking:4, lastInspection:"2025-02-11"},
  {id:30, institute:"Tata Institute of Social Sciences", type:"BBA", state:"Maharashtra", status:"active", area:"urban", ranking:14, lastInspection:"2025-01-20"},

  {id:31, institute:"National Institute of Technology Trichy", type:"B.Tech", state:"Tamil Nadu", status:"active", area:"urban", ranking:11, lastInspection:"2025-02-08"},
  {id:32, institute:"NIT Surathkal", type:"B.Tech", state:"Karnataka", status:"active", area:"urban", ranking:16, lastInspection:"2025-01-25"},
  {id:33, institute:"NIT Warangal", type:"B.Tech", state:"Telangana", status:"active", area:"urban", ranking:15, lastInspection:"2025-01-29"},
  {id:34, institute:"Indian Institute of Technology Madras", type:"B.Tech", state:"Tamil Nadu", status:"active", area:"urban", ranking:3, lastInspection:"2025-02-12"},
  {id:35, institute:"Indian Institute of Technology Delhi", type:"B.Tech", state:"Delhi", status:"active", area:"urban", ranking:2, lastInspection:"2025-02-14"},
  {id:36, institute:"Indian Institute of Technology Kanpur", type:"B.Tech", state:"Uttar Pradesh", status:"active", area:"urban", ranking:6, lastInspection:"2025-01-31"},
  {id:37, institute:"Indian Institute of Technology Kharagpur", type:"B.Tech", state:"West Bengal", status:"active", area:"urban", ranking:7, lastInspection:"2025-01-27"},
  {id:38, institute:"Central University of Rajasthan", type:"B.Sc", state:"Rajasthan", status:"pending", area:"rural", ranking:72, lastInspection:"2024-10-19"},
  {id:39, institute:"Central University of Punjab", type:"Polytechnic", state:"Punjab", status:"inactive", area:"rural", ranking:88, lastInspection:"2024-09-05"},
  {id:40, institute:"Central University of Kerala", type:"B.Sc", state:"Kerala", status:"active", area:"rural", ranking:60, lastInspection:"2024-12-10"},

  {id:41, institute:"Presidency University Kolkata", type:"B.Sc", state:"West Bengal", status:"active", area:"urban", ranking:33, lastInspection:"2025-01-06"},
  {id:42, institute:"St. Xavier's College Mumbai", type:"B.Sc", state:"Maharashtra", status:"active", area:"urban", ranking:5, lastInspection:"2025-02-04"},
  {id:43, institute:"St. Stephen's College Delhi", type:"B.Sc", state:"Delhi", status:"active", area:"urban", ranking:3, lastInspection:"2025-01-19"},
  {id:44, institute:"Miranda House Delhi", type:"B.Sc", state:"Delhi", status:"active", area:"urban", ranking:1, lastInspection:"2025-02-09"},
  {id:45, institute:"Hindu College Delhi", type:"B.Sc", state:"Delhi", status:"active", area:"urban", ranking:2, lastInspection:"2025-02-07"},
  {id:46, institute:"Hansraj College Delhi", type:"B.Sc", state:"Delhi", status:"active", area:"urban", ranking:4, lastInspection:"2025-01-23"},
  {id:47, institute:"Ramjas College Delhi", type:"B.Sc", state:"Delhi", status:"pending", area:"urban", ranking:22, lastInspection:"2024-11-09"},
  {id:48, institute:"Lady Shri Ram College", type:"BBA", state:"Delhi", status:"active", area:"urban", ranking:1, lastInspection:"2025-02-06"},
  {id:49, institute:"University of Mumbai", type:"B.Sc", state:"Maharashtra", status:"active", area:"urban", ranking:40, lastInspection:"2024-12-17"},
  {id:50, institute:"University of Calicut", type:"Polytechnic", state:"Kerala", status:"inactive", area:"rural", ranking:75, lastInspection:"2024-09-21"}
];


// =================== RENDER TABLE ===================
function renderTable(data) {
  const tbody = document.getElementById("statusTableBody");
  const empty = document.getElementById("empty-state");
  tbody.innerHTML = "";

  if (data.length === 0) {
    empty.classList.remove("hidden");
    return;
  } else {
    empty.classList.add("hidden");
  }

  data.sort((a, b) => a.ranking - b.ranking);

  data.forEach(inst => {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-gray-50 transition";

    tr.innerHTML = `
      <td class="px-6 py-3 font-medium text-gray-700">${inst.institute}</td>
      <td class="px-6 py-3 text-gray-600">${inst.state}</td>
      <td class="px-6 py-3 text-gray-600">${inst.type}</td>
      <td class="px-6 py-3 capitalize">
        <span class="px-2 py-1 rounded-full text-sm font-semibold ${
          inst.status === 'active'
            ? 'bg-green-100 text-green-800'
            : inst.status === 'inactive'
            ? 'bg-red-100 text-red-800'
            : 'bg-yellow-100 text-yellow-800'
        }">
          ${inst.status}
        </span>
      </td>
      <td class="px-6 py-3 capitalize text-gray-600">${inst.area}</td>
      <td class="px-6 py-3 text-gray-600">${inst.ranking}</td>
      <td class="px-6 py-3 text-gray-600">${inst.lastInspection}</td>
      <td class="px-6 py-3 text-center flex justify-center gap-2">
        <button onclick="viewInstitution(${inst.id})"><img src="js/icons/Group.svg" class="w-5 h-5"></button>
        <button onclick="editInstitution(${inst.id})"><img src="js/icons/Vector.svg" class="w-5 h-5"></button>
        <button onclick="deleteInstitution(${inst.id})"><img src="js/icons/Delete.svg" class="w-5 h-5"></button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  lucide.createIcons(); // ✅ call once after loop
}

// =================== ACTIONS ===================
function viewInstitution(id) { alert("View institution ID: " + id); }
function editInstitution(id) { alert("Edit institution ID: " + id); }
function deleteInstitution(id) {
  if (confirm("Are you sure to delete ID: " + id + "?")) {
    const index = statusData.findIndex(i => i.id === id);
    if (index > -1) {
      statusData.splice(index, 1);
      renderTable(statusData);
    }
  }
}

// =================== FILTERS ===================
function applyFilters() {
  const status = document.getElementById("filter-status").value.toLowerCase();
  const area = document.getElementById("filter-area").value.toLowerCase();
  const state = document.getElementById("state").value.toLowerCase();
  const type = document.getElementById("type-filter").value.toLowerCase();

  let filtered = statusData;

  if (status) filtered = filtered.filter(i => i.status.toLowerCase() === status);
  if (area) filtered = filtered.filter(i => i.area.toLowerCase() === area);
  if (state) filtered = filtered.filter(i => i.state.toLowerCase() === state);
  if (type) filtered = filtered.filter(i => i.type.toLowerCase() === type);

  renderTable(filtered);
}

// =================== SEARCH ===================
function searchTable(query) {
  query = query.toLowerCase();
  const status = document.getElementById("filter-status").value.toLowerCase();
  const area = document.getElementById("filter-area").value.toLowerCase();
  const state = document.getElementById("state").value.toLowerCase();
  const type = document.getElementById("type-filter").value.toLowerCase();

  let filtered = statusData;

  if (status) filtered = filtered.filter(i => i.status.toLowerCase() === status);
  if (area) filtered = filtered.filter(i => i.area.toLowerCase() === area);
  if (state) filtered = filtered.filter(i => i.state.toLowerCase() === state);
  if (type) filtered = filtered.filter(i => i.type.toLowerCase() === type);

  filtered = filtered.filter(i => i.institute.toLowerCase().includes(query));

  renderTable(filtered);
}

// =================== CLEAR FILTERS ===================
function clearFilters() {
  document.getElementById("filter-status").value = "";
  document.getElementById("filter-area").value = "";
  document.getElementById("state").value = "";
  document.getElementById("type-filter").value = "";
  document.getElementById("search-institute").value = "";
  renderTable(statusData);
}

// =================== REFRESH ===================
function refreshStatusData() {
  renderTable(statusData);
}

// =================== INITIALIZE ===================
document.addEventListener("DOMContentLoaded", () => {
  renderTable(statusData);
});

window.renderTable = renderTable;
window.statusData = statusData;
