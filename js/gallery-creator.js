const getGalleryItems = function () {

  let galleryItems = '';

  for (let i = 0; i < gallery.length; i++) {

    galleryItems = galleryItems.concat(
        `<div class="col-lg-3 col-md-4 col-sm-6 ${getFilterCategories(
            gallery[i])}">
  <div class="h_gallery_item">
    <img src="img/gallery/${gallery[i].category}/${gallery[i].fileName}" alt="">
    <div class="hover">
      <a href="#">
       <h4></h4>
      </a>
      <a class="light" href="img/gallery/${gallery[i].category}/big/${gallery[i].fileName}"><i class="fa fa-expand"></i></a>
    </div>
  </div>
</div>`);
  }
  console.log(galleryItems);
};

const gallery = [
  {category: 'noworodkowe', fileName: 'DSC00536.jpg', additionalCategories: ['all']},
  {category: 'noworodkowe', fileName: 'DSC03289.jpg', additionalCategories: ['all']},
  {category: 'noworodkowe', fileName: 'DSC00820.jpg', additionalCategories: ['rodzinne', 'all']},
  {category: 'noworodkowe', fileName: 'DSC02847.jpg', additionalCategories: ['rodzinne', 'all']},
  {category: 'ciazowe', fileName: 'DSC05319.jpg', additionalCategories: ['all']},
  {category: 'ciazowe', fileName: 'DSC05396.jpg', additionalCategories: ['all']},
  {category: 'ciazowe', fileName: 'DSC02365.jpg', additionalCategories: ['all']},
  {category: 'ciazowe', fileName: 'DSC02268.jpg', additionalCategories: ['all']},
  {category: 'kobiece', fileName: 'DSC01204.jpg', additionalCategories: ['all']},
  {category: 'kobiece', fileName: 'DSC01188.jpg', additionalCategories: ['all']},
  {category: 'kobiece', fileName: 'DSC01149.jpg', additionalCategories: ['all']},
  {category: 'kobiece', fileName: 'DSC01386.jpg', additionalCategories: ['all']},
  {category: 'biznesowe', fileName: 'DSC08459.jpg', additionalCategories: ['all']},
  {category: 'biznesowe', fileName: 'DSC03533.jpg', additionalCategories: ['all']},
  {category: 'biznesowe', fileName: 'DSC07954.jpg', additionalCategories: ['all']},
  {category: 'rodzinne', fileName: 'DSC03073.jpg', additionalCategories: ['all']},
  {category: 'rodzinne', fileName: 'DSC02953.jpg', additionalCategories: ['all']},
  {category: 'rodzinne', fileName: 'DSC02983.jpg', additionalCategories: ['all']},
  {category: 'rodzinne', fileName: 'DSC03014.jpg', additionalCategories: ['all']},
  {category: 'urodzinowe', fileName: 'DSC04157.jpg', additionalCategories: ['all']},
  {category: 'urodzinowe', fileName: 'DSC04183.jpg', additionalCategories: ['all']},
  {category: 'urodzinowe', fileName: 'DSC05048.jpg', additionalCategories: ['all']},
  {category: 'urodzinowe', fileName: 'DSC04985.jpg', additionalCategories: ['all']},
  {category: 'swiateczne', fileName: 'DSC05189.jpg', additionalCategories: ['rodzinne']},
  {category: 'swiateczne', fileName: 'DSC05106.jpg'},
  {category: 'swiateczne', fileName: 'DSC05143.jpg', additionalCategories: ['rodzinne']},
  {category: 'noworodkowe', fileName: 'DSC03201.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00138.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00370.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00863.jpg'},
  {category: 'noworodkowe', fileName: 'DSC02759.jpg'},
  {category: 'noworodkowe', fileName: 'DSC02781.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00639.jpg'},
  {category: 'biznesowe', fileName: 'DSC03476.jpg'},
  {category: 'biznesowe', fileName: 'DSC07945.jpg'},
  {category: 'biznesowe', fileName: 'DSC07944.jpg'},
  {category: 'biznesowe', fileName: 'DSC08442.jpg', additionalCategories: ['kobiece']},
  {category: 'biznesowe', fileName: 'DSC08450.jpg'},
  {category: 'ciazowe', fileName: 'DSC05286.jpg'},
  {category: 'ciazowe', fileName: 'DSC05337.jpg'},
  {category: 'ciazowe', fileName: 'DSC02258.jpg'},
  {category: 'ciazowe', fileName: 'DSC02266.jpg'},
  {category: 'ciazowe', fileName: 'DSC02290.jpg'},
  {category: 'ciazowe', fileName: 'DSC02327.jpg'},
  {category: 'ciazowe', fileName: 'DSC02350.jpg'},
  {category: 'ciazowe', fileName: 'DSC02381.jpg'},
  {category: 'ciazowe', fileName: 'DSC02424.jpg'},
  {category: 'ciazowe', fileName: 'DSC02428.jpg'},
  {category: 'ciazowe', fileName: 'DSC02395.jpg'},
  {category: 'ciazowe', fileName: 'DSC02421.jpg'},
  {category: 'kobiece', fileName: 'DSC01397.jpg'},
  {category: 'kobiece', fileName: 'DSC01174.jpg'},
  {category: 'kobiece', fileName: 'DSC01177.jpg'},
  {category: 'kobiece', fileName: 'DSC01183.jpg'},
  {category: 'kobiece', fileName: 'DSC01188.jpg'},
  {category: 'kobiece', fileName: 'DSC01194.jpg'},
  {category: 'kobiece', fileName: 'DSC01203.jpg'},
  {category: 'kobiece', fileName: 'DSC01205.jpg'},
  {category: 'kobiece', fileName: 'DSC01208.jpg'},
  {category: 'kobiece', fileName: 'DSC01209.jpg'},
  {category: 'kobiece', fileName: 'DSC01210.jpg'},
  {category: 'kobiece', fileName: 'DSC01325.jpg'},
  {category: 'kobiece', fileName: 'DSC01340.jpg'},
  {category: 'kobiece', fileName: 'DSC01390.jpg'},
  {category: 'kobiece', fileName: 'DSC01494.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00331.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00370.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00413.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00538.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00642.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00871.jpg'},
  {category: 'noworodkowe', fileName: 'DSC00954.jpg'},
  {category: 'noworodkowe', fileName: 'DSC02779.jpg'},
  {category: 'noworodkowe', fileName: 'DSC02800.jpg'},
  {category: 'noworodkowe', fileName: 'DSC02806.jpg'},
  {category: 'noworodkowe', fileName: 'DSC03146.jpg'},
  {category: 'noworodkowe', fileName: 'DSC03179.jpg'},
  {category: 'noworodkowe', fileName: 'DSC03184.jpg'},
  {category: 'noworodkowe', fileName: 'DSC03298.jpg'},
  {category: 'noworodkowe', fileName: 'PB071765.jpg'},
  {category: 'noworodkowe', fileName: 'PB081937.png'},
  {category: 'urodzinowe', fileName: 'DSC04076.jpg'},
  {category: 'urodzinowe', fileName: 'DSC04972.jpg'},
  {category: 'urodzinowe', fileName: 'DSC04974.jpg'},
  {category: 'urodzinowe', fileName: 'DSC04989.jpg'},
  {category: 'urodzinowe', fileName: 'DSC05003.jpg'},
  {category: 'urodzinowe', fileName: 'DSC05020.jpg'},
  {category: 'urodzinowe', fileName: 'DSC05042.jpg'},
  {category: 'swiateczne', fileName: 'DSC05108.jpg'},
  {category: 'swiateczne', fileName: 'DSC05127.jpg'},
  {category: 'swiateczne', fileName: 'DSC05130.jpg'},
  {category: 'swiateczne', fileName: 'DSC05133.jpg'},
  {category: 'swiateczne', fileName: 'DSC05139.jpg'},
  {category: 'swiateczne', fileName: 'DSC05148.jpg', additionalCategories: ['rodzinne']},
  {category: 'swiateczne', fileName: 'DSC05164.jpg'},
  {category: 'swiateczne', fileName: 'DSC05189.jpg', additionalCategories: ['rodzinne']},
  {category: 'swiateczne', fileName: 'DSC05193.jpg', additionalCategories: ['rodzinne']},
  {category: 'swiateczne', fileName: 'DSC05628.jpg'},
  {category: 'swiateczne', fileName: 'DSC05680.jpg'},
  {category: 'swiateczne', fileName: 'DSC05716.jpg'},
];

const getFilterCategories = function (object) {
  let filterCategoriesString = '';

  filterCategoriesString = filterCategoriesString.concat(object.category);
  if (object.additionalCategories) {
    for (let i = 0; i < object.additionalCategories.length; i++) {
      filterCategoriesString += (' ' + object.additionalCategories[i]);
    }
  }

  return filterCategoriesString;
};
