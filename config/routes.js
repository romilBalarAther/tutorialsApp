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

  'post /tut/delete/:id': 'TutController.delete',
   'get /tut/edit/:id': 'TutController.edit',
   'post /tut/update/:id': 'TutController.update',


};
