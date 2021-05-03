function sortAndFilterParam() {
  ////Lightbox init & parameters
  let $gallery = $("#photoGallery");
  $gallery.lightGallery({
    download: false,
    getCaptionFromTitleOrAlt: true,
    preload: 2,
    fullScreen: true,
    hideBarsDelay: 0,
    counter: false,
  });

  //Isotope Filtering for mobile view
  mobileFilter($gallery);

  //Isotope Sorting & Filtering for desktop view
  desktopFilter($gallery);
}

//Isotope Filtering for mobile view//
function mobileFilter($gallery) {
  if (window.innerWidth < 800) {
    //Init isotope / create grid
    var $grid = $(".photoGall").isotope({
      itemSelector: ".photoAHREF",
      layoutMode: "vertical",
      fitRows: {
        columnWidth: 50,
        gutter: 30,
      },
      getSortData: {
        filterValue: ".photoTags",
      },
    });

    //Filter function on click event
    $(".profileTags").on("click", "button", function (e) {
      setButtonFilter(e, $grid, $gallery);
    });
  }
}
////////////////////////////////////////////////

//Isotope Sorting & Filtering for desktop view//
function desktopFilter($gallery) {
  if (window.innerWidth >= 800) {
    // Init isotope / create grid
    var $grid = $(".photoGall").isotope({
      itemSelector: ".photoAHREF",
      layoutMode: "fitRows",
      sortBy: "Popularite",
      sortAscending: false,
      fitRows: {
        columnWidth: 50,
        gutter: 30,
      },
      getSortData: {
        Popularite: ".photoLikes parseInt",
        Date: ".photoDate",
        Titre: ".photoTitle",
        filterValue: ".photoTags",
      },
    });

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
      //After sorting rearrange, order HTML elements and recreate lightbox
      $grid.one("arrangeComplete", function () {
        sortOut();
        destroySortGal($gallery);
        createSortGal($gallery);
      });
    });

    // bind filter on tags button change
    // change is-checked class on buttons
    $(".profileTags").on("click", "button", function (e) {
      setButtonFilter(e, $grid, $gallery);
    });

    //Reattribute data-val from reorder
    $grid
      .on("arrangeComplete", function (e, filteredItems) {
        //dataVal(filteredItems)
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
      })
      .isotope();

    //Set tabindex -1 on hidden cards
    /*     window.addEventListener("DOMContentLoaded", function () {
      $grid
        .on("arrangeComplete", function () { setTabIndex }).isotope();
      console.log("OK")
    });

    if( document.readyState !== 'loading' ) {
      console.log( 'document is already ready, just execute code here' );
      $grid
        .on("arrangeComplete", function () { setTabIndex }).isotope();
  } else {
      document.addEventListener('DOMContentLoaded', function () {
          console.log( 'document was not ready, place code here' );
          $grid
        .on("arrangeComplete", function () { setTabIndex }).isotope();
      });
  } */

    $grid
      .on("arrangeComplete", function () {
        setTabIndex;
      })
      .isotope();
  }
}

////////////////////////////////////////////////

//Set button filter
function setButtonFilter(e, $grid, $gallery) {
  var filters = [];
  var $target = $(e.currentTarget);
  var filter = $target.attr("data-filter");

  let $butFilt = $(".filtButtonPP");
  let $otherFilters = $butFilt
    .map(function () {
      return $(this).data("filter");
    })
    .get();

  for (let i = 0; i < $butFilt.length; i++) {
    let $butFromData = document.querySelectorAll(
      `[data-filter='${$otherFilters[i]}']`
    );

    console.log($butFromData);
    if ($otherFilters[i] != filter) {
      $($butFromData[0]).removeClass("is-checked");
    } else {
      if ($($butFromData[0]).hasClass("is-checked") == true) {
        $($butFromData[0]).removeClass("is-checked");
      } else {
        $($butFromData[0]).addClass("is-checked");
        console.log($butFromData, "PASS");
      }
    }
  }

  var isChecked = $target.hasClass("is-checked");
  if (isChecked) {
    addFilter(filters, filter);
  } else {
    removeFilter(filters, filter);
    $target.blur();
  }

  //Filtering
  if (filters.length > 0) {
    $grid.isotope({ filter: filter });
  } else {
    $grid.isotope({ filter: "*" });
  }

  //After filtering rearrange, order HTML elements and recreate lightbox
  $grid.one("arrangeComplete", function () {
    sortOut();
    destroyGal($gallery, filters);
    createFiltGal($gallery, filters, filter);
  });
}

////

//Add filter
function addFilter(filters, filter) {
  if (filters.indexOf(filter) == -1) {
    filters.push(filter);
  }
}

//Remove filter
function removeFilter(filters, filter) {
  var index = filters.indexOf(filter);
  if (index != -1) {
    filters.splice(index, 1);
  }
}

//////////////////////////////////

/* if( document.readyState !== 'loading' ) {
  console.log( 'document is already ready, just execute code here' );
   setTabIndex();
} else {
  document.addEventListener('DOMContentLoaded', function () {
      console.log( 'document was not ready, place code here' );
     setTabIndex();
  });
} */

//Reattribute data-val from reorder
function dataVal(filteredItems) {
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

//////////////////////////////////

//Filtering destroy lightbox gallery
function destroyGal($gallery, filters) {
  if (filters.length > 0) {
    $gallery.data("lightGallery").destroy(true);
  }
}

//Filtering recreate lightbox gallery
function createFiltGal($gallery, filters, filter) {
  if (filters.length > 0) {
    $gallery.lightGallery({
      selector: filter,
      download: false,
      getCaptionFromTitleOrAlt: true,
      preload: 2,
      fullScreen: true,
      hideBarsDelay: 0,
      counter: false,
    });
  }
}

//Sorting destroy lightbox gallery
function destroySortGal($gallery) {
  $gallery.data("lightGallery").destroy(true);
}

//Sorting recreate lightbox gallery
function createSortGal($gallery) {
  $gallery.lightGallery({
    download: false,
    getCaptionFromTitleOrAlt: true,
    preload: 2,
    fullScreen: true,
    hideBarsDelay: 0,
    counter: false,
  });
}

//Export functions
export { sortAndFilterParam, creatBR, sortOut, dataVal, setTabIndex };
