var socket = io.connect('http://localhost:4444');
var table = document.getElementById("statistics");
    setInterval(function () {
        socket.emit("get stats", []);
    }, 1000);
        socket.on("send stats", function (statistics) {
        statistics = JSON.parse(statistics);
        table.innerHTML = "";
        tableHTML = "<tr><td>kadreri qanak</td><td>Խոտ</td><td>Խոտակեր</td><td>ԷքԽոտակեր</td><td>Վագր</td><td>ԷքՎագր</td><td>Մարդ</td><td>ԷքՄարդ</td><td>Շինարար</td><td>Քանդող</td><td>Տեսլա</td></tr>";
        for (var st of statistics) {
            tableHTML += "<tr>";
            tableHTML += "<td>" + st.timestamp + "</td>";
            tableHTML += "<td>" + st.Խոտ + "</td>";
            tableHTML += "<td>" + st.Խոտակեր + "</td>";
            tableHTML += "<td>" + st.ԷքԽոտակեր + "</td>";
            tableHTML += "<td>" + st.Վագր + "</td>";
            tableHTML += "<td>" + st.ԷքՎագր + "</td>";
            tableHTML += "<td>" + st.Մարդ + "</td>";
            tableHTML += "<td>" + st.ԷքՄարդ + "</td>";
            tableHTML += "<td>" + st.Շինարար + "</td>";
            tableHTML += "<td>" + st.Քանդող + "</td>";
            tableHTML += "<td>" + st.Տեսլա + "</td>";
    
            tableHTML += "</tr>";
        }
    
        table.innerHTML = tableHTML;
    })



