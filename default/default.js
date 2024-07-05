// JavaScript 파일

// 드롭다운 메뉴 토글 함수
function toggleDropdownMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// 스크롤 이동 함수
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// 목차 업데이트 함수
function updateToc() {
    const sections = document.querySelectorAll('section');
    const tocItems = document.querySelectorAll('.toc-item');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            tocItems[index].classList.add('active');
        } else {
            tocItems[index].classList.remove('active');
        }
    });
}

// 스크롤 이벤트 리스너
window.addEventListener('scroll', updateToc);

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    updateToc();
    
    const tocItems = document.querySelectorAll('.toc-item');
    tocItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });
});
