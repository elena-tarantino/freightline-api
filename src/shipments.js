const DB = [
  { id: "SHP-1001", status: "in_transit", eta: "2026-11-22" },
  { id: "SHP-1002", status: "delivered", eta: "2026-11-15" }
];
module.exports = { find: (id) => DB.find((s) => s.id === id) || null };
