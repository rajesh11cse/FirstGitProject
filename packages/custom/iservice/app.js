'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Iservice = new Module('iservice');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Iservice.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Iservice.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Iservice.menus.add({
    title: 'iservice example page',
    link: 'iservice example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Iservice.aggregateAsset('css', 'iservice.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Iservice.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Iservice.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Iservice.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Iservice;
});
