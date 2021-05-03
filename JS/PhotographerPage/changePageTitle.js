//Change page title
function changePageTitle() {
  let photographerNameTitle = document.getElementsByClassName("profileName")[0]
    .innerHTML;
  let newPageTitle =
    "FishEye - " + photographerNameTitle + ", Photographer Page";
  document.title = newPageTitle;
}

//Export function
export { changePageTitle as default };
