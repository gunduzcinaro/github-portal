//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import express from 'express';
const router = express.Router();

// These are Microsoft-specific, we'll remove these eventually.

router.use('/data', (req, res) => {
  const exploreUrl = req.app.settings.runtimeConfig.urls.explore;
  res.redirect(`${exploreUrl}resources/insights`);
});

router.use('/use', (req, res) => {
  const exploreUrl = req.app.settings.runtimeConfig.urls.explore;
  res.redirect(`${exploreUrl}resources/use`);
});

router.use('/release', (req, res) => {
  const exploreUrl = req.app.settings.runtimeConfig.urls.explore;
  res.redirect(`${exploreUrl}resources/release`);
});

export default router;
