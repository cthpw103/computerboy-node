/*
ComputerBoy.JS
Interact with the computerboy site with node.js
by cth103
*/
var request = require('request');

var headers = {
    'User-Agent':       'ComputerBoy.JS/3.3.6',
    'Content-Type':     'application/x-www-form-urlencoded'
}
var thing;
exports.subscribeToNewsletter = function (name, mail, comment) {
    thing = {
        url: 'https://superdeluxe.us11.list-manage.com/subscribe/post/',
        method: 'POST',
        headers: headers,
        form: {'b_name': name, 'b_email': mail, 'b_comment': comment}
    }
    request(thing, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            return true;
        } else {
            return false;
        } 
    })
};
exports.sendCommand = function (stdin, context) {
    thing = {
        url: 'https://computerboy.computer/poppy/terminal/',
        method: 'POST',
        headers: headers,
        form: {'stdin': stdin, 'context': context}
    }
    request(thing, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            return body;
        }
    })
};
