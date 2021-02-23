let data = {
    photo: 'images/pic1.jpg',
    title: 'Nightlife',
    description: 'Első fénykép'
  };

  let data2 = {
    photo: 'images/pic2.jpg',
    title: 'Paris',
    description: 'Második fénykép'
  };

  let data3 = {
    photo: 'images/pic3.jpg',
    title: 'Szikla',
    description: 'Harmadik fénykép'
  };

  let data4 = {
    photo: 'images/pic4.jpg',
    title: 'Tart',
    description: 'Negyedik fénykép'
  };

  let data5 = {
    photo: 'images/pic5.jpg',
    title: 'Beautiful',
    description: 'Ötödik fénykép'
  };


  let data6 = {
    photo: 'images/pic6.jpg',
    title: 'Moon',
    description: 'Hatodik fénykép'
  };

  let data7 = {
    photo: 'images/pic7.jpg',
    title: 'Tree',
    description: 'Hetedik fénykép'
  };


  let data8 = {
    photo: 'images/pic8.jpg',
    title: 'Girl',
    description: 'Nyolcadig fénykép'
  };

  

  let currentPhoto = 0;
  let imagesData = [data, data2, data3, data4, data5, data6, data7, data8];

  let loadPhoto = (photoNumber) => {
    $('#responsive').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    $("div").removeClass("active")
    $(`#${photoNumber}`).addClass("active")
  }

loadPhoto(currentPhoto)

imagesData.forEach((item, index) => {
    $('.thumbnail').append(`<div class="pictures" data-index="${index}" id="${index}"></div>`);
    $(`#${index}`).append(`<img data-index="${index}">`);
    $(`#${index}`).append(`<div class="megjegyzes">${item.description}</div>`);
    $(`#${index} img`).attr(`src`, item.photo);
});


$('.pictures img').click(() => {
    let vegre = $(event.target).attr('data-index')
    let vegreIndex = parseInt(vegre);
    currentPhoto = vegre;
    loadPhoto(currentPhoto);
})

$('#left-arrow').click(() => {
    if (currentPhoto > 0) {
    currentPhoto--;
    } else {
        currentPhoto = 7;
    }
    loadPhoto(currentPhoto);
  });

$('#right-arrow').click(() => {
    if (currentPhoto < imagesData.length-1) {
    currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
  });




  


  







 