function sortAndFilterParam() {
  ////Lightbox init & parameters
  //Isotope Filtering for mobile view
  mobileFilter();
  //Isotope Sorting & Filtering for desktop view
  desktopFilter();
}

//Isotope Filtering for mobile view//
function mobileFilter() {
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
      setButtonFilter(e, $grid);
    });

    creatBR();
  }
}
////////////////////////////////////////////////

//Isotope Sorting & Filtering for desktop view//
function desktopFilter() {
  console.log('-----desktopFilter-----');
  if (window.innerWidth >= 800) {
    // Init isotope / create grid
    var $grid = $(".photoGall").isotope({
      itemSelector: ".photoAHREF",
      layoutMode: "fitRows",
      sortBy: "Titre",
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
    });

    // bind filter on tags button change
    // change is-checked class on buttons
    $(".profileTags").on("click", "button", function (e) {
      setButtonFilter(e, $grid);
    });

    //Reattribute data-val from reorder
    $grid
      .on("arrangeComplete", function (e, filteredItems) {
        //dataVal(filteredItems)
          console.log('--------arrangeComplete-----', $(filteredItems));
          var dataVal = 1;

          $(filteredItems).each(function (index, item) {
            console.log(index, item);
            $(item.element).find("a.title").attr("data-val", dataVal);
            let t = dataVal++;
            index = t.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            });
            item.element.setAttribute("data-val", index);
          });

          sortOut();


          destroyGalery();
          createGalery();

          setTabIndex();
      })

    creatBR();

    setTimeout(() => {
        $(".filters-select").trigger('change');
    }, 0);
  }
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

////

//Add filter
function addFilter($target) {
  var filter = $target.attr("data-filter")

  $target.addClass('is-checked')

  if (filters.indexOf(filter) == -1) {
    filters.push(filter);
  }
}

//Remove filter
function removeFilter($target) {
  var filter = $target.attr("data-filter")

  $target.removeClass('is-checked')
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

function destroyGalery() {
  $gallery.data("lightGallery").destroy(true);
}

//Filtering recreate lightbox gallery
function createGalery() {
  const filters = $('.filtButtonPP.is-checked')

  let data = {
      download: false,
      getCaptionFromTitleOrAlt: true,
      preload: 2,
      fullScreen: true,
      hideBarsDelay: 0,
      counter: false,
  }

  if (filters.length > 0) {
      let filter = ""
      $.each(filters, (index, elt) => {
          if (filter !== '') {
              filter = filter + ','
          }

          filter = filter + $(elt).data('filter')
      })

      data.selector = filter
  }

  $gallery.lightGallery(data);
}

//Sorting destroy lightbox gallery
function destroySortGal() {
  $gallery.data("lightGallery").destroy(true);
}

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