//Master function - Mobile/Desktop switch
function filterHome() {
  //Init parameters
  let dataIsotope = {
    itemSelector: ".profileCard",
    fitRows: {
      columnWidth: 50,
      gutter: 6,
    },
  };

  //Isotope Filtering for mobile view
  if (window.innerWidth < 800) {
    dataIsotope.layoutMode = "vertical";
    dataIsotope.getSortData = {
      filterValue: ".profileCard",
    };

    //Isotope Sorting & Filtering for desktop view
  } else {
    dataIsotope.layoutMode = "fitRows";
    dataIsotope.getSortData = {
      filterValue: ".profileCard",
    };
  }

  var $prof = $("#profiles").isotope(dataIsotope);

  //On button click
  $(document).on("click", ".filterProfiles", function (e) {
    tagsFiltering(e, $prof);
  });

  //Responsive grid display
  var id;

  $(window).on("resize", function () {
    var mq = window.matchMedia("(min-width: 800px)");
    if (mq.matches) {
      clearTimeout(id);
      id = setTimeout(function () {
        $("#profiles").isotope({
          layoutMode: "fitRows",
          getSortData: {
            filterValue: ".profileCard",
          },
        });
      }, 0);
    }
  });
}

//////////////////

//Filtering items
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

////////////////////

//Global Variables//
var filters = [];

//Export function
export { filterHome as default };
