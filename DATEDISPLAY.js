var dateelement = document.createElement("input");
dateelement.setAttribute("type", "date");
dateelement.setAttribute("id", "date");
document.body.append(dateelement);

var button = document.createElement("button");
button.innerHTML = "Display data";
button.className = "btn btn-primary";
button.setAttribute("type", "button");
button.addEventListener("click", displaydata);

document.body.append(button);

var div = document.createElement("div");

var div1 = document.createElement("div");

var div2 = document.createElement("div");
var div3 = document.createElement("div");
var div4 = document.createElement("div");
var div5 = document.createElement("div");
var div6 = document.createElement("div");

function displaydata() {
  let input = document.getElementById("date").value;
  console.log(input);
  //date.parse will parse a string to date.
  if (Date.parse(input)) {
    var inputdate = new Date(input);
    var currentdate = new Date();
    //console.log(inputdate, currentdate);
    var millisecdiff = currentdate.getTime() - inputdate.getTime();
    console.log(millisecdiff);

    var secondsdiff = Math.floor(millisecdiff / 1000);
    console.log(secondsdiff);

    var minsdiff = Math.floor(secondsdiff / 60);
    console.log(minsdiff);

    var hourDiff = Math.floor(minsdiff / 60);
    console.log(hourDiff);

    var dayDiff = Math.floor(hourDiff / 24);
    console.log(dayDiff);

    var yearDiff = currentdate.getFullYear() - inputdate.getFullYear();
    console.log(yearDiff);

    var monthDiff =
      yearDiff * 12 + (currentdate.getMonth() - inputdate.getMonth());
    console.log(monthDiff);
    //getMonth() will return the specified month according to the present date
  } else {
    console.log("give a valid date");
  }

  div.innerHTML = `Milliseconds Difference :${millisecdiff}`;
  document.body.append(div);

  div1.innerHTML = `Seconds Difference: ${secondsdiff}`;
  document.body.append(div1);

  div2.innerHTML = `Minutes Difference: ${minsdiff}`;
  document.body.append(div2);

  div3.innerHTML = `Hours difference: ${hourDiff}`;
  document.body.append(div3);

  div4.innerHTML = `Days Difference"${dayDiff}`;
  document.body.append(div4);

  div5.innerHTML = `Year Difference: ${yearDiff}`;
  document.body.append(div5);

  div6.innerHTML = `Month Difference: ${monthDiff}`;
  document.body.append(div6);
}
