module.exports = function (Model, options) {

    // get new descriptions from model json config
    var descriptions = options.descriptions || {};

    for (var methodName in descriptions) {
        var newDescription = descriptions[methodName];
        var method = findMethod(methodName);
        if (method) {
            method.description = newDescription; // apply new description
        } else {
            console.error("Mixin CustomDescription: %s.%s doesn't exist", Model.modelName, methodName); // can't find method
        }
    }

    /**
     * Find method from model
     * @param {String} methodName
     * @returns {SharedMethod}
     */
    function findMethod(methodName) {
        var methods = Model.sharedClass.methods()

        for (var i = 0; i < methods.length; i++) {
            var method = methods[i];
            if (method.name === methodName) {
                return method;
            }
        }

        return null;
    }

};
