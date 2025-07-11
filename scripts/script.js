// Doc ready
document.addEventListener('DOMContentLoaded', () => {
  console.log("🛠️ Dev Profile Page Loaded!");

  // Load or set cookie
  const visitorName = getCookie("visitorName");
  if (visitorName) {
    console.log(`👋 Welcome back, ${visitorName}!`);
  } else {
    setCookie("visitorName", "Logan", 7);
    console.log("✅ Cookie set for first-time visitor.");
  }

  // Add blog post on load
  addBlogEntry("JS Entry: This post was added by JavaScript.");

  // Button event to change background to random color
  const magicBtn = document.getElementById('magicBtn');
  magicBtn.addEventListener('click', () => {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    document.body.style.backgroundColor = randomColor;
    console.log(`🎨 Background changed to ${randomColor}`);
  });
});

// Add a blog entry
function addBlogEntry(text) {
  const blogContainer = document.getElementById('blog-entries');
  const newEntry = document.createElement('article');
  newEntry.textContent = text;
  blogContainer.appendChild(newEntry);
  console.log("✏️ Blog entry added.");
}

// Set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Get a cookie
function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let c of cookies) {
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}
