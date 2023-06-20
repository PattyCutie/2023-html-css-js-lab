//Drop arrow //
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

//Arrow up/down
// Version 1 with out closing dropmenu when close sidebar
// function handleDropdowns() {
//   const dropBtns = document.querySelectorAll('.coldsc__dropbtn');

//   dropBtns.forEach((dropBtn) => {
//     const bottom = dropBtn.closest('.link__row').querySelector('.coldsc__bottom');
//     const arrowIcon = dropBtn.querySelector('i');

//     dropBtn.addEventListener('click', () => {
//       bottom.classList.toggle('showdroplist');
//       setTimeout(() => {
//         arrowIcon.classList.toggle('bxs-down-arrow');
//         arrowIcon.classList.toggle('bxs-up-arrow');
//       }, 100);    
//     });
//   });
// }
// // Call the function to activate the event listeners
// handleDropdowns();
///////////////////////////////////////////////////////
///
function handleDropdowns() {
  const dropBtns = document.querySelectorAll('.coldsc__dropbtn');

  dropBtns.forEach((dropBtn) => {
    const linkRow = dropBtn.closest('.link__row');
    const bottom = linkRow.querySelector('.coldsc__bottom');
    const arrowIcon = dropBtn.querySelector('i');

    dropBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Stop event bubbling to the document

      // Close other open dropdowns
      dropBtns.forEach((otherBtn) => {
        const otherLinkRow = otherBtn.closest('.link__row');
        if (otherLinkRow !== linkRow && otherLinkRow.classList.contains('open')) {
          otherLinkRow.classList.remove('open');
          const otherBottom = otherLinkRow.querySelector('.coldsc__bottom');
          const otherArrowIcon = otherBtn.querySelector('i');
          otherBottom.classList.remove('showdroplist');
          otherArrowIcon.classList.remove('bxs-up-arrow');
          otherArrowIcon.classList.add('bxs-down-arrow');
        }
      });

      linkRow.classList.toggle('open');
      bottom.classList.toggle('showdroplist');
      setTimeout(() => {
        arrowIcon.classList.toggle('bxs-down-arrow');
        arrowIcon.classList.toggle('bxs-up-arrow');
      }, 100);
    });
  });

  document.addEventListener('click', (event) => {
    const linkRows = document.querySelectorAll('.link__row');

    linkRows.forEach((linkRow) => {
      if (!linkRow.contains(event.target)) {
        linkRow.classList.remove('open');
        const bottom = linkRow.querySelector('.coldsc__bottom');
        const arrowIcon = linkRow.querySelector('.coldsc__dropbtn i');
        bottom.classList.remove('showdroplist');
        arrowIcon.classList.remove('bxs-up-arrow');
        arrowIcon.classList.add('bxs-down-arrow');
      }
    });
  });
}

// Call the function to activate the event listeners
handleDropdowns();



///////////////////////////////////////////////////////
// Toggle button //
function changeIcon(toggle) {
  let toggleicon = toggle.querySelector("i");
  toggleicon.classList.toggle("bx-menu");
  toggleicon.classList.toggle("bx-left-arrow-circle");
}

let sidebar = document.querySelector(".wrapper__menusidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

/////////////////////////////////////////////////////////
