Package.describe({
    name: 'nekoanz:dropzone',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'MeteorJS wrapper for DropzoneJS',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['ecmascript','templating'],'client');

    api.addFiles([
        'dist/dropzone.js',
        'dropzone.js',
        'dropzone-template.html',
        'dropzone-template.js'
    ],'client');

    api.addAssets([
        'dist/dropzone.css',
        'dist/basic.css'
    ],'client');
});