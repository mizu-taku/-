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
        diaryList.innerHTML = '';//画面のリストを空にする
        
        // バインダー(diaries)から、条件に合うものだけを抜き出した「新しい束」を作る
        const filterdDiaries = diaries.filter(diary => {
            if (currentFilter === 'すべて') {
                return true; //「すべて」の時は無条件で合格（残す）
            } else {
                return diary.childName === currentFilter//名前が一致したものだけ合格
            }
        });

        // diaries配列の中身を1件ずつ取り出してHTMLに変換し、画面に追加する
        diaries.forEach(diary => {
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
             // afterbegin（先頭に追加）することで、配列の後ろにある新しいデータが画面の上にくる
             diaryList.insertAdjacentHTML('afterbegin'. cardHTML);
        });
    };
    // 画面が開かれた瞬間に、保存されているデータを描画する
    renderDiaries();

    // ==========================================
    // 2. フォーム送信時（新しい記録の追加）の処理
    // ==========================================

    form. addEventListener('submit' , (e) => {
        e.preventDefault(); //リロード防止
    
    //入力値を取得
    const date = document.getElementById('date').value;
    const childName = document.getElementById('cheild-name').value;
    const height = document.getElementById('heigth').value;
    const weight = document.getElementById('weight').value;
    const memo = document.getElementById('memo').value;

    // 取得したデータを、ひとまとめの「オブジェクト」にする
    const newDiary = {
        date: date,
        childName: childName,
        height: height,
        weight: weight,
        memo: memo,
    };

    // 既存の記録リスト（配列）の末尾に、新しい記録を追加する
    diaries.push(newDiary);

    // 更新された配列を文字列に変換し、LocalStorageに保存（上書き）する
    localStorage.setItem('growth_diaries', JSON,stringify(diaries));

    // 画面を再描画して、新しい記録を表示させる
    renderDiaries();

    // フォームをリセット
    form.reset();
    });
});