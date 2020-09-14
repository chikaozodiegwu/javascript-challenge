// from data.js
var tableData = data;
console.log(tableData)

// YOUR CODE HERE!
//Use d3 to select and Get a reference from the table body
var tbody = d3.select("tbody");


//Loop through tableData and append table row 'tr' and Use Object entries
function buildTable(tableData){
    // Clear the html table section
    tbody.html("");
    //Loop to append data 
    tableData.forEach(dataEntry =>{
        var row = tbody.append("tr");
        Object.entries(dataEntry).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
}


// Use d3 to select text and filer
var button = d3.select("#filter-btn");

button.on("click", function(){

    // Create an event that prevent the website from refreshing
    d3.event.preventDefault();

    //Select the input elements from html
    var FilterDate = d3.select("#datetime");
    var FilterCity = d3.select("#cityname");
    var FilterState = d3.select("#stateinitials");

    // Get the value from data file to input into the filter
    var inputDate = FilterDate.property("value").trim();
    var inputCity = FilterCity.property("value").toLowerCase().trim();
    var inputState = FilterState.property("value").toLowerCase().trim();



    // Elaborate/work on the filters
    var DateFiltered = tableData.filter(tableData=>tableData.datetime===inputDate);
    var CityFiltered = tableData.filter(tableData=>tableData.city===inputCity);
    var StateFiltered = tableData.filter(tableData=>tableData.state===inputState);
    var CDSfiltered = tableData.filter(tableData =>tableData.city ===inputCity && tableData.datetime ===inputDate && tableData.state===inputState);
    var DSfiltered = tableData.filter(tableData => tableData.datetime===inputDate && tableData.state===inputState);
    var DCfiltered = tableData.filter(tableData => tableData.datetime===inputDate && tableData.city===inputCity);
    var CSfiltered = tableData.filter(tableData =>tableData.city ===inputCity && tableData.state===inputState);

    // Populate filter to the table
    tbody.html("");

    let result = {CDSfiltered, DSfiltered, DCfiltered, CSfiltered, DateFiltered,CityFiltered, StateFiltered}

    if (result.CDSfiltered.length !=0){
        buildTable(CDSfiltered);
    }
        else if(result.DSfiltered.length !=0){
            buildTable(DSfiltered)
        }
        else if(result.DCfiltered.length !=0){
            buildTable(DCfiltered)
        }
        else if(result.CSfiltered.length !=0){
            buildTable(CSfiltered)
        }
        else if(result.DateFiltered.length !=0){
            buildTable(DateFiltered)
        }
        else if(result.CityFiltered.length !=0){
            buildTable(CityFiltered)
        }
        else if(result.StateFiltered.length !=0){
            buildTable(StateFiltered)
        }
        else{
            tbody.append("tr").append("td").text("Try another filter")
        }
});

buildTable(tableData);

var resetButton = d3.select('#reset-btn')
resetButton.on("click", function() {
    tbody.html("");
    buildTable(tableData)
    console.log("Table is reset")
});