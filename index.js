
exports.getLocalization = function(locale) {

var PropertiesReader = require('properties-reader');

var fs = require("fs");
var dir = require('node-dir');
var _ = require('underscore');
//console.log(locale);

    if (typeof locale == 'undefined') {
        locale = 'en-us';//exports.config.defaultLocale;
    }

    var output = "";
    var directory = "locale/"+locale+"/";
console.log(directory);
        dir.files(directory, function(err,files) {
        if (err) console.log(err);
            _.each(files,function(file) {
            console.log(file +' file loaded');
                        var ext = file.search('.properties');

                        if (ext==-1) {
                        console.log('file '+file+' skipped');
                        return;
                        }
                        try {
                            exports.output = PropertiesReader(file);
                        } catch (err) {
                           console.log(err);
                        }

            });
        });

    return exports.output;
}
