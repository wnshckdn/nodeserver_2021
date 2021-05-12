function start(res) {
    let Body = '<head><meta charset="UTF-8"/></head>';
    body += '<body><div>Hello world!<br>I am in the cloud class<br></div>'
    body += '<div><a href="hello">hello 페이지</a></div>'
    body += '<div><a href="wait">5초 대기 페이지</a></div>'
    body += '</body>'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}

function hello(res) {
    let Body = 'This is my first web server.';

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}

function wait(res) {
    setTimeout(function() {
        let Body = 'Thank you for waiting for 5 seconds.';

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(sBody);
        res.end();
    }, 5000);
}

exports.start = start;
exports.hello = hello;
exports.wait = wait;