const myFullName = "Mohammed al fahad";
const myStudentNumber="1243998";

const result =`${myFullName} - ${myStudentNumber}`;
console.log(result);

const primaryHeadingContent=document.querySelector("h1");

primaryHeadingContent.innerHTML="Mohammed al fahad - 1243998";

primaryHeadingContent.classList.add("primaryHeading")