// TODO 1: id가 'target-box'인 요소를 선택하여 변수에 저장하세요.
const targetBox = document.getElementById("target-box");

// TODO 2: IntersectionObserver 인스턴스를 생성하고, 콜백 함수를 작성하세요.
const observer = new IntersectionObserver(
    (entries) => {
        const entry = entries[0];

        // TODO 3: entry.isIntersecting 속성을 확인하여 클래스를 추가/제거합니다.
        if (entry.isIntersecting) {
            // 화면에 보일 때
            targetBox.classList.add("active");
        } else {
            // 화면에서 사라질 때
            targetBox.classList.remove("active");
        }
    },
    {
        threshold: 0.5,
    }
);

// TODO 4: 위에서 생성한 observer가 targetBox를 감시하도록 시작하세요.
observer.observe(targetBox);
