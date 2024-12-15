const featuresText = document.getElementById('features-text');
const featuresDropdown = document.getElementById('feature-dropdown');
const companyText = document.getElementById('company-text');
const companyDropdown = document.getElementById('company-dropdown');
const hamMenu = document.getElementById('ham-menu');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modalContent');
const closeBtn = document.getElementById('close-btn');
const modalFDTxt = document.getElementById('modal-FD-text');
const modalFeaturesDropdown = document.getElementById('modal-features-dropdown');
const modalCompanyText = document.getElementById('modal-company-text');
const modalCompanyDropdown = document.getElementById('modal-company-dropdown');
const arrowUpFD = document.getElementById('arrow-up-FD');
const arrowUpCT = document.getElementById('arrow-up-CT');




featuresText.addEventListener('click', () => {
  featuresDropdown.style.display = featuresDropdown.style.display === 'block' ? 'none' : 'block';
});

companyText.addEventListener('click', () => {
  companyDropdown.style.display = companyDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!featuresDropdown.contains(e.target) && !featuresText.contains(e.target)) {
    featuresDropdown.style.display = 'none';
  }
  if (!companyDropdown.contains(e.target) && !companyText.contains(e.target)) {
    companyDropdown.style.display = 'none';
  }
});

hamMenu.addEventListener('click', () => {
    modal.style.visibility = 'visible';
    modalContent.style.transform = 'translateX(0)';
  });
  
  closeBtn.addEventListener('click', () => {
    modalContent.style.transform = 'translateX(100%)';
    modalContent.style.transform = 'translateX(100%)';
    setTimeout(() => {
        modal.style.visibility = 'hidden';
    }, 500);
  });

// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     modal.style.display = 'none';
//     modalContent.style.transform = 'translateX(100%)';
//   }
// });

let isDropdownOpenFD = false;
let isDropdownOpenCompany = false;

modalFDTxt.addEventListener('click', () => {
  if (!isDropdownOpenFD) {
    modalFeaturesDropdown.style.maxHeight = '200px'; 
    arrowUpFD.style.transform = 'rotate(180deg)';
  } else {
    modalFeaturesDropdown.style.maxHeight = '0';
    arrowUpFD.style.transform = 'rotate(0deg)';
  }
  isDropdownOpenFD = !isDropdownOpenFD;
});

modalCompanyText.addEventListener('click', () => {
  if (!isDropdownOpenCompany) {
    modalCompanyDropdown.style.maxHeight = '200px'; 
    arrowUpCT.style.transform = 'rotate(180deg)';
  } else {
    modalCompanyDropdown.style.maxHeight = '0';
    arrowUpCT.style.transform = 'rotate(0deg)';
  }
  isDropdownOpenCompany = !isDropdownOpenCompany;
});