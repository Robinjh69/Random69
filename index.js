/*********************************************************************************
*                              Author: Author Name                               *
*                              File Name: index.js                               *
*                   Creation Date: September 12, 2020 12:48 AM                   *
*                   Last Updated: September 12, 2020 11:39 PM                    *
*                          Source Language: javascript                           *
*             Repository: https://github.com/Robinjh69/Random69.git              *
*********************************************************************************/


var minboks = document.getElementById("minboks");
var knappen = document.getElementById("klikkemeg");
var pluss2 = document.getElementById("+")
var minus2 = document.getElementById("-")
var tallboks = document.getElementById("tallboks")

const form = document.getElementById("tissemanform");

/* -------------------------------------------------------------------------- */
/*                               Tisseman string                              */
/* -------------------------------------------------------------------------- */

function tissemann() {
  minboks.innerHTML = minboks.innerHTML + "tissemann"
  console.log("test")
}

knappen.onclick = tissemann

/* -------------------------------------------------------------------------- */
/*                              Pluss Minus knapp                             */
/* -------------------------------------------------------------------------- */

function pluss() {
    var minVar = parseInt(tallboks.innerHTML)
    tallboks.innerHTML = minVar +1
}
function minus() {
    tallboks.innerHTML = tallboks.innerHTML -1
}

pluss2.onclick = pluss;
minus2.onclick = minus;

/* -------------------------------------------------------------------------- */
/*                               Tissemann form                               */
/* -------------------------------------------------------------------------- */

const navneboks = document.getElementById("navn");
const tissemannboksJa = document.getElementById("Ja");
const tissemannboksNei = document.getElementById("Nei");
var tissemannboks;
var navn

form.onsubmit = (event) => {
  event.preventDefault(); // Ikke send til PHP server
  
  if (tissemannboksJa.checked === true) {
      tissemannboks = "Ja"
  }
  else if (tissemannboksNei.checked === true) {
      tissemannboks =  "Nei"
  }
  else {
      tissemannboks = "NA"
  }
  
  if (navneboks.value === "") {
      navn = "NA"
  }
  else {
      navn = navneboks.value
  }

  console.log(`Navn: ${navn}, Tisseman?: ${tissemannboks}`)

}

/* -------------------------------------------------------------------------- */
/*                                 bilde ting                                 */
/* -------------------------------------------------------------------------- */

var plussbilde2 = document.getElementById("høyre");
var minusbilde2 = document.getElementById("venstre");
var img = document.getElementById("bildefremvisning");
var globalBildeNr = 0;
var bilder = [
    "https://ih0.redbubble.net/image.468953399.0514/flat,1000x1000,075,f.jpg",
    "./bilder/nese.jpg"
];

function plussbilde() {
    globalBildeNr = globalBildeNr + 1;
    if (globalBildeNr === bilder.length) {
        globalBildeNr = 0;
    }
    printbilde(globalBildeNr);
}

function minusbilde() {
    globalBildeNr = globalBildeNr - 1
    if (globalBildeNr === -1){
        globalBildeNr = bilder.length - 1; 
    }
    printbilde(globalBildeNr);
}

plussbilde2.onclick = plussbilde;
minusbilde2.onclick = minusbilde;

function printbilde(bildeNr) {
    var bildenaa = bilder[bildeNr];
    img.setAttribute("src", bildenaa);
}

printbilde(0);





/* -------------------------------------------------------------------------- */
/*                                 Annet drit                                 */
/* -------------------------------------------------------------------------- */


async function getImagesFromReddit() {
    const LINK = 'https://www.reddit.com/r/pics/top.json?t=day&limit=100';
    
    const response = await fetch(LINK);
    console.log('Got data from reddit');
    
    const data = await response.json();
    console.log('I has converted');
    
    links = []
    for (i of data.data.children) {
        if (i.data.url != null) {
            links.push(i.data.url);
        }
    }
    return links;
}

async function addRedditLinksToArray(array) {
    newLinks = await getImagesFromReddit()
    return [...array, ...newLinks];
}

addRedditLinksToArray(bilder)
    .then(nyliste => bilder = nyliste);

