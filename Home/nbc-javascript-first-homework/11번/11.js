function a() {
    const time = new Date().getHours();

if(time< 10){
    console.log("good morning");
} else if(10 <=time && time <=18) {
    console.log("good afternoon");
} else {
    // if,else if문 시전시 이제 마지막 else는 사실상 남은 것만 처리하면 되기에 딱히 조건을 걸 필요가 없다.
    console.log("good evening");
}};
a(); // 함수(function)으로 정의를 하는게 위의 물건이라면, 일단 호출을 해야하기에 a()를 넣어야한다.
