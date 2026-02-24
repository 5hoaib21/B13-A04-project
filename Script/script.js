console.log("hey there");



const allBtn = document.getElementById("all-btn")
const appliedBtn = document.getElementById("applied-btn")
const interviewBtn = document.getElementById("interview-btn")
const rejectedBtn = document.getElementById("rejected-btn")

// console.log(allBtn, appliedBtn, interviewBtn, rejectedBtn);

const mainContainer = document.getElementById("main-section");
const cardContainer = document.getElementById("card-container");
const filteredSection = document.getElementById("filtered-sections")
// console.log(mainContainer, cardSections, filteredSection);

//
let total = document.getElementById("total-count")
let appliedCount = document.getElementById("applied-count")
let interviewCount = document.getElementById("interview-count")
let rejectedCount = document.getElementById("rejected-count")

// console.log(total, appliedCount, interviewCount, rejectedCount);


let currStatus = 'all';
let appliedList = [];
let interviewList = [];
let rejectedList = [];

function calculateCount(){
total.innerText = cardContainer.children.length;
appliedCount.innerText = appliedList.length;
interviewCount.innerText = interviewList.length;
rejectedCount.innerText = rejectedList.length;
document.getElementById("job-count").innerText = cardContainer.children.length;
}
