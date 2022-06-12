let staubID = "24277";
let tbl = document.getElementById("tbl");

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function getPriceForItem(itemID)
{
   return JSON.parse(httpGet("https://api.guildwars2.com/v2/commerce/prices/"+itemID)).sells.unit_price
}
function getNameForItem(itemID)
{
   return JSON.parse(httpGet("https://api.guildwars2.com/v2/items/"+itemID)).name
}

let preisStaub = getPriceForItem(staubID)
let z5 = 5 * preisStaub;

function createTableCell(tr, text){
    let tbMat = document.createElement('td');
    tbMat.innerText = text;
    tr.appendChild(tbMat);
    return tbMat;
}

function createTableEntry(itemIDT6, itemIDT5, tbl)
{
    let preisT6 = getPriceForItem(itemIDT6);
    let preisT5 = getPriceForItem(itemIDT5);
    let name = getNameForItem(itemIDT6);
    let tr = document.createElement('tr');

    createTableCell(tr, name);
    createTableCell(tr, preisT6);
    createTableCell(tr, preisT5);
    createTableCell(tr, preisStaub);

    let x6 = 6 * preisT6;
    let y50 = 50 * preisT5;
    let gewinn = x6-y50-z5;
    let tgewinn = createTableCell(tr, gewinn);
    if (gewinn >= 0)
    {
        tgewinn.parentNode.classList.add("gewinn")
    }
    else
    {
        tgewinn.parentNode.classList.add("verlust")
    }

    tbl.appendChild(tr);
}

//Knochen
createTableEntry("24358","24341", tbl);  
//Klaue
createTableEntry("24351","24350", tbl);
//Fangzahn
createTableEntry("24357","24356", tbl);
//Scale
createTableEntry("24289","24288", tbl);
//Totem
createTableEntry("24300","24299", tbl);
//Venom Sac
createTableEntry("24283","24282", tbl);
//Blood
createTableEntry("24295","24294", tbl);


let staubpreisT5 = getPriceForItem("24276");
let staubname = getNameForItem(staubID);
let staubtr = document.createElement('tr');

createTableCell(staubtr, staubname);
createTableCell(staubtr, preisStaub);
createTableCell(staubtr, staubpreisT5);
createTableCell(staubtr, preisStaub);

let staubgewinn = 5 * preisStaub - 250 * staubpreisT5;
let staubtgewinn = createTableCell(staubtr, staubgewinn);

if (staubgewinn >= 0)
{
    staubtgewinn.parentNode.classList.add("gewinn")
}
else
{
    staubtgewinn.parentNode.classList.add("verlust")
}

tbl.appendChild(staubtr);