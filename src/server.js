const express = require("express");
const app = express();
const shipments = require("./shipments");

app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/shipments/:id", (req, res) => {
  const s = shipments.find(req.params.id);
  if (!s) return res.status(404).json({ error: "not found" });
  res.json(s);
});

app.listen(process.env.PORT || 3000);
