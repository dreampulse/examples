/// <reference path="./node-0.8.8.d.ts"/>
/// <reference path="./Q.d.ts"/>

import Q = require("q");

interface ResultStructure {
    msg : string;
}

var ajaxCall = function() {
    var defer = Q.defer<ResultStructure>();

    setTimeout(function() {
        defer.resolve({
            msg : 'result of the ajax call'
        });
    }, 1000);  // return result after 1.0sec

    return defer.promise;
};

ajaxCall()
    .then(function(res) {
        //res.msg2 = 'foo' // type error
        console.log(res.msg);
    });