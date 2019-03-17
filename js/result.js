$(document).ready(function() {
    $('.result_wrapper').css('display','none');
    let text_val = window.sessionStorage.getItem(['myabu/user_text']);    
    console.log("aaaa"); 
    $.ajax({
        url: "https://myabu.dev/novel/ganre/api/",
        type: 'POST',
        dataType : 'json',
        data: {sentence:text_val},
    }).done(function(res){
        doPredict(res['padded_seq']);
    }).fail(function(error){
        console.log('post error');
        console.log(error);
      });
        
});

// tensor flowの処理
async function doPredict(text_data){
    const model = await tf.loadLayersModel('novel_predict_model/model.json');
    const input_data = tf.tensor2d(text_data);
    const prediction = model.predict(input_data);
    tf.tidy
    showResult(prediction)
}

function showResult(result){
    let datas = result.dataSync();
    showGraph(datas);
    $('.load_title').fadeOut(400);
    $('.bookshelf_wrapper').fadeOut(400);
    $('.result_wrapper').delay(400).fadeIn(400);
    // console.log(result.dataSync()[0]);
    // console.log(result.dataSync()[1]);
    // console.log(result.dataSync()[2]);
    // console.log(result.dataSync()[3]);
    // console.log(result.dataSync()[4]);
    // console.log(result.dataSync()[5]);
    // console.log(result.dataSync()[6]);
    // console.log(result.dataSync()[7]);
    // console.log(result.dataSync()[8]);
    // console.log(result.dataSync()[9]);
    // console.log(result.dataSync()[10]);
    // console.log(result.dataSync()[11]);
    // console.log(result.dataSync()[12]);
    // console.log(result.dataSync()[13]);
    // console.log(result.dataSync()[14]);
}

function showGraph(datas){
    let ctx = document.getElementById('myChart').getContext('2d');

    let data = {
        datasets: [{
            data: datas,
            backgroundColor: [
            "#ff69b4",
            "#ffc0cb",
            "#3cb371",
            "#98fb98",
            "#FAAC58",
            "#FA8258",
            "#AC58FA",
            "#58ACFA",
            "#A4A4A4",
            "#FA5882",
            "#F7FE2E",
            "#7fffd4",
            "#9932cc",
            "#1e90ff",
            "#848484"
            ],
        }],
        labels:['恋愛（異世界）', '恋愛（現実世界）', 'ハイファンタジー', 'ローファンタジー', '純文学', 'ヒューマンドラマ' , '歴史','推理','ホラー', 'アクション', 'コメディ', 'VRゲーム', '宇宙', '空想科学','パニック'],
    };
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            plugins:{
                labels: {
                  render: 'label',
                  fontColor: '#000',
                  position: 'border'
                }
              },
              maintainAspectRatio: false,
              legend: {
                display: false
             }
        }
    });
}