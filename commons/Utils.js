var debugRequest = function(request, response, boolEndResponse){
    response.write(request.url + '\n');
    response.write('Params: ' + JSON.stringify(request.params) + '\n');
    response.write('Body: ' + JSON.stringify(request.body) + '\n');
    if(boolEndResponse){
        response.end();  
    }
};

var jsonResponse = function(request, response, jsonData, boolEndResponse){
    response.writeHead(200, {
        'content-type' : 'application/json'
    });
    response.write(JSON.stringify(jsonData));
    if(boolEndResponse){
        response.end();
    }
};

module.exports = {
    debugRequest : debugRequest,
    jsonResponse : jsonResponse
}