console.log("hey there");

const allBtn = document.getElementById("all-btn");
const appliedBtn = document.getElementById("applied-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// console.log(allBtn, appliedBtn, interviewBtn, rejectedBtn);

const mainContainer = document.getElementById("main-section");
const cardContainer = document.getElementById("card-container");
const filteredSection = document.getElementById("filtered-sections");
// console.log(mainContainer, cardSections, filteredSection);

//
let total = document.getElementById("total-count");
let appliedCount = document.getElementById("applied-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

// console.log(total, appliedCount, interviewCount, rejectedCount);

let currStatus = "all";
let appliedList = [];
let interviewList = [];
let rejectedList = [];

function calculateCount() {
  total.innerText = cardContainer.children.length;
  appliedCount.innerText = appliedList.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  document.getElementById("job-count").innerText =
    cardContainer.children.length;
}
calculateCount();

function renApplied() {
  filteredSection.innerHTML = "";
  for (let applied of appliedList) {
    let div = document.createElement("div");
    div.className =
      "job-card card-body bg-base-100 card w-full min-h-72 shadow-sm";
    div.innerHTML = `
    <div class="flex justify-between">
              <h2 class="card-title text-[#002C5C] font-bold text-xl mb-1">
                ${apply.cardTitle}
              </h2>
              <button class="btn btn-circle delete-btn delete-btn">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <p class="text-[#64748B] designation text-xl mb-5">
    ${apply.designation}
  </p>
  <p class="text-[#64748B] mb-5 salary">
    ${apply.salary}
  </p>
  <p
    class="text-[#002C5C] status-text font-medium px-3 py-3 bg-[#EEF4FF] rounded max-w-max mb-2"
  >
    ${apply.status}
  </p>
  <p class="mb-5 text-[#323B49] description">
    ${apply.description}
  </p>
  <!-- ActionButton -->
  <div class="card-actions">
    <button class="btn applied-btn btn-outline btn-primary">
      APPLIED
    </button>
    <button class="btn interview-btn btn-outline btn-success">
      INTERVIEW
    </button>
    <button class="btn rejected-btn btn-outline btn-error">
      REJECTED
    </button>
  </div>
    `;
    filteredSection.appendChild(div);
  }
}



