const express = require('express');
const _ = require('lodash');
const app = express();
app.get('/', (req, res) => res.send(_.merge({}, { ok: true })));
app.listen(3000, '127.0.0.1');
