var Presentaion = SlidesApp.getActivePresentation();
let UI;

function OnOpen() {
  UI = SlidesApp.getUi();
  CreateLayerMenu();
}

function CreateLayerMenu()
{
  UI.createMenu("SAControls")
    .addItem("Show Layers", "ShowLayersSideBar")
  .addToUi();
}

function ShowLayersSideBar()
{
  var html = HtmlService.createHtmlOutputFromFile("HTML/LayersWindowMockup")
              .setTitle("Layers");
  SlidesApp.getUi().showSidebar(html);
}
