var data = {
    devices: {
         sglowna: "Przykładowy text",
         ios: "Opis Systemu",
         iphone7: "Opis iPhone 7",
         iphone8: "Opis iPhone 8",
         ipadmini: "Opis iPada mini",
         ipadair: "Opis iPada Air",
         ipadpro: "Opis iPada Pro",
         macos: "Opis Systemu",
         macbookair: "Opis MacBooka Air",
         macbookpro: "Opis MacBooka Pro",
         imac: "Opis iMaca",
         imacpro: "Opis iMaca Pro",
         oprojekcie: "Kilka słów o projekcie"
    }
};

function insertContent(header, deviceName){
    document.getElementById("content").innerHTML = "<h4>" + header + "</h4>" + data.devices[deviceName];
};