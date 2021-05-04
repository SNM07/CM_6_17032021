//Master function - Mobile/Desktop switch
function filterHome() {
  if (window.innerWidth < 800) {
    filterHomeParam("vertical");
  }
  if (window.innerWidth >= 800) {
    filterHomeParam("fitRows");
  }
}

//Filter parameters
function filterHomeParam(layoutModeParam) {
  let $prof = $("#profiles");
  $prof.isotope({
    itemSelector: ".profileCard",
    layoutMode: layoutModeParam,
    fitRows: {
      columnWidth: 50,
      gutter: 6,
    },
    getSortData: {
      filterValue: ".profileCard",
    },
  });
  tagsClickFilt($prof);
}

//On button click
function tagsClickFilt($prof) {
  $(document).on("click", ".filterProfiles", function (e) {
    tagsFiltering(e, $prof);
  });
}

// Bind filter on tags button change and set class on buttons
var filters = [];
function tagsFiltering(e, $prof) {
  //var filterJoin = [];
  /* let chList = document.getElementsByClassName("filterProfiles");
  for (var i = 0; i < chList.length; i++) {
    let chClasses = chList[i].classList;
    chClasses.remove("is-checked");
  } */
  var $target = $(e.currentTarget);
  $target[0].classList.add("is-checked");
  var isChecked = $target.hasClass("is-checked");
  var filter = $target.attr("data-filter");
  var filter2 = $target.attr("data-filter");

  var sameFil = document.querySelectorAll(filter);
  for (var i = 0; i < sameFil.length; i++) {
    sameFil[i].classList.add("is-checked");
  }
  

  if (isChecked) {
    addFilter(filter, filters);
  } else {
    removeFilter(filter, filters);
  }

  let filterJoin = filters.join(", ");
  $prof.isotope({ filter: filterJoin });
}

//Add filters
function addFilter(filter, filters) {
  if (filters.indexOf(filter) == -1) {
    filters.push(filter);
  }
}

//Remove filters
function removeFilter(filter, filters) {
  var index = filters.indexOf(filter);
  if (index != -1) {
    filters.splice(index, 1);
  }
}

//Export function
export { filterHome as default };
