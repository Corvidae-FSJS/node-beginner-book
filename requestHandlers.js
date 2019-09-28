var querystring = require("querystring");

function start(response, postData) {
  console.log(`Request handler 'start' was called.`);

  const body = '<html>' +
      '<head>' +
      '<meta http-equiv="Content-Type" content=text/html; ' +
      'charset=utf-8" />' +
      '</head>' +
      '<body>' +
      '<form action="/upload" enctype="multipart/form-data" ' +
      'method="post">' +
      '<input type="file" name="upload" multiple="multiple" ' +
      '<input type="submit" value="Upload file" />' +
      '</form>' +
      '</body>' +
      '</html>';

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called"); 
  response.writeHead(200, {"Content-Type": "test/plain"});
  response.write("You've sent: " + 
  querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;