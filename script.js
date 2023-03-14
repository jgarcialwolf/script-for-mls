// Conditionally filling and colouring feature fields with modified labels

// let my_div = document.getElementById("sortable_rows");
// let level_two = my_div.children; //map_type_field

// let labels = [];
// for (let item of level_two) {
//   let level_three = item.children[2]; // grid_4 3d child
//   let level_three_check = item.children[3]; // grid_4 4th child
//   let level_three_write = item.children[4]; // grid_4 5th child
//   let box_value = level_three.getElementsByTagName("input")[0].value;

//   if ((level_three_write.getElementsByTagName("input")[0].value == "") && (level_three_check.getElementsByTagName("input")[0].value == "")) {
//     level_three_write.getElementsByTagName("input")[0].value = box_value.toLowerCase().split(" ").join("_");
//     level_three_write.getElementsByTagName("input")[0].style.backgroundColor = "rgb(255, 207, 207)";
//   }
//   labels.push(box_value);
// }
// console.log(labels);

// let features = [];
// labels.forEach(element => {
//   features.push(element.toLowerCase().split(" ").join("_"));
// });
// console.log(features);






// ------------------------------------------------------------------------------------------------
// OR...
// Conditionally filling and colouring feature fields with modified labels using regex
// Also replaces key words with abbreviations instead
// Pushes box_value to labels array if model and feature fields are empty

// let my_div = document.getElementById("sortable_rows");
// let level_two = my_div.children;

// let labels = [];
// for (let item of level_two) {
//   let level_three = item.children[2];
//   let level_three_check = item.children[3];
//   let level_three_write = item.children[4];
//   let box_value = level_three.getElementsByTagName("input")[0].value.toLowerCase();
  
//   if ((level_three_write.getElementsByTagName("input")[0].value == "") && (level_three_check.getElementsByTagName("input")[0].value == "")) {
//     box_value = box_value.replace(/[\s\/]+/g, "_");
//     box_value = box_value.replace(/\$|\.|:/g, "");
//     box_value = box_value.replace(/#+/g, "numb");

//     box_value = box_value.replace(/features/, "feats");
//     box_value = box_value.replace(/description/, "desc");
//     box_value = box_value.replace(/annual/, "ann");
//     box_value = box_value.replace(/income/, "inc");
//     box_value = box_value.replace(/approximate/, "apx");
//     box_value = box_value.replace(/amount/, "amt");
//     box_value = box_value.replace(/includes/, "incl");
//     box_value = box_value.replace(/compensation/, "comp");
//     box_value = box_value.replace(/disclaimer/, "disc");
//     box_value = box_value.replace(/attribution/, "attr");

//     box_value = box_value.replace(/^1/, "first");
//     box_value = box_value.replace(/^2/, "second");
//     box_value = box_value.replace(/^3/, "third");
//     box_value = box_value.replace(/^4/, "fourth");

//     level_three_write.getElementsByTagName("input")[0].value = box_value
//     level_three_write.getElementsByTagName("input")[0].style.backgroundColor = "rgb(255, 207, 207)";
//     labels.push(box_value);
//   }
// }







// ------------------------------------------------------------------------------------------------
// for (let item of level_two) {
//   let level_three = item.children[2]
//   let level_four = level_three.getElementsByTagName("input")[0].value
//   console.log("item is ", item);
//   console.log("level_three is ", level_three);
//   console.log("level_four is ", level_four);
// }


// let rows = document.getElementsByClassName("map_type_field");
// let rows_arr = Array.from(rows);
// let column = rows.getElementsByClassName("grid_4");

// let arr = Array.from(rows);

// console.log(rows);
// console.log(rows[0]);

// let result = []
// for (let item of rows) {
  // let my_item = Array.from(item);
  // console.log(item);
  // console.log(my_item);
  // result.push(item)
  // console.log("item is", item);
// }
  
