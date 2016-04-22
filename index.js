
exports.getLocalization = function() {

var PropertiesReader = require('properties-reader');

var fs = require("fs");
var dir = require('node-dir');
var _ = require('underscore');  

    var output = "";
    var directory = "locale/"+this.locale+"/";

        dir.files(directory, function(err,files) {
            _.each(files,function(file) {
            console.log(file);
                        var ext = file.search('.properties');

                        if (ext==-1) {
                        console.log('file '+file+' skipped');
                        return;
                        }
                exports.output = PropertiesReader(file);
                
            });
        });

    return exports.output;
}
