// share buttons

const share_twitter = document.querySelector(".share-twitter");
const share_facebook = document.querySelector(".share-facebook");
const share_linkedIn = document.querySelector(".share-linkedIn");
const share_reddit = document.querySelector(".share-reddit");

const pageUrl = "https://sola0404.github.io/6780_Ass/";
const message = "Let's meet Bunny Kingdom together!";

const twitterAPI = `https://twitter.com/intent/tweet?text=${pageUrl}. ${message}`;
share_twitter.addEventListener("click", () => {
  console.log("clickwed");
  window.open((url = twitterAPI), (target = "blank"));
});

const facebookAPI = `https://www.facebook.com/share.php?u=${pageUrl}`;
share_facebook.addEventListener("click", () => {
  window.open((url = facebookAPI), (target = "blank"));
});

const linkedInAPI = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
share_linkedIn.addEventListener("click", () => {
  window.open((url = linkedInAPI), (target = "blank"));
});

const redditAPI = `https://www.reddit.com/submit?url=${pageUrl}&title=bunnykingdom`;
share_reddit.addEventListener("click", () => {
  window.open((url = redditAPI), (target = "blank"));
});



// get behavior tag element
const tag = document.getElementById("behavior-tag");
const teemo = document.getElementById("teemo");

// set mouse over event to every behavior part
document.getElementById("binky").addEventListener("mouseover", () => {
  tag.innerText = "Binky";
});

document.getElementById("ear-shaking").addEventListener("mouseover", () => {
  tag.innerHTML = "<h2>Ear<br>Shaking</h2>";
});

document.getElementById("zooming").addEventListener("mouseover", () => {
  tag.innerText = "Zooming";
});

document.getElementById("purring").addEventListener("mouseover", () => {
  tag.innerText = "Purring";
  teemo.setAttribute("src", "Images/Teemo-behaviors/purring.jpg");
});

document.getElementById("grooming").addEventListener("mouseover", () => {
  tag.innerText = "Grooming";
  teemo.setAttribute("src", "Images/Teemo-behaviors/grooming.jpg");
});

document.getElementById("sprawling").addEventListener("mouseover", () => {
  tag.innerText = "Sprawling";
  teemo.setAttribute("src", "Images/Teemo-behaviors/sprawling.jpg");
});

document.getElementById("flopping").addEventListener("mouseover", () => {
  tag.innerText = "Flopping";
  teemo.setAttribute("src", "Images/Teemo-behaviors/flopping.jpg");
});

document.getElementById("loafing").addEventListener("mouseover", () => {
  tag.innerText = "Loafing";
  teemo.setAttribute("src", "Images/Teemo-behaviors/loafing.jpg");
});

// top button
const topButton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// accordion
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", () => {
    // only allow one item be shown at one time
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// // social  buttons
const twitter = document.querySelector(".twitter");
const github = document.querySelector(".github");
const facebook = document.querySelector(".facebook");
const linkedin = document.querySelector(".linkedin");

const twitterUrl = `https://twitter.com/0404Yujia`;
twitter.addEventListener("click", () => {
  window.open((url = twitterUrl), (target = "blank"));
});

const githubUrl = `https://github.com/Sola0404`;
github.addEventListener("click", () => {
  window.open((url = githubUrl), (target = "blank"));
});

const facebookUrl = `https://www.facebook.com/profile.php?id=100077606209747`;
facebook.addEventListener("click", () => {
  window.open((url = facebookUrl), (target = "blank"));
});

const linkedinUrl = `https://www.linkedin.com/in/yujia-chen-886920253/`;
linkedin.addEventListener("click", () => {
  window.open((url = linkedinUrl), (target = "blank"));
});