// console.log(column);
// console.log(rows.length);
// console.log(rows[0]);
// console.log(result[0]);



// row map_type_field



// let rows = Array.from(document.getElementsByClassName("map_type_field"));
// let rows = document.getElementsByClassName("map_type_field");
// let rows = document.querySelectorAll(".map_type_field");
// let column = rows[0].children;
// let column = rows[0];



// ------------------------------------------------------------------------------------------------

// Only for checking ALL Idx and Vow boxes:

// let myIdxs = document.getElementsByClassName("idx_checkall_checkbox");
// for (let box of myIdxs) {
//   if (!box.checked) {
//     box.checked = true;
//     box.parentElement.style.border = "1px solid #FF0000";
//   }
// }
// let myVows = document.getElementsByClassName("vow_checkall_checkbox");
// for (let box of myVows) {
//   if (!box.checked) {
//     box.checked = true;
//     box.parentElement.style.border = "1px solid #FF0000";
//   }
// }





// ------------------------------------------------------------------------------------------------

// Fill in feature field, and fill in format modifier with hard coded chosen option:
// Remember to check that the desired column corresponds to item.children[Number of the column] when
// declaring the variables




// let my_div = document.getElementById("sortable_rows");
// let rows = my_div.children;

// for (let row of rows) {
//   let labelDiv = row.children[2];
//   let wantedFeatureVal = labelDiv.getElementsByTagName("input")[0].value.toLowerCase();
//   let modelDiv = row.children[3];
//   let featureDiv = row.children[4];
//   let formatModifierDiv = row.children[6];
//   let formatModifierOptions = {
//     empty: "",
//     delimiter: "'number_with_delimiter'",
//     currency: "'number_to_currency', {:precision => 0}",
//     currencyWC: "'number_to_currency'",
//     date: "'formatted_date'",
//     yN: "'yn_bool'"
//   }


  
//   if ((featureDiv.getElementsByTagName("input")[0].value == "") && (modelDiv.getElementsByTagName("input")[0].value == "")) {
//     wantedFeatureVal = wantedFeatureVal.replace(/[\s\/]+/g, "_");
//     wantedFeatureVal = wantedFeatureVal.replace(/\$|\.|:/g, "");
//     wantedFeatureVal = wantedFeatureVal.replace(/#+/g, "numb");
    
//     wantedFeatureVal = wantedFeatureVal.replace(/features/, "feats");
//     wantedFeatureVal = wantedFeatureVal.replace(/description/, "desc");
//     wantedFeatureVal = wantedFeatureVal.replace(/annual/, "ann");
//     wantedFeatureVal = wantedFeatureVal.replace(/income/, "inc");
//     wantedFeatureVal = wantedFeatureVal.replace(/approximate/, "apx");
//     wantedFeatureVal = wantedFeatureVal.replace(/amount/, "amt");
//     wantedFeatureVal = wantedFeatureVal.replace(/includes/, "incl");
//     wantedFeatureVal = wantedFeatureVal.replace(/compensation/, "comp");
//     wantedFeatureVal = wantedFeatureVal.replace(/disclaimer/, "disc");
//     wantedFeatureVal = wantedFeatureVal.replace(/attribution/, "attr");
    
//     wantedFeatureVal = wantedFeatureVal.replace(/^1/, "first");
//     wantedFeatureVal = wantedFeatureVal.replace(/^2/, "second");
//     wantedFeatureVal = wantedFeatureVal.replace(/^3/, "third");
//     wantedFeatureVal = wantedFeatureVal.replace(/^4/, "fourth");
    
//     featureDiv.getElementsByTagName("input")[0].value = wantedFeatureVal
//     featureDiv.getElementsByTagName("input")[0].style.backgroundColor = "rgb(255, 207, 207)";

//     // choose one of the formatModifierOptions to change value:
//     formatModifierDiv.getElementsByTagName("select")[0].value = formatModifierOptions["delimiter"];
//     formatModifierDiv.style.backgroundColor = "rgb(255, 207, 207)";
//   }
// }



