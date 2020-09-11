
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
/*                                 Annet drit                                 */
/* -------------------------------------------------------------------------- */

// console.log(minboks.innerHTML);

// console.log(minboks.innerHTML);

// var test = "hei"

// var a = 5
// var b = 2

// console.log(a + b)

