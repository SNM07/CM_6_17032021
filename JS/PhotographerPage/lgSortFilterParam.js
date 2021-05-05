function sortAndFilterParam() {
  ////Init parameters
  let dataIsotope = {
    itemSelector: ".photoAHREF",
    fitRows: {
      columnWidth: 50,
      gutter: 30,
    },
  };

  //Isotope Filtering for mobile view
  if (window.innerWidth < 800) {
    dataIsotope.layoutMode = "vertical";
    dataIsotope.getSortData = {
      Popularite: ".photoLikes parseInt",
      Date: ".photoDate",
      Titre: ".photoTitle",
      filterValue: ".photoTags",
    };
    dataIsotope.sortBy = "Titre";
    dataIsotope.sortAscending = false;
    dataIsotope.layoutMode = "fitRows";

    //Isotope Sorting & Filtering for desktop view
  } else {
    dataIsotope.getSortData = {
      Popularite: ".photoLikes parseInt",
      Date: ".photoDate",
      Titre: ".photoTitle",
      filterValue: ".photoTags",
    };
    dataIsotope.sortBy = "Titre";
    dataIsotope.sortAscending = false;
    dataIsotope.layoutMode = "fitRows";
  }

  var $grid = $(".photoGall").isotope(dataIsotope);

  //Filter function on click event
  $(".profileTags").on("click", "button", function (e) {
    setButtonFilter(e, $grid);
  });

  //Create br at the end of the section
  creatBR();

  // bind sorter on select change and sorting
  $(".filters-select").on("change", function () {
    var sortValue = this.value;
    $grid.isotope({
      sortBy: sortValue,
      sortAscending: {
        Popularite: false,
        Date: true,
        Title: true,
      },
    });
  });

  //Reattribute data-val from reorder
  $grid.on("arrangeComplete", function (e, filteredItems) {
    var dataVal = 1;

    $(filteredItems).each(function (index, item) {
      $(item.element).find("a.title").attr("data-val", dataVal);
      let t = dataVal++;
      index = t.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      item.element.setAttribute("data-val", index);
    });

    //Rearrange HTML elements
    sortOut();

    //Recreate Lightbox
    destroyGallery();
    createGallery();

    //Set tabindex for hidden elements
    setTabIndex();
  });

  //Create br at the end of the section
  creatBR();

  //Arrange by popularity on windows first load
  setTimeout(() => {
    $(".filters-select").trigger("change");
  }, 0);

  //Responsive grid display
  var id;

  $(window).on("resize", function (e) {
    var mq = window.matchMedia("(min-width: 800px)");
    if (mq.matches) {
      clearTimeout(id);
      id = setTimeout(function () {
        $(".filters-select").trigger("change");
      }, 0);
    }
  });
}
////////////////////////////////////////////////

//Set button filter
function setButtonFilter(e, $grid) {
  var $target = $(e.currentTarget);
  var isCheckedProcess = !$target.hasClass("is-checked");

  if (isCheckedProcess) {
    addFilter($target);
  } else {
    removeFilter($target);
  }

  //Filtering
  let filterJoin = "*";
  if (filters.length > 0) {
    filterJoin = filters.join(", ");
  }

  $grid.isotope({ filter: filterJoin });
}

/////////////

//Add filter
function addFilter($target) {
  var filter = $target.attr("data-filter");

  $target.addClass("is-checked");

  if (filters.indexOf(filter) == -1) {
    filters.push(filter);
  }
}

//Remove filter
function removeFilter($target) {
  var filter = $target.attr("data-filter");

  $target.removeClass("is-checked");
  $target.blur();

  var index = filters.indexOf(filter);
  if (index != -1) {
    filters.splice(index, 1);
  }
}

//Set tabindex -1 on hidden cards
function setTabIndex() {
  let $cont = $('a[style*="block"]');
  let $cont2 = $('a[style*="display: none"]');
  let $contAll = $(".photoAHREF");
  $contAll.each(function () {
    $contAll.attr("tabindex", "0");
  });
  $contAll.each(function () {
    $cont2.attr("tabindex", "-1");
  });
  $contAll.each(function () {
    $cont.attr("tabindex", "0");
  });
  sortOut();
}

//create br
function creatBR() {
  const br = document.createElement("br");
  let sec = document.getElementById("photoGallery");
  sec.appendChild(br);
}

//Reorder HTML elements
function sortOut() {
  var classname = document.getElementsByClassName("photoAHREF");
  var divs = [];
  for (var i = 0; i < classname.length; ++i) {
    divs.push(classname[i]);
  }

  divs.sort(function (a, b) {
    return a.dataset.val.localeCompare(b.dataset.val);
  });

  var br = document.getElementsByTagName("br")[0];
  let parent = document.getElementById("photoGallery");

  divs.forEach(function (el) {
    parent.insertBefore(el, br);
  });
}

//Destroy gallery
function destroyGallery() {
  $gallery.data("lightGallery").destroy(true);
}

//Filtering recreate lightbox gallery
function createGallery() {
  const filters = $(".filtButtonPP.is-checked");

  let data = {
    download: false,
    getCaptionFromTitleOrAlt: true,
    preload: 2,
    fullScreen: true,
    hideBarsDelay: 0,
    counter: false,
  };

  //Set selector after filtering
  if (filters.length > 0) {
    let filter = "";
    $.each(filters, (index, elt) => {
      if (filter !== "") {
        filter = filter + ",";
      }

      filter = filter + $(elt).data("filter");
    });

    data.selector = filter;
  }

  $gallery.lightGallery(data);
}

////////////////////

//Global variables//
var filters = [];
let $gallery = $("#photoGallery");
$gallery.lightGallery({
  download: false,
  getCaptionFromTitleOrAlt: true,
  preload: 2,
  fullScreen: true,
  hideBarsDelay: 0,
  counter: false,
});

//Export functions
export { sortAndFilterParam, creatBR, sortOut, setTabIndex };
