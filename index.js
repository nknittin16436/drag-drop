console.log("hi");

const imgBox = document.getElementById("imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("Drag start triggerd");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className += " hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("Drag end triggerd");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    console.log("DragOver triggerd");
    e.preventDefault();
  });

  whiteBox.addEventListener("dragenter", (e) => {
    console.log("DragEnter triggerd");
    e.target.className+=' dashed';
});

whiteBox.addEventListener("dragleave", (e) => {
    console.log("DragLeave triggerd");
    e.target.className='whiteBox';

  });

  whiteBox.addEventListener("drop", (e) => {
    console.log("Drop  triggerd");
    e.target.append(imgBox);
  });
}
