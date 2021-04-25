//Profiles Filter
export function listener() {
    document.getElementById("all").addEventListener("click", function () {
        filterSelection("all")
    });
    document.getElementById("portrait").addEventListener("click", function () {
        filterSelection("portrait")
    });
    document.getElementById("art").addEventListener("click", function () {
        filterSelection("art")
    });
    document.getElementById("fashion").addEventListener("click", function () {
        filterSelection("fashion")
    });
    document.getElementById("architecture").addEventListener("click", function () {
        filterSelection("architecture")
    });
    document.getElementById("travel").addEventListener("click", function () {
        filterSelection("travel")
    });
    document.getElementById("sport").addEventListener("click", function () {
        filterSelection("sport")
    });
    document.getElementById("animals").addEventListener("click", function () {
        filterSelection("animals")
    });
    document.getElementById("events").addEventListener("click", function () {
        filterSelection("events")
    });
    /* document.getElementsByClassName("listTagsCont").addEventListener("click",
    filterSelection(this.getAttribute('data-tagslist'))); */
}
  
  
  export function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("profileCard");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  
    for (i = 0; i < x.length; i++) {
      profRemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) profAddClass(x[i], "show");
    }
  }
  
  // Show filtered elements (filterSelection dependency)
  export function profAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected  (filterSelection dependency)
  export function profRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
}
  
//Filter tags buttons
export function filterTagsButtons() {
  var btnContainer = document.getElementById("filterButtons");

  var btns = btnContainer.getElementsByClassName("filterButton");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

//Filter tags cards
export function filterTagsButtonsPP() {

  var btns = document.getElementsByClassName("listTagsCont");
  var btnContainer = document.getElementById("filterButtons");

  var btnsUP = btnContainer.getElementsByClassName("filterButton");
  console.log(btnsUP)

  for (var i = 0; i < btns.length; i++) {
    
    btns[i].addEventListener("click", function () {
      var btnsUP = btnContainer.getElementsByClassName("filterButton");
  console.log(btnsUP)
      var current = document.getElementsByClassName("active");
      console.log(current)
      current[0].className = current[0].className.replace(" active", "");
      btnsUP.className += " active";
    });
  }
}
  