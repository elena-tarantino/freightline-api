const shipments = require("./shipments");
const a = shipments.find("SHP-1001");
if (!a || a.status !== "in_transit") { console.error("FAIL"); process.exit(1); }
console.log("ok");
