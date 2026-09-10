const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("show"));

const projects = {
  sangfor: {
    tag: "HYPERCONVERGED INFRASTRUCTURE",
    title: "Sangfor HCI Infrastructure",
    description: "Contoh detail project yang dapat kamu modifikasi sesuai pekerjaan dan scope sebenarnya.",
    scope: ["Infrastructure health check", "CPU, memory dan storage analysis", "HA configuration assessment", "Troubleshooting dan improvement recommendation"]
  },
  openstack: {
    tag: "PRIVATE CLOUD",
    title: "OpenStack & Backup Integration",
    description: "Project implementation private cloud dan integrasi backup serta monitoring.",
    scope: ["OpenStack deployment", "VM and network configuration", "Backup integration", "Monitoring dashboard"]
  },
  backup: {
    tag: "BACKUP & RECOVERY",
    title: "VM Backup & Disaster Recovery",
    description: "Strategi proteksi workload virtual dan pengujian recovery.",
    scope: ["Backup policy design", "Replication", "Restore testing", "DR scenario"]
  },
  endpoint: {
    tag: "ENDPOINT MANAGEMENT",
    title: "IT Operations & Endpoint Management",
    description: "Manajemen endpoint dan operational automation.",
    scope: ["Endpoint monitoring", "Remote management", "Automation", "Policy management"]
  }
};

const modal = document.getElementById("projectModal");
document.querySelectorAll(".project-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const p = projects[btn.dataset.project];
    document.getElementById("modalTag").textContent = p.tag;
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalDescription").textContent = p.description;
    document.getElementById("modalScope").innerHTML = p.scope.map(x => `<li>${x}</li>`).join("");
    modal.classList.add("show");
  });
});

document.getElementById("closeModal").addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => { if(e.target === modal) modal.classList.remove("show"); });
