angular.module('routes.grouping.GroupingController', [
    'stack.page-loader',
    'stack.i18n'
])

/**
 * The GroupingController manages view logic rendered to the
 * grouping.html template for the /grouping route.
 *
 * @class GroupingController
 * @constructor
 * @module routes.grouping.GroupingController
 **/
.controller('GroupingController', [
    '$timeout',
    function ($timeout) {
        'use strict';

        // Define.
        var groupingCtrl;

        /**
         * Property houses a reference to the grouping controller.
         *
         * @property groupingCtrl
         * @type {Object}
         */
        groupingCtrl = this;

        /**
         * Method executes initialization process.
         *
         * @method initialize
         * @private
         */
        function initialize() {
            var t = $timeout(function () {
                $timeout.cancel(t);
            }, 0);
        }
        initialize();
    }
]);
