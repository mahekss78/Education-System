// dashboard.js
// This file runs AFTER dashboard.html is injected into #content
// data.js must already be loaded globally in index.html

(function () {
  // safety check
  if (typeof instituteData === "undefined") {
    console.error("instituteData not found. Make sure data.js is loaded in index.html");
    return;
  }

  /* ===================== STATS ===================== */
  function calculateStats(data) {
    const total = data.length;
    const active = data.filter(d => d.activeStatus === "Active").length;
    const inactive = data.filter(d => d.activeStatus === "Inactive").length;

    document.getElementById("total-institutions").textContent = total;
    document.getElementById("active-institutions").textContent = active;
    document.getElementById("inactive-institutions").textContent = inactive;
  }

  /* ===================== TABLE ===================== */
  function populateTable(data) {
    const tbody = document.getElementById("table-body");
    if (!tbody) return;

    tbody.innerHTML = "";

    data.forEach(item => {
      const tr = document.createElement("tr");

      const typeClass =
        item.type === "B.Tech" ? "type-btech" :
        item.type === "Polytechnic" ? "type-polytechnic" :
        "type-bba";

      const statusClass =
        item.activeStatus === "Active" ? "status-active" : "status-inactive";

      tr.innerHTML = `
        <td>${item.college}</td>
        <td>${item.university}</td>
        <td>${item.location}</td>
        <td><span class="${typeClass}">${item.type}</span></td>
        <td>${item.areaStatus}</td>
        <td><span class="${statusClass}">${item.activeStatus}</span></td>
        <td>${item.ranking}</td>
        <td class="actions">
          <i data-lucide="edit"></i>
          <i data-lucide="trash-2"></i>
        </td>
      `;

      tbody.appendChild(tr);
    });

    // re-render lucide icons inside table
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  /* ===================== INIT ===================== */
  function initDashboard() {
    calculateStats(instituteData);
    populateTable(instituteData);

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // run immediately (dashboard HTML already exists when this script loads)
  initDashboard();
})();
