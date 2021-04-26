export default function changePageTitle() {
    let photographerNameTitle = document.getElementsByClassName(
      "profileName"
    )[0].innerHTML;
    let newPageTitle =
      "FishEye - " + photographerNameTitle + ", Photographer Page";
    document.title = newPageTitle;
  }
