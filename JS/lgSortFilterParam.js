export function sortAndFilterParam() {
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
  ///////////////////
  //Isotope Filtering for mobile view
  if (window.innerWidth < 800) {
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

    $(".profileTags").on("click", "button", function (event) {
      var $target = $(event.currentTarget);
      $target.toggleClass("is-checked");
      var isChecked = $target.hasClass("is-checked");
      var filter = $target.attr("data-filter");
      if (isChecked) {
        addFilter(filters, filter);
      } else {
        removeFilter(filters, filter);
      }

      let filterTags = filters.join(",");

      $grid.isotope({ filter: filterTags });
    });
  }
  //////////////////////

  //Isotope Sorting & Filtering for desktop view
  if (window.innerWidth >= 800) {
    // init Isotope
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
      $grid.on("arrangeComplete", function () {
        sortOut();
        $gallery.data("lightGallery").destroy(true);
        $gallery.lightGallery({
          download: false,
          getCaptionFromTitleOrAlt: true,
          preload: 2,
          fullScreen: true,
          hideBarsDelay: 0,
          counter: false,
        });
      });
    });

    // bind filter on tags button change
    var filters = [];
    // change is-checked class on buttons
    $(".profileTags").on("click", "button", function (event) {
      //$(".filtButtonPP").removeClass("is-checked");
      var $target = $(event.currentTarget);
      var filter = $target.attr("data-filter");

      let $butFilt = $(".filtButtonPP");
      let $otherFilters = $butFilt.map(function() {
        return $(this).data('filter');
      }).get();
      //let $butFromData = $butFilt.find("[data-filter='" + $otherFilters[i] + "']");

      //$otherFilters.forEach(function ($otherFilters) {
      for (let i = 0; i < $butFilt.length; i++) {
        let $butFromData = document.querySelectorAll(`[data-filter='${$otherFilters[i]}']`);

        console.log($butFromData)
        if ($otherFilters[i] != filter) {
          console.log($otherFilters[i], "DIF")
          //let $butFromDataBlock = $butFilt.find("[data-filter='" + $otherFilters + "']");
          $($butFromData[0]).removeClass("is-checked");
          console.log($butFromData, "BLOCK")
        } else {
         // let $butFromDataPass = $butFilt.find("[data-filter='" + $otherFilters + "']");
          $($butFromData[0]).addClass("is-checked");
          console.log($butFromData, "PASS")
        }
      }
      //});

      //$butFilt.not(["data-filter" == filter]).removeClass("is-checked");

      //c = a.substring(b.length)


      /* var isAlreadyChecked = $target.hasClass("is-checked");
      if (isAlreadyChecked == true) {
        $target.removeClass("is-checked");
      } else {
        $target.addClass("is-checked");
      } */

      var isChecked = $target.hasClass("is-checked");
      if (isChecked) {
        addFilter(filters, filter);
      } else {
        removeFilter(filters, filter);
        $target.blur();
      }

      // group filters together, inclusive
      let filterTags = filters.join(",");

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
    });
    
    
    //Reattribute data-val from reorder
    $grid
    .on("arrangeComplete", function (e, filteredItems) {
      
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
    $grid
      .on("arrangeComplete", function () {
        
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
    })
    .isotope();
  }
}

//Add/remove filter
function addFilter(filters, filter) {
  if (filters.indexOf(filter) == -1) {
    filters.push(filter);
  }
}

function removeFilter(filters, filter) {
  var index = filters.indexOf(filter);
  if (index != -1) {
    filters.splice(index, 1);
  }
}

//create br
export function creatBR() {
  const br = document.createElement("br");
  let sec = document.getElementById('photoGallery');
  sec.appendChild(br);
}

//Reorder HTML elements
export function sortOut() {
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