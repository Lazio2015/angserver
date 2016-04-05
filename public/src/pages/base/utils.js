/**
 * Created by lenur on 4/5/16.
 */

angular.isUndefinedOrNull = function(val) {
    return angular.isUndefined(val) || val === null
};

angular.findObjectById = function(arr, id) {
    arr = arr.filter(function (obj) {
        return obj.id == id;
    });

    return arr.length > 0 ? arr[0] : null;
};

angular.removeFromObjectArray = function(arr, id) {
    arr = arr.filter(function( obj ) {
        return obj.id !== id;
    });

    return arr;
};