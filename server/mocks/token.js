/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let tokenRouter = express.Router();
  const https = require('https');

  tokenRouter.post('/', function(req, res) {
      const body = req.body;

      const payload = {
          'client_id': process.env.GITHUB_DEV_CLIENT_ID,
          'client_secret': process.env.GITHUB_DEV_CLIENT_SECRET,
          'code': body.authorizationCode,
      };

      if (body.state) {
          payload.state = body.state;
      }

      const data = JSON.stringify(payload);

      const options = {
          hostname: 'github.com',
          port: 443,
          path: '/login/oauth/access_token',
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(data),
              'Accept': 'application/json',
              'User-Agent': "TODO",
          }
      }

      const githubRequest = https.request(options, ghRes => {
          let body = '';
          ghRes.setEncoding('utf8');
          ghRes.on('data', chunk => body += chunk);
          ghRes.on('end', () => {
              res.writeHead(200, {
                  'Content-Type': 'application/json',
              });
              res.write(JSON.stringify(body));
              res.end();
          });
      });

      githubRequest.on('error', error => {
          console.error(error);
          res.status(500).end();
      });
      githubRequest.write(data);
      githubRequest.end();
  });

  app.use('/api/token', require('body-parser').json());
  app.use('/api/token', tokenRouter);
};
