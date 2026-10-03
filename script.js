// Get all needed DOM Elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greeting = document.getElementById("greeting");
const progressBar = document.getElementById("progressBar");
const progressPercentage = document.getElementById("progressPercentage");
const attendeeCount = document.getElementById("attendeeCount");

// Track Attendance
let count = 0;
const maxCount = 50;

// Handle Form Submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get Form Values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;


  console.log(name, team, teamName);

  // Count Increment
  count++
  attendeeCount.textContent = count;
  console.log("Total check-ins: ", count);

  // Update progress bar
  const progress = Math.min(count / maxCount, 1);
  const percentage = Math.round(progress * 100);
  const hue = 207 - progress * 87;
  const lightness = 39 + progress * 11;
  progressBar.style.width = `${percentage}%`;
  progressBar.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
  progressPercentage.textContent = `${percentage}%`;
  console.log(`Progress: ${percentage}%`);

  //Update Team Counter
  const teamCounter = document.getElementById(team);
  teamCounter.textContent = Number(teamCounter.textContent) + 1;

  //Show Welcome Message
  greeting.textContent = `Welcome, ${name} from ${teamName}!`;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  form.reset();
});