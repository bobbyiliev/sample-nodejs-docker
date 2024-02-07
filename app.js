const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Build-time variables
const buildVar1 = process.env.BUILD_VAR1 || 'defaultBuildVar1';
const buildVar2 = process.env.BUILD_VAR2 || 'defaultBuildVar2';

// This endpoint uses build-time variables
app.get('/buildInfo', (req, res) => {
  res.json({ buildVar1, buildVar2 });
});

// This endpoint uses runtime secrets
app.get('/secretInfo', (req, res) => {
  const runSecret1 = process.env.RUN_SECRET1 || 'defaultRunSecret1';
  const runSecret2 = process.env.RUN_SECRET2 || 'defaultRunSecret2';
  res.json({ runSecret1, runSecret2 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
