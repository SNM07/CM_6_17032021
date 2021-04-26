export default function sortAndFilterParam() {
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
        $grid.on("arrangeComplete", function (e, filteredItems) {
          console.log('arrangeComplete')
          
          var tabIndex = 1;
          var tabIndex2 = 1;
          var tabIndex3 = 1;
  
          $(filteredItems).each(function (index, item) {
            $(item.element).find("a.title").attr("tabindex", tabIndex);
            let t = tabIndex++;
            index = (t * 10);
            item.element.setAttribute("tabindex", index);
            
            $(item.element).find(".like").attr("tabindex", tabIndex2);
            tabIndex2 = index + 12;
  
            $(item.element).find(".checkHeart").attr("tabindex", tabIndex3);
            tabIndex3 = index + 12;
            
          })
          
        }).isotope();;
      }
}