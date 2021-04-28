export default function filterHome() {
  if (window.innerWidth < 800) {
    filterHomeParam("vertical");
  }
  if (window.innerWidth >= 800) {
    filterHomeParam("fitRows");
  }
}

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

  // bind filter on tags button change
  var filters = [];
  // change is-checked class on buttons

  $(document).on("click", ".filterProfiles", function (event) {
    let chList = document.getElementsByClassName("filterProfiles");
    for (var i = 0; i < chList.length; i++) {
      let chClasses = chList[i].classList;
      console.log(chClasses);
      chClasses.remove("is-checked");
    }
    var $target = $(event.currentTarget);
    console.log($target[0].classList);
    $target[0].classList.add("is-checked");
    var isChecked = $target.hasClass("is-checked");
    var filter = $target.attr("data-filter");
    var filter2 = $target.attr("data-filter");

    var sameFil = document.querySelectorAll(filter);
    for (var i = 0; i < sameFil.length; i++) {
      sameFil[i].classList.add("is-checked");
    }

    if (isChecked) {
      addFilter(filter);
    } else {
      removeFilter(filter);
    }

    $prof.isotope({ filter: filter2 });
  });

  function addFilter(filter) {
    if (filters.indexOf(filter) == -1) {
      filters.push(filter);
    }
  }

  function removeFilter(filter) {
    var index = filters.indexOf(filter);
    if (index != -1) {
      filters.splice(index, 1);
    }
  }
}
