/**
 * Job: randomNumber
 */
/*jslint node:true */
module.exports = {

    /**
     * Executed on job initialisation (only once)
     * @param config
     * @param dependencies
     */
    onInit: function (config, dependencies) {},

    /**
     * Executed every interval
     * @param config
     * @param dependencies
     * @param jobCallback
     */
    onRun: function (config, dependencies, jobCallback) {

        var logger = dependencies.logger;

        jobCallback(false, {
            title: config.widgetTitle
            , value: Math.floor((Math.random() * 100) + 1)
        });

    }
};