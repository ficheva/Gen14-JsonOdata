'use strict';

app.dataListView1 = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_dataListView1
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_dataListView1
(function(parent) {
    var dataProvider = app.data.odataDataProvider,
        dataSourceOptions = {
            type: 'odata',
            transport: {
                read: {
                    url: dataProvider.url
                }
            },

            schema: {
                model: {
                    fields: {
                        'ProductName': {
                            field: 'ProductName',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        dataListView1Model = kendo.observable({
            dataSource: dataSource,
            itemClick: function(e) {
                app.mobileApp.navigate('#components/dataListView1/details.html?uid=' + e.dataItem.uid);
            },
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    dataSource = dataListView1Model.get('dataSource'),
                    itemModel = dataSource.getByUid(item);
                if (!itemModel.ProductName) {
                    itemModel.ProductName = String.fromCharCode(160);
                }
                dataListView1Model.set('currentItem', itemModel);
            },
            currentItem: null
        });

    if (typeof dataProvider.sbProviderReady === 'function') {
        dataProvider.sbProviderReady(function dl_sbProviderReady() {
            parent.set('dataListView1Model', dataListView1Model);
        });
    } else {
        parent.set('dataListView1Model', dataListView1Model);
    }
})(app.dataListView1);

// START_CUSTOM_CODE_dataListView1Model
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_dataListView1Model