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
//var Field1 = d3.select("#datetime");
//var Field2 = d3.select("#city");

button.on("click", function(){

    // Create an event that prevent the website from refreshing
    d3.event.preventDefault();

    //Select the input elements from html
    var FilterDate = d3.select("#datetime");
    var 

    // Get the value from data file to input into the filter
    var inputDate = FilterDate.property("value").trim();


    // Elaborate/work on the filters
    var DateFiltered = tableData.filter(tableData=>tableData.datetime===inputDate);

    // Populate filter to the table
    tbody.html("");

    let result = {DateFiltered}

    if (result.DateFiltered.length !=0){
        buildTable(DateFiltered);
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