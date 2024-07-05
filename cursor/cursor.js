document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.cursor');
    const container = document.querySelector('body');

    container.addEventListener('mousemove', function (e) {
        const { clientX, clientY } = e;

        // 마우스 커서 위치 설정
        cursor.style.left = clientX + 'px';
        cursor.style.top = clientY + 'px';

        // 활성화 클래스 추가
        cursor.classList.add('active');

        // 가루 효과 요소 생성
        const burst = document.createElement('div');
        burst.className = 'burst';
        container.appendChild(burst);

        // 가루 효과 요소 위치 설정
        burst.style.left = clientX + 'px';
        burst.style.top = clientY + 'px';

        // 가루 효과 요소 애니메이션
        setTimeout(() => {
            burst.remove();
        }, 1000); // 1초 후 요소 제거
    });

    // 커서 효과 보이기/감추기
    container.addEventListener('mouseenter', function () {
        cursor.style.display = 'block';
    });
    container.addEventListener('mouseleave', function () {
        cursor.style.display = 'none';
        cursor.classList.remove('active');
    });

    // 메뉴 아이템에 호버 시 커서 스타일 변경
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            cursor.style.display = 'block';
            cursor.classList.add('active');
        });
        item.addEventListener('mouseleave', function () {
            cursor.classList.remove('active');
        });
    });
});