// ------------------------------------------------------------------------------------------------

// Fill in feature field, check Idx and Vow boxes, and fill in format modifier with chosen option:
// ¡¡¡Remember to check that the desired column corresponds to item.children[Number of the column] when
// declaring the variables!!!




// let my_div = document.getElementById("sortable_rows");
// let rows = my_div.children;

// for (let row of rows) {
//   let labelDiv = row.children[2];
//   let wantedFeatureVal = labelDiv.getElementsByTagName("input")[0].value.toLowerCase();
//   let modelDiv = row.children[3];
//   let featureDiv = row.children[4];
//   let formatModifierDiv = row.children[6];
//   let formatModifierOptions = {
//       empty: "",
//       delimiter: "'number_with_delimiter'",
//       currency: "'number_to_currency', {:precision => 0}",
//       currencyWC: "'number_to_currency'",
//       date: "'formatted_date'",
//       yN: "'yn_bool'"
//     }

//   let rowIdx = row.children[7].children[0].children[1];
//   let rowVows = row.children[8].children[0].children[1];

  
  
//   if ((featureDiv.getElementsByTagName("input")[0].value == "") && (modelDiv.getElementsByTagName("input")[0].value == "")) {
//     wantedFeatureVal = wantedFeatureVal.replace(/[\s\/]+/g, "_");
//     wantedFeatureVal = wantedFeatureVal.replace(/\$|\.|:/g, "");
//     wantedFeatureVal = wantedFeatureVal.replace(/#+/g, "numb");
    
//     wantedFeatureVal = wantedFeatureVal.replace(/features/, "feats");
//     wantedFeatureVal = wantedFeatureVal.replace(/description/, "desc");
//     wantedFeatureVal = wantedFeatureVal.replace(/annual/, "ann");
//     wantedFeatureVal = wantedFeatureVal.replace(/income/, "inc");
//     wantedFeatureVal = wantedFeatureVal.replace(/approximate/, "apx");
//     wantedFeatureVal = wantedFeatureVal.replace(/amount/, "amt");
//     wantedFeatureVal = wantedFeatureVal.replace(/includes/, "incl");
//     wantedFeatureVal = wantedFeatureVal.replace(/compensation/, "comp");
//     wantedFeatureVal = wantedFeatureVal.replace(/disclaimer/, "disc");
//     wantedFeatureVal = wantedFeatureVal.replace(/attribution/, "attr");
    
//     wantedFeatureVal = wantedFeatureVal.replace(/^1/, "first");
//     wantedFeatureVal = wantedFeatureVal.replace(/^2/, "second");
//     wantedFeatureVal = wantedFeatureVal.replace(/^3/, "third");
//     wantedFeatureVal = wantedFeatureVal.replace(/^4/, "fourth");
    
//     featureDiv.getElementsByTagName("input")[0].value = wantedFeatureVal
//     featureDiv.getElementsByTagName("input")[0].style.backgroundColor = "rgb(255, 207, 207)";

//     // choose one of the formatModifierOptions to change value:
//     formatModifierDiv.getElementsByTagName("select")[0].value = formatModifierOptions["delimiter"];
//     formatModifierDiv.style.backgroundColor = "rgb(255, 207, 207)";


//     // check Idx and Vow boxes:
//     if (!rowIdx.checked) {
//       rowIdx.checked = true;
//       rowIdx.parentElement.style.border = "1px solid #FF0000";
//     }
//     if (!rowVows.checked) {
//       rowVows.checked = true;
//       rowVows.parentElement.style.border = "1px solid #FF0000";
//     }
//   }
// }



// ------------------------------------------------------------------------------------------------

// Testing format Modifier dinamically according to Name span containing type of format:

let my_div = document.getElementById("sortable_rows");
let rows = my_div.children;

