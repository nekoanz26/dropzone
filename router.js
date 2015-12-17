Router.route('/', function() {
    
});

Router.route('/uploads', {where: 'server'})
    .get(function () {
        this.response.end('get request\n');
    })
    .post(function () {
        this.response.end('post request\n');
    });
