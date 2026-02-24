console.log("hey there");

const allBtn = document.getElementById("all-btn");
const appliedBtn = document.getElementById("applied-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// console.log(allBtn, appliedBtn, interviewBtn, rejectedBtn);

const mainContainer = document.getElementById("main-section");
const cardContainer = document.getElementById("card-container");
const filteredSection = document.getElementById("filtered-sections");
const noJobsAvailable = document.querySelector(".noJobsAvailable")
// console.log(mainContainer, cardSections, filteredSection ,noJobsAvailable);

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
//

//

//

//

function tabStyle(id){
allBtn.classList.remove("bg-primary", "text-white");
appliedBtn.classList.remove("bg-primary", "text-white");
interviewBtn.classList.remove("bg-primary", "text-white");
rejectedBtn.classList.remove("bg-primary", "text-white");

const selected = document.getElementById(id);
selected.classList.add("bg-primary", "text-white")

currStatus = id;

if(id === "applied-btn"){
cardContainer.classList.add("hidden");
filteredSection.classList.remove("hidden");
renApplied();
}else if (id === "all-btn") {
cardContainer.classList.remove("hidden");
filteredSection.classList.add("hidden");
noJobsAvailable.classList.add("hidden")
}else if (id === "interview-btn"){
  cardContainer.classList.add("hidden")
  filteredSection.classList.remove("hidden")
  renInterview();
}else if(id === "rejected-btn"){
  cardContainer.classList.add("hidden");
  filteredSection.classList.remove("hidden")
  renRejected()
}
}

//

//

//

mainContainer.addEventListener("click", function (event){
  if(event.target.classList.contains("applied-btn")){
    const card = event.target.closest(".job-card");
//  q  console.log(card);
    const cardHeading = card.querySelector(".card-title").innerText;
    const designation = card.querySelector(".designation").innerText;
    const salary = card.querySelector(".salary").innerText;
    let status = card.querySelector(".status-text")
    const description = card.querySelector(".description").innerText
    // console.log(cardHeading, status, designation, salary, description);

    status.innerText = "APPLIED";

    const cardInformation = {
      cardHeading,
      designation,
      salary,
      status: "APPLIED",
      description,
    };

    // console.log(cardInformation);

    const cardExist = appliedList.find(
      (item)=>item.cardHeading === cardInformation.cardHeading);
      if(!cardExist){
        appliedList.push(cardInformation);
      };
      interviewList = interviewList.filter(
        (item)=> item.cardHeading !== cardInformation.cardHeading);

        tabStyle(currStatus);

        calculateCount();
}else if (event.target.classList.contains("interview-btn")){
  const card = event.target.closest(".job-card");

  const cardHeading = card.querySelector(".card-title").innerText;
    const designation = card.querySelector(".designation").innerText;
    const salary = card.querySelector(".salary").innerText;
    let status = card.querySelector(".status-text")
    const description = card.querySelector(".description").innerText
    // console.log(cardHeading,status, designation, salary, description);

    status.innerText = "INTERVIEW";

    const cardInformation = {
      cardHeading,
      designation,
      salary,
      status: "INTERVIEW",
      description,
};

const cardExist = interviewList.find(
  (item)=> item.cardHeading === cardInformation.cardHeading);
  if(!cardExist){
    interviewList.push(cardInformation);
  }
  appliedList = appliedList.filter(
    (item)=> item.cardHeading !== cardInformation.cardHeading
  )
  rejectedList = rejectedList.filter(
    (item)=> item.cardHeading !== cardInformation.cardHeading
  );
  tabStyle(currStatus);
  calculateCount();
}else if (event.target.classList.contains("rejected-btn")){
const card = event.target.closest(".job-card");
// console.log(card);

 const cardHeading = card.querySelector(".card-title").innerText;
    const designation = card.querySelector(".designation").innerText;
    const salary = card.querySelector(".salary").innerText;
    let status = card.querySelector(".status-text");
    const description = card.querySelector(".description").innerText;
// console.log(cardHeading, designation, salary, status, description);
    status.innerText = "REJECTED";
 const cardInformation = {
      cardHeading,
      designation,
      salary,
      status: "REJECTED",
      description,
    };
const cardExist = rejectedList.find(
  (item)=> item.cardHeading === cardInformation.cardHeading);
  if (!cardExist) {
      rejectedList.push(cardInformation);
    }
    appliedList = appliedList.filter(
      (item) => item.cardHeading !== cardInformation.cardHeading);
      interviewList = interviewList.filter(
        (item)=> item.cardHeading !== cardInformation.cardHeading);
        tabStyle(currStatus);
        calculateCount();
}
if(event.target.classList.contains("delete-btn")){
  const card = event.target.closest(".job-card");
  const cardTitle = card.querySelector(".card-title").innerText;
  card.remove();

  appliedList = appliedList.filter((item) => item.cardTitle !== cardTitle);
  interviewList = interviewList.filter((item) => item.cardTitle !== cardTitle);
  rejectedList = rejectedList.filter((item)=> item.cardTitle !== cardTitle)
}
calculateCount()

});









function renApplied() {
  filteredSection.innerHTML = "";

  if(appliedList.length === 0){
    noJobsAvailable.classList.remove("hidden");
    return;
  }else{
    noJobsAvailable.classList.add("hidden")
  }


  for (let apply of appliedList) {
    let div = document.createElement("div");
    div.className =
      "job-card card-body bg-base-100 card w-full min-h-72 shadow-sm";
    div.innerHTML = `
    <div class="flex justify-between">
              <h2 class="card-title text-[#002C5C] font-bold text-xl mb-1">
                ${apply.cardHeading}
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



function renInterview(){
filteredSection.innerHTML = "";

if(interviewList.length === 0){
noJobsAvailable.classList.remove("hidden")
return;
}else{
  noJobsAvailable.classList.add("hidden")
}

for (let apply of interviewList){
  let div = document.createElement("div");
  div.className = "job-card card-body bg-base-100 card w-full min-h-72 shadow-sm";
  div.innerHTML = `
   <div class="flex justify-between">
              <h2 class="card-title text-[#002C5C] font-bold text-xl mb-1">
                ${apply.cardHeading}
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



function renRejected(){
  filteredSection.innerHTML = "";
  if(rejectedList.length === 0){
    noJobsAvailable.classList.remove("hidden")
    return;
  }else{
    noJobsAvailable.classList.add("hidden")
  };

  for( let apply of rejectedList){
    let div = document.createElement("div")
    div.className = "job-card card-body bg-base-100 card w-full min-h-72 shadow-sm";
    div.innerHTML = `
     <div class="flex justify-between">
              <h2 class="card-title text-[#002C5C] font-bold text-xl mb-1">
                ${apply.cardHeading}
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