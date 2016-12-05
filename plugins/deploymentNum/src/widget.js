/**
 * Created by pawelposel on 03/11/2016.
 */

Stage.addPlugin({
    id: "deploymentNum",
    name: "Number of deployments",
    description: 'Number of deployments',
    initialWidth: 4,
    initialHeight: 2,
    color : "violet",
    showHeader: false,
    isReact: true,
    fetchUrl: '[manager]/deployments?_include=id',
    render: function(widget,data,error,context,pluginUtils) {
        if (_.isEmpty(data)) {
            return pluginUtils.renderReactLoading();
        }

        var num = _.get(data, "metadata.pagination.total", 0);
        let KeyIndicator = Stage.Basic.KeyIndicator;

        return (
            <KeyIndicator title="Deployments" icon="cube" number={num}/>
        );
    }
});