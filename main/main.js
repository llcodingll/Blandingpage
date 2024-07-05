// 동그라미 목차 아이템들
const tocItems = document.querySelectorAll('.toc-item');

// 각 섹션의 위치를 저장할 배열
const sectionPositions = [];

// 각 섹션의 위치를 계산하여 배열에 저장하는 함수
function calculateSectionPositions() {
    tocItems.forEach((item, index) => {
        const sectionId = item.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        const sectionTop = section.offsetTop;
        sectionPositions[index] = sectionTop;
    });
}

// 활성화된 섹션을 식별하고 동그라미 색상을 변경하는 함수
function setActiveSection() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < sectionPositions.length; i++) {
        if (scrollPosition >= sectionPositions[i] - (windowHeight / 2)) {
            tocItems.forEach(item => item.classList.remove('active'));
            tocItems[i].classList.add('active');
        }
    }
}

// 스크롤 이벤트 리스너에 setActiveSection 함수를 등록
window.addEventListener('scroll', setActiveSection);

// 페이지 로드 시 초기화 함수 실행
document.addEventListener('DOMContentLoaded', () => {
    calculateSectionPositions();
    setActiveSection();
});
