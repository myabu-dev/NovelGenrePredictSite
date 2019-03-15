$(document).ready(function() {
    let text = window.sessionStorage.getItem(['myabu/user_text']);    
    window.sessionStorage.clear();
    $.ajax({
        url: "http://118.27.24.174/novel-genre/api/",
        type: 'POST',
        data: {'text':text}
    }).done(function(res){
        doPredict($res['padded_seq']);
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
    console.log(result.dataSync()[0]);
    console.log(result.dataSync()[1]);
    console.log(result.dataSync()[2]);
    console.log(result.dataSync()[3]);
    console.log(result.dataSync()[4]);
    console.log(result.dataSync()[5]);
    console.log(result.dataSync()[6]);
    console.log(result.dataSync()[7]);
    console.log(result.dataSync()[8]);
    console.log(result.dataSync()[9]);
    console.log(result.dataSync()[10]);
    console.log(result.dataSync()[11]);
    console.log(result.dataSync()[12]);
    console.log(result.dataSync()[13]);
    console.log(result.dataSync()[14]);
}