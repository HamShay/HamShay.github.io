

function f(url, place) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById(place).innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function homePageLoading() {
    url1 = 'http://bitcoin.mubiz.com/info';
    elementID1 = 'info';
    f(url1, elementID1);

    url2='http://bitcoin.mubiz.com/blockchaininfo';
    elementID2='blockchaininfo';
    f(url2,elementID2);

    url3='http://bitcoin.mubiz.com/mininginfo';
    elementID3='mininginfo';
    f(url3,elementID3);

    url4='http://bitcoin.mubiz.com/peerinfo';
    elementID2='peerinfo';
    f(url4,elementID2);



    
}
