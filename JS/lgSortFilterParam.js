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
      //test rearrange after sorting
      //$gallery.data("lightGallery").destroy(true);
      $gallery.lightGallery({
        download: false,
        getCaptionFromTitleOrAlt: true,
        preload: 2,
        fullScreen: true,
        hideBarsDelay: 0,
        counter: false,
      }); 
      //var slideID = $(this).attr('tabindex');
      //$gallery.data('lightGallery').slide(slideID);
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
      } else {
        removeFilter(filter);
      }
      // filter isotope
      // group filters together, inclusive
      $grid.isotope({ filter: filters.join(",") });

      //rearrange after filtering
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

        var tabIndex = 1;
        var tabIndex2 = 1;
        var tabIndex3 = 1;

        var dataVal = 1;

        $(filteredItems).each(function (index, item) {
          $(item.element).find("a.title").attr("data-val", dataVal);
          let t = dataVal++;
          index = t.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
          item.element.setAttribute("data-val", index);
        });

        /* $(filteredItems).each(function (index, item) {
          $(item.element).find("a.title").attr("tabindex", tabIndex);
          let t = tabIndex++;
          index = t * 10;
          item.element.setAttribute("tabindex", index);
          $(item.element).find(".like").attr("tabindex", tabIndex2);
          tabIndex2 = index + 12;
          $(item.element).find(".checkHeart").attr("tabindex", tabIndex3);
          tabIndex3 = index + 12;
        });
        let $itemFocus = $(document).find("a.title").attr("tabindex", "10");
        $itemFocus.focus(); */
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
      })
      .isotope();
  }
}

function sortOut() {
  var classname = document.getElementsByClassName('photoAHREF');
  var divs = [];
  for (var i = 0; i < classname.length; ++i) {
      divs.push(classname[i]);
  }
  //let ts = tabIndex.toString();
  divs.sort(function(a, b) {
      return a.dataset.val.localeCompare(b.dataset.val);
  });
  
  var br = document.getElementsByTagName("br")[0];
  let parent = document.getElementById("photoGallery");

  divs.forEach(function (el) {
      parent.insertBefore(el, br);
  });

}
////////////////