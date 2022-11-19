//https://teachablemachine.withgoogle.com/models/XYKYqXxVy/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png', 
    png_quality: 90
})
Webcam.attach('#camera')
camera = document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML = '<img id="captured_image" src = "'+ data_URI+'"/>';
    });
}
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XYKYqXxVy/model.json", modelLoaded);
function modelLoaded(){
    console.log("model loaded")
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("Object_name").innerHTML = result[0].label;
        document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}
function check(){
    img = document.getElementById("captured_image");
    Classifier.classify(img, gotResult) 
}
