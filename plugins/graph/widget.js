/**
 * Created by kinneretzin on 07/09/2016.
 */


addPlugin({
    id: "graph",
    name: "some graph",
    description: 'blah blah blah',
    initialWidth: 8,
    initialHeight: 4,
    color : "blue",
    render: function(widget,data,context,pluginUtils) {

        if (!widget.plugin.template) {
            return 'graph: missing template';
        }

        return pluginUtils.buildFromTemplate(widget.plugin.template);
    }
});