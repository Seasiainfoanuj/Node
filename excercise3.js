//Exercise 3
/**
 There is an attached log file from one of the development web server.

 Line number 2 of this log file is something like this "Processing by SprintsController#show as JSONAPI"

 This tells us, sprints controller's show action(method or function) ran. You have to parse this log file and output it the number of times the controller's actions run.

 Expected Output:

 SprintsController => show action ran 23 times  SprintsController => index action ran 17 times  and so on.

 */


'use strict'

const fs = require('fs');

module.exports = () => {
    return {
            fetchCount: () => {
            fs.readFile('development.log', 'utf8', function(err, data) {
            if (err) throw err;
            var showActionCount = 0;
            var indexActionCount = 0;
            fs.readFileSync('development.log')
                .toString()
                .split('\n').forEach(function(line) {
                if (line.indexOf('SprintsController#show') >= 0) {
                    showActionCount += 1;
                }
                if (line.indexOf('SprintsController#index') >= 0) {
                    indexActionCount += 1;
                }
            });

            return {
                'show': "SprintsController => show action ran " + showActionCount + " times",
                'index': "SprintsController => index action ran " + indexActionCount + " times"
            };
        });
}
}
}
