
exports.getLocalization = function(locale) {



var fs = require("fs");
var dir = require('node-dir');
var _ = require('underscore');
var Promise = require('bluebird');
var PropertiesReader = require('properties-reader');
var filesPromise = Promise.promisify(dir.files);

    if (typeof locale == 'undefined') {
        locale = 'en-us';
    }

    var output = "";
    var directory = "locale/"+locale+"/";

        return filesPromise(directory).then(function(files) {
           
            if (files[0].search('.properties')==-1) return;

            return PropertiesReader(files[0]);
        })
        .catch(function(err){
            console.log('catch error'+err)
        });


}