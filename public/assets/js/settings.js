

// Check if there is a saved tab data in localStorage
var tab = localStorage.getItem("tab");

if (tab) {
  // If there is saved data, try to parse it
  try {
    var tabData = JSON.parse(tab);
  } catch {
    // If there is an error in parsing, create an empty object
    var tabData = {};
  }
} else {
  // If there is no saved data, create an empty object
  var tabData = {};
}

// Set the title and icon fields to the values saved in tabData, if they exist
if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

// Default tab settings
var settingsDefaultTab = {
  title: "Settings | Tether's",
  icon: "./images/logo.png",
};

// Function to set the document title
function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  // Update the saved tab data with the new title
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (title) {
    // If there is a new title, update tabData
    tabData.title = title;
  } else {
    // If the title is empty, delete the title field from tabData
    delete tabData.title;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}

// Function to set the favicon
function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  // Update the saved tab data with the new icon
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (icon) {
    // If there is a new icon, update tabData
    tabData.icon = icon;
  } else {
    // If the icon is empty, delete the icon field from tabData
    delete tabData.icon;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setCloak() { // applies only to premade cloaks
  var cloak = document.getElementById("premadecloaks").value; // cloak seems kind of weird when you spell it out
  switch (cloak) {
    case "search": // Google Search
      setTitle("Google Search");
      setFavicon("./images/cloaks/Google Search1.ico");
      location.reload();
      break;
    case "drive": // Google Drive
      setTitle("Google Drive");
      setFavicon("./images/cloaks/Google Drive1.ico");
      location.reload();
      break;
    case "youtube": // YouTube 
      setTitle("YouTube");
      setFavicon("./images/cloaks/YouTube1.ico");
      location.reload();
      break;  
    case "gmail": // Gmail
      setTitle("Gmail");
      setFavicon("./images/cloaks/Gmail1.ico");
      location.reload();
      break;
    case "calendar": // Google Calendar
      setTitle("Google Calendar");
      setFavicon("./images/cloaks/Calendar1.ico");
      location.reload();
      break;
    case "meets": // Google Meet
      setTitle("Google Meet");
      setFavicon("./images/cloaks/Meet1.ico");
      location.reload();
      break;
    case "classroom": // Google Classroom
      setTitle("Google Classroom");
      setFavicon("./images/cloaks/Classroom1.png");
      location.reload();
      break;
    case "canvas": // Canvas 
      setTitle("Canvas");
      setFavicon("./images/cloaks/Canvas1.ico");
      location.reload();
      break;
    case "zoom": // Zoom
      setTitle("Zoom");
      setFavicon("./images/cloaks/Zoom1.ico");
      location.reload();
      break;
    case "khan": // Khan Academy
      setTitle("Khan Academy"); 
      setFavicon("./images/cloaks/Khan Academy1.ico");
      location.reload();
      break;
  }
}

// Function to reset the tab settings to default
function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}

