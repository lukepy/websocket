var ws;

function connect() {
    var username = document.getElementById("username").value;
    
    var host = document.location.host;
    var pathname = document.location.pathname;
    
    console.log("ws://" +host  + pathname + "chat/" + username);
    
    console.log("host:  " +host );
    
    console.log("pathname:  " +pathname );
    
    ws = new WebSocket("ws://" +host  + pathname + "chat/" + username);
   // ws = new WebSocket("ws://192.168.1.135/wbs03/chat/" + username);

    ws.onmessage = function(event) {
    var log = document.getElementById("log");
        console.log(event.data);
        var message = JSON.parse(event.data);
        log.innerHTML += message.from + " : " + message.content + "\n";
    };
}

function send() {
    var content = document.getElementById("msg").value;
    var json = JSON.stringify({
        "content":content
    });

    ws.send(json);
}