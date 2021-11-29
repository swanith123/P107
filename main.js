function classify_sound(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yLt0l-K-K/", modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }