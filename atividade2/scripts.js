  document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('select');
    
    dropdown.addEventListener('change', function() {
      const selectedOption = this.value;
      let targetSectionId = '';
      
      if (selectedOption === '1') {
        targetSectionId = 'main-content1';
      } else if (selectedOption === '2') {
        targetSectionId = 'main-content2';
      }
      else if (selectedOption === '3') {
        targetSectionId = 'code-examples';
      }
      
      if (targetSectionId) {
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth' // Rolagem suave
          });
        }
      }
    });
  });
