(function () {

    function populatePrefValues(prefArray, prefName, valuesArray) {
        var pref, i, j, len, valLen;
        for (i = 0, len = prefArray.length; i < len; i++) {
            if (prefArray[i].name === prefName) {
                for (j = 0, valLen = valuesArray.length; j < valLen; j++) {
                    pref = valuesArray[j].split(',');
                    prefArray[i].inputType.options = prefArray[i].inputType.options || {};
                    prefArray[i].inputType.options[j] = {
                        label: pref[0],
                        value: pref[1]
                    };
                }
            }
        }
    }


    var Container = b$.bdom.getNamespace('http://backbase.com/2013/portalView').getClass('container'),
        NavigationContainer = Container.extend(function (bdomDocument, node) {
                Container.apply(this, arguments);
                this.isPossibleDragTarget = true;
            }, {
                localName: 'NavigationContainer',
                namespaceURI: 'universal'
            }, {
                template: function (json) {
                    var data = {item: json.model.originalItem};
                    var sTemplate = window.templates_NavigationContainer.NavigationContainer(data);
                    return sTemplate;
                },
                handlers: {
                    'preferences-form': function () {
                        this.helpTexts = {
                            viewType: {
                                text: 'Please note. Changing view template isn`t safe for items inside the container.'
                                    + ' Since a layout may have different set of areas. The structure of the content can be lost.'
                                    + ' Please save all the nested items outside the navigation container before changing this preference value.'
                            }
                        };
                        var container = this.htmlNode;
                        var model = b$.getVC(container).model;

                        populatePrefValues(
                            model.preferences.array,
                            'layoutType',
                            model.getPreference('layoutTypeList').split(';')
                        );
                        populatePrefValues(
                            model.preferences.array,
                            'viewType',
                            model.getPreference('viewTypeList').split(';')
                        );
                    },
                    DOMReady: function() {
                        var container = this.htmlNode;
                        var model = b$.getVC(container).model;

                        var isDesignMode = window.bd && window.bd.designMode || window.top && window.top.bd && window.top.bd.designMode;
                        var designModeStylesPath = model.getPreference('designModeStylesPath');
                        var self = this;
                        var resourceSequence = new b$._private.ResourceSequence();

                        if (isDesignMode && designModeStylesPath) {
                            resourceSequence.addURI('text/css', designModeStylesPath.replace(/\$\(contextRoot\)/, b$.portal.config.serverRoot));
                        }
                        resourceSequence.startLoading();
                        $('[data-target="#nav-sidebar-collapse"]').click(function (e) {
                            e.preventDefault();
                            $('.rb-row-content').toggleClass('active')
                        });
                    },
                    preferencesSaved: function (e) {
                        e.target.refreshHTML();
                    }
                }
            }
        );
})();
