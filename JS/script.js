var text = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, eros sed commodo fermentum, dolor ligula fringilla eros, a egestas metus justo a magna. Fusce vitae arcu fermentum, hendrerit lorem ut, euismod purus. Nullam tellus libero, tempus vitae blandit quis, sollicitudin pulvinar purus. Duis sollicitudin congue dolor, eget vehicula arcu scelerisque nec. Donec condimentum lacus at nunc commodo, blandit congue ipsum vehicula. Fusce laoreet consequat lectus, quis mollis nibh malesuada ac. Suspendisse at elit ullamcorper mi vehicula scelerisque id ac sem. Mauris eget magna ligula. Sed ut ultrices sem. Curabitur ut lectus eget nunc consequat posuere.</p><p>Mauris ultrices ultricies mollis. Sed id ante vitae justo sollicitudin venenatis in quis lectus. Etiam sed volutpat tortor. Sed eget risus et tortor posuere cursus. Fusce feugiat tincidunt placerat. Cras at orci facilisis, ultricies massa porta, maximus elit. Ut laoreet, quam id hendrerit sagittis, ante dolor efficitur ante, sit amet dapibus dolor nulla vitae dolor. Aenean mattis a nisl eu tincidunt. Nullam varius enim eros. Vivamus a magna consequat, consequat justo a, blandit arcu.</p>";

function insertContent(header, text){
    document.getElementById("content").innerHTML = "<h4>" + header + "</h4>" + text;
};

function sglowna(){
    insertContent("O Apple", text);
}

function iOS(){
    insertContent("O iOS", text);
}

function iPhone7(){
    insertContent("iPhone 7", text);
}

function iPhone8(){
    insertContent("iPhone 8", text);
}

function iPadmini(){
    insertContent("iPad mini", text);
}

function iPadair(){
    insertContent("iPad Air", text);
}

function iPadpro(){
    insertContent("iPad Pro", text);
}

function MacOS(){
    insertContent("O MacOS", text);
}

function MacBookAir(){
    insertContent("MacBook Air", text);
}

function MacBookPro(){
    insertContent("MacBook Pro", text);
}

function iMac(){
    insertContent("iMac", text);
}

function iMacPro(){
    insertContent("iMac Pro", text);
}

function Oprojekcie(){
    insertContent("O projekcie", text);
}