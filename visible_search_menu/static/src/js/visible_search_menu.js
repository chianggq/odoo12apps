odoo.define('visible_search_menu', function (require) {
"use strict";

var SearchView = require('web.SearchView');
//added 2018.8.13
SearchView.include({
    init: function () {
        var self = this;
        if(!localStorage.visible_search_menu){
            localStorage.visible_search_menu = true;
        }
        self._super.apply(self, arguments);
    }
});

});