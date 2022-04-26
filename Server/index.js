const express = require('express');

const res = require('express/lib/response');
const { createApi } = require('unsplash-js');
const crossFetch = require('cross-fetch');
const app = express();
const port = 3001;

    const api = createApi({
        accessKey: "V02b03CfbSLC_ir0r5_6YYbnolX4x-v378pbOiZPpDI",
        headers: { 'X-Custom-Header': 'foo' },
        fetch: crossFetch,
    });

app.use('/searchimage', function(req, res) {

    api.search.getPhotos({ 
        query: req.query.val,
        page: 1,
        perPage: 9
    
    }).then(result => {
        if(result.type === 'success') {
        res.status(200).send(result.response.results);
        } else {
            console.log(result.errors[0]);
        }
        
        });
});

app.listen(port, () => {
    console.log('Now listening to the port:' + port);
});