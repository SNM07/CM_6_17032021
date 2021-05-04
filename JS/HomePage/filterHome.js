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


function tagsFiltering(e, $prof) {
  var $target = $(e.currentTarget);
  var isCheckedProcess = !$target.hasClass("is-checked");

  if (isCheckedProcess) {
    addFilter($target);
  } else {
    removeFilter($target);
  }

  let filterJoin = filters.join(", ");
  $prof.isotope({ filter: filterJoin });
}

//Add filters
function addFilter($target) {
  var filter = $target.attr("data-filter");
  const sameFil = $(document.querySelectorAll(filter));

  sameFil.addClass("is-checked");
  $target.addClass("is-checked");

  if (filters.indexOf(filter) == -1) {
    filters.push(filter);
  }
}

//Remove filters
function removeFilter($target) {
  var filter = $target.attr("data-filter");
  const sameFil = $(document.querySelectorAll(filter));

  sameFil.removeClass("is-checked");
  $target.removeClass("is-checked");
  $target.blur();
  const index = filters.indexOf(filter);
  if (index != -1) {
    filters.splice(index, 1);
  }
}

// Bind filter on tags button change and set class on buttons
var filters = [];

//Export function
export { filterHome as default };
