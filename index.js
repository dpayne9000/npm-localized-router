exports.getLocalization = function() {
//var express = require('express');
var PropertiesReader = require('properties-reader');
//var router = express.Router();
var fs = require("fs");
var dir = require('node-dir');
var _ = require('underscore');  

    var output = "";
    var directory = "locale/"+locale+"/";

        dir.files(directory, function(err,files) {
            _.each(files,function(file) {
                        var ext = file.search('.properties');

                        if (ext==-1) {
                        console.log('file '+file+' skipped');
                        return;
                        }
                this.output = PropertiesReader(file);
            });
        });

    return this.output;
}
