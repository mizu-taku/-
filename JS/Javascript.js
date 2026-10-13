document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('diary-form');
    const diaryList = document.getElementById('diary-List');
    diaryList.innerHTML = '';

    form. addEventListener('submit' , (e) => {
        e.preventDefault();
    
    const date = document.getElementById('date').value;
    const childName = document.getElementById('cheild-name').value;
    const height = document.getElementById('heigth').value;
    const weight = document.getElementById('weight').value;
    const memo = document.getElementById('memo').value;

    const heightText = height ? '${height}cm' : '-';
    const weightText = weight ? `${weight}kg` : '-';
    })
})