export default function sortAndFilterParam() {
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

  /* $gallery.on('onAferAppendSlide.lg',function(event, index, dynamicEl, nextHtml, appendSubHtmlTo, fromTouch, fromThumb){
    console.log(index, dynamicEl, nextHtml, appendSubHtmlTo, fromTouch, fromThumb);
}); */
  //Isotope Sorting & Filtering for desktop view
  if (window.innerWidth > 800) {
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

    // bind sorter on select change
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
      var $target = $(event.currentTarget);
      $target.toggleClass("is-checked");
      var isChecked = $target.hasClass("is-checked");
      var filter = $target.attr("data-filter");
      if (isChecked) {
        addFilter(filter);
        //tabFilter();
      } else {
        removeFilter(filter);
        //tabFilter();
      }
      /* function tabFilter() {
        let $cont = $('.photoAHREF');

        $cont.each(function () {
          if ($cont.css('display') == 'none') {
            $cont.attr("tabindex", "-1");
          } else if ($cont.css('display') == 'block') {
            $cont.attr("tabindex", "0");
          }
        }
        );
      } */

      // filter isotope
      // group filters together, inclusive
      let filterTags = filters.join(",");
      /*if (filters.length > 0) {
        filterTags = filters.join(",");
      } */
      $grid.isotope({ filter: filterTags });

      //let filterClass = filter.replace(".", "");
      //rearrange after filtering
      //if (filters.length > 0) {
      $grid.on("arrangeComplete", function () {
        sortOut();
        $gallery.data("lightGallery").destroy(true);
        $gallery.lightGallery({
          selector: filters[0].replace("*", ""),
          download: false,
          getCaptionFromTitleOrAlt: true,
          preload: 2,
          fullScreen: true,
          hideBarsDelay: 0,
          counter: false,
        });
      });
      //};
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

    //Test tags focus keyboard...
    $grid
      .on("arrangeComplete", function (e, filteredItems) {
        console.log("arrangeComplete");

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

        //sortOut();
        /* $gallery.data("lightGallery").destroy(true);
        $gallery.lightGallery({
          download: false,
          getCaptionFromTitleOrAlt: true,
          preload: 2,
          fullScreen: true,
          hideBarsDelay: 0,
          counter: false,
        }); */
        console.log("1");
        //tabFilter();
      })
      .isotope();

    $grid
      .on("arrangeComplete", function () {
        let $cont = $('a[style*="block"]');
        let $cont2 = $('a[style*="display: none"]');
        console.log($cont2)
        let $contAll = $(".photoAHREF");
        $contAll.each(function () {
          $contAll.attr("tabindex", "0");

        });

        $contAll.each(function () {
          $cont2.attr("tabindex", "-1");

        });
        $contAll.each(function () {
          console.log($cont)
          $cont.attr("tabindex", "0");
        });

      })
      .isotope();
  }
}

function sortOut() {
  var classname = document.getElementsByClassName("photoAHREF");
  var divs = [];
  for (var i = 0; i < classname.length; ++i) {
    divs.push(classname[i]);
  }
  //let ts = tabIndex.toString();
  divs.sort(function (a, b) {
    return a.dataset.val.localeCompare(b.dataset.val);
  });

  var br = document.getElementsByTagName("br")[0];
  let parent = document.getElementById("photoGallery");

  divs.forEach(function (el) {
    parent.insertBefore(el, br);
  });
}
////////////////
