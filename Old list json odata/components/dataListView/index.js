'use strict';

app.dataListView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_dataListView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_dataListView
(function(parent) {
    var dataProvider = app.data.jsonDataProvider,
        dataSourceOptions = {
            type: 'json',
            transport: {
                read: {
                    url: dataProvider.url
                }
            },

            schema: {
                data: 'query.diagnostics.url',
                model: {
                    fields: {
                        'content': {
                            field: 'content',
                            defaultValue: ''
                        },
                    },
                    icon: function() {
                        var i = 'globe';
                        return kendo.format('km-icon km-{0}', i);
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        dataListViewModel = kendo.observable({
            dataSource: dataSource
        });

    if (typeof dataProvider.sbProviderReady === 'function') {
        dataProvider.sbProviderReady(function dl_sbProviderReady() {
            parent.set('dataListViewModel', dataListViewModel);
        });
    } else {
        parent.set('dataListViewModel', dataListViewModel);
    }
})(app.dataListView);

// START_CUSTOM_CODE_dataListViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_dataListViewModel