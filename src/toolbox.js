(function(window, document, undefined) {
    'use strict';
    /*
     * Global api.
     */
    var toolbox = window.toolbox = {
        get: function() {
            return _instance;
        },
        //Main entry point.
        init: function(options) {
            return _instance || new Toolbox(options);
        }
    };

    /**
     * Constructor.
     */
    function Toolbox(options) {
        _instance = this;
        return _instance;
    }

    Toolbox.prototype.getController = function()
    {
        return document.getElementById('main-content').getAttribute("data-controller")
    }

    Toolbox.prototype.getController = function()
    {
        var index = $(document.getElementById('state-indicator')).css('z-index');
            var states = {
                1 : 'mobile',
                2:  'tablet'
            };
            return states[index] || 'desktop';
    }

    // Singleton
    var _instance;

}(window, document));