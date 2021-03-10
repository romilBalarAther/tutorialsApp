/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {



  '/': { view: 'pages/homepage' },
  'POST /tutorials': 'TutController.create',
  'DELETE /tutorials/:id': 'TutController.delete',
  'DELETE /tutorials/all': 'TutController.deleteAll',   
  // 'GET /Tut': 'TutController.list',
  'GET /tutorials/': 'TutController.find',
  'PUT /tutorials/:id': 'TutController.update',
  

};