for (let row of rows) {
  let labelDiv = row.children[2];
  let wantedFeatureVal = labelDiv.getElementsByTagName("input")[0].value.toLowerCase();
  let modelDiv = row.children[3];
  let featureDiv = row.children[4];
  let formatModifierDiv = row.children[6];
  let formatModifierOptions = {
      empty: "",
      delimiter: "'number_with_delimiter'",
      currency: "'number_to_currency', {:precision => 0}",
      currencyWC: "'number_to_currency'",
      date: "'formatted_date'",
      yN: "'yn_bool'"
    }

  let rowIdx = row.children[7].children[0].children[1];
  let rowVows = row.children[8].children[0].children[1];


  // TESTING SECTION FOR FORMAT MODIFIER:
  let formatModifierInfo = row.children[0].getElementsByClassName("saved_attr")[2].innerHTML.replace(/[\(\)]/g, "");
  console.log(formatModifierInfo);


  
  
  if ((featureDiv.getElementsByTagName("input")[0].value == "") && (modelDiv.getElementsByTagName("input")[0].value == "")) {
    wantedFeatureVal = wantedFeatureVal.replace(/[\s\/]+/g, "_");
    wantedFeatureVal = wantedFeatureVal.replace(/\$|\.|:/g, "");
    wantedFeatureVal = wantedFeatureVal.replace(/#+/g, "numb");
    
    wantedFeatureVal = wantedFeatureVal.replace(/features/, "feats");
    wantedFeatureVal = wantedFeatureVal.replace(/description/, "desc");
    wantedFeatureVal = wantedFeatureVal.replace(/annual/, "ann");
    wantedFeatureVal = wantedFeatureVal.replace(/income/, "inc");
    wantedFeatureVal = wantedFeatureVal.replace(/approximate/, "apx");
    wantedFeatureVal = wantedFeatureVal.replace(/amount/, "amt");
    wantedFeatureVal = wantedFeatureVal.replace(/includes/, "incl");
    wantedFeatureVal = wantedFeatureVal.replace(/compensation/, "comp");
    wantedFeatureVal = wantedFeatureVal.replace(/disclaimer/, "disc");
    wantedFeatureVal = wantedFeatureVal.replace(/attribution/, "attr");
    
    wantedFeatureVal = wantedFeatureVal.replace(/^1/, "first");
    wantedFeatureVal = wantedFeatureVal.replace(/^2/, "second");
    wantedFeatureVal = wantedFeatureVal.replace(/^3/, "third");
    wantedFeatureVal = wantedFeatureVal.replace(/^4/, "fourth");
    
    featureDiv.getElementsByTagName("input")[0].value = wantedFeatureVal
    featureDiv.getElementsByTagName("input")[0].style.backgroundColor = "rgb(255, 207, 207)";

    // choose one of the formatModifierOptions to change value:
    // TESTING SECTION FOR FORMAT MODIFIER:
    if (formatModifierInfo == "Int") {
      formatModifierDiv.getElementsByTagName("select")[0].value = formatModifierOptions["delimiter"];
      formatModifierDiv.style.backgroundColor = "rgb(255, 207, 207)";
    }
    
    if (formatModifierInfo == "DateTime") {
      formatModifierDiv.getElementsByTagName("select")[0].value = formatModifierOptions["date"];
      formatModifierDiv.style.backgroundColor = "rgb(255, 207, 207)";
    }

    if (formatModifierInfo == "Boolean") {
      formatModifierDiv.getElementsByTagName("select")[0].value = formatModifierOptions["yN"];
      formatModifierDiv.style.backgroundColor = "rgb(255, 207, 207)";
    }


    // check Idx and Vow boxes:
    if (!rowIdx.checked) {
      rowIdx.checked = true;
      rowIdx.parentElement.style.border = "1px solid #FF0000";
    }
    if (!rowVows.checked) {
      rowVows.checked = true;
      rowVows.parentElement.style.border = "1px solid #FF0000";
    }
  }
}
