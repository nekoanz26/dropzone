Template.Dropzone.rendered = function () {
    var data = this.data ? this.data : {};
    
    if (typeof data.options === 'undefined') {
        throw new Meteor.Error('Dropzone should have valid options')
    }

    var options = data.options ? data.options : {};

    Dropzone.autoDiscover = false;

    this.myDropzone = new Dropzone('.dropzone-wrapper',{
        'url': options.uploadUrl,
        params : options.params
    });

    this.myDropzone.on("successmultiple", options.successmultiple);
};

Meteor.startup(function () {
    $('head').append('<link rel="stylesheet" href="/packages/nekoanz_dropzone/dist/dropzone.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="/packages/nekoanz_dropzone/dist/basic.css" type="text/css" />');
});