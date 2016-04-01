/**
 * Created by lenur on 4/1/16.
 */
function AppCtrl() {

    var app = this;
    app.selectItem = 'home';

    app.setSelectItem = function (value) {
        app.selectItem = value;
    };
}