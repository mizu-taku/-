document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('diary-form');
    const diaryList = document.getElementById('diary-List');
    // ==========================================
    // 1. LocalStorageからのデータ読み込みと初期表示
    // ==========================================
    
    // LocalStorageから 'growth_diaries' という名前のデータを取得する
    // データがない場合（初回アクセス時）は、空の配列 [] をセットする
    let diaries = JSON.parse(localStorage.fetItem('growth_diaries')) || [];
    // 配列のデータをもとに、画面にすべての記録を描画する関数
    const renderDiaries = () => {
        diaryList.innerHTML = ''; //画面のリストを空にする
    }

    form. addEventListener('submit' , (e) => {
        e.preventDefault();
    
    const date = document.getElementById('date').value;
    const childName = document.getElementById('cheild-name').value;
    const height = document.getElementById('heigth').value;
    const weight = document.getElementById('weight').value;
    const memo = document.getElementById('memo').value;

    const heightText = height ? '${height}cm' : '-';
    const weightText = weight ? `${weight}kg` : '-';

    const cardHTML = `
         <div class="diary-card">
             <div class="card-header">
                 <span class="card-date">${date}</span>
                 <span class="card-name">${chilname}</span>
         </div>
         <div class="card-body">
            <p class="measurements">身長: ${heightText} / 体重: ${weightText}</p>
            <p class="memo-text">${memo}</p>
        </div>
    `;
    diaryList.insertAdhacentHTML('afterbegin', cardHTML);
    form.requestFullscreen();
    });
});