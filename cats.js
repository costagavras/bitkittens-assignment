document.addEventListener("DOMContentLoaded", function() {

    var summon_btn = document.querySelector('.summon-cats');
    var cat_boxes = document.querySelectorAll('.cat-box');
    var i = 0;

    summon_btn.addEventListener('click', function(){

        // var placeholder = axios({
        //     url: 'http://bitkittens.herokuapp.com/cats.json',
        //     method: 'get',
        //     // dataType: 'json',
        // });

        var catBucket = axios.get('http://bitkittens.herokuapp.com/cats.json');


        catBucket
            .then(function(response){
                response.data.cats.forEach(function(cat){
                    var catImage = document.createElement('img');
                    catImage.src = cat.photo;
                    catImage.alt = "Photo of " + cat.name;
                    cat_boxes[i].appendChild(catImage);
                    i +=1;
                });


            });

    });

});
