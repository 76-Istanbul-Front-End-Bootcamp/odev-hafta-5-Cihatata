import data from "./data.js"
import {
  createTableElements
} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity")
});

/* START CODING HERE */

//bigger than 500.000
document.querySelector('#populationBigger')
  .addEventListener("click", () => {
    const filterData = data.filter((item) => (item.population > 500000))
    createTableElements(filterData, "allcities");
  })

//less than 1000
document.querySelector('#landAreaLess')
  .addEventListener('click', () => {
    const filterData = data.filter((item) => (item.landArea < 1000))
    createTableElements(filterData, "allcities");
  })

//Does any city has population less than 100.000?
document.querySelector('#isPopulationLess')
  .addEventListener("click", () => {
    const isThere = data.some(item => item.population < 100000);
    isThere ? alert('Yes') : alert('No')
  })

//Does every city has land area bigger than 100? 
document.querySelector('#isLandBigger')
  .addEventListener('click', () => {
    const isAll = data.every(item => item.landArea < 100);
    isAll ? alert('Yes') : alert('No')
  })

const deleteInitialOptions = () => {
  const oldOptions = document.querySelectorAll('option')
  //Delete Initial Options
  oldOptions.forEach((item) => {
    item.remove();
  })
}

const appendOption = () => {
  const select = document.querySelector('#inputGroupSelect01');
  const firstOption = document.createElement("option");
  firstOption.text = "Choose..."
  firstOption.value= -1
  select.appendChild(firstOption);
  //Append New options
  data.forEach((item, index) => {
    const option = document.createElement("option")
    option.text = item.name;
    option.value = index;
    select.appendChild(option);
  })
}
//city select => #selectcity
const createOption = () => {
  deleteInitialOptions()
  appendOption()
}
createOption();

//city select => #selectcity
document.querySelector('#inputGroupSelect01');
  addEventListener('change', (e) => {
    const { value } = e.target;
    // value -1 control
    (data[value] && createTableElements([data[value]], "singlecity"))
  })