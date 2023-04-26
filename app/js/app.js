$(function ($) {
  if ($(window).width() > 992) {
    $('.launchpool-item').equalHeights();
    $('.flex-supply-div').equalHeights();
  }

  $('.fourth-about-item').equalHeights();

  // if( $(window).width() > 768 ){
  // 	$('.third-item').equalHeights();
  // }

  // $('.new-box').equalHeights();

  // $('.open-mob').on('click', function(e){
  // 	$('#moby-mnu').addClass('active-mnu');
  // 	$('body').css('overflow-y', 'hidden');
  // 	e.preventDefault();
  // });

  // $('.close').on('click', function(e){
  // 	$('#moby-mnu').removeClass('active-mnu');
  // 	$('body').css('overflow-y', 'auto');
  // 	e.preventDefault();
  // });

  $('.open-mnu').on('click', function (e) {
    if ($('.sidebar-wrap').hasClass('active-mnu')) {
      $('.sidebar-wrap').removeClass('active-mnu');
      $('body').css('overflow-y', 'auto');
    } else {
      $('.sidebar-wrap').addClass('active-mnu');
      $('body').css('overflow-y', 'hidden');
      e.preventDefault();
    }
  });

  $(document).on('click', function (e) {
    $('.sidebar-wrap').removeClass('active-mnu');
    $('body').css('overflow-y', 'auto');
  });

  $('.sidebar, .open-mnu').click(function (e) {
    e.stopPropagation();
    console.log('sdfsf');
  });
  $('.additional-mnu').click(function (e) {
    //   e.stopPropagation();
    $('#collapsemnu').collapse('toggle');
  });
  $('.additional-mnu2').click(function (e) {
    //   e.stopPropagation();
    $('#collapsemnu7').collapse('toggle');
  });

  $('.btn-link').on('click', function () {
    $(this).toggleClass('rotate-ar');
  });

  $('.live-archive').on('click', function () {
    $('#checkbox1').trigger('click');
  });
  $('.live-archive3').on('click', function () {
    $('#checkbox3').trigger('click');
  });

  $('select').niceSelect();
  $('.open-popup').magnificPopup({
    type: 'inline',
    midClick: true,
  });
  $('.calc-open').magnificPopup({
    type: 'inline',
    midClick: true,
  });
  $('.stake').magnificPopup({
    type: 'inline',
    midClick: true,
  });
  $('.unstake').magnificPopup({
    type: 'inline',
    midClick: true,
  });
  // $('.close').on('click', function(e){
  // 	$('#mob-mnu').removeClass('active-mnu');
  // 	$('body').css('overflow-y', 'auto');
  // 	e.preventDefault();
  // });

  // $(' a.to-id').on('click', function(){
  // 	$('#mob-mnu').removeClass('active-mnu');
  // 	$('body').css('overflow-y', 'auto');
  // 	var id = $(this).attr('href');
  // 	console.log($(this).attr('href'));
  // 	$.mPageScroll2id("scrollTo", id);
  // });

  // if($(window).width() < 768){
  // 	$(header).addClass('sticky');
  // }

  $('.switch2 input').on('change', function () {
    var dad = $(this).parent();
    if ($(this).is(':checked')) dad.addClass('switch2-checked');
    else dad.removeClass('switch2-checked');
  });

  $('.ref-tab').on('click', function (e) {
    $('.ref-tab').removeClass('active-link');
    $(this).addClass('active-link');
    var a = $(this).attr('href');
    //console.log(a);
    $('.tab-content').removeClass('tab-visible');
    $(a).addClass('tab-visible');
    e.preventDefault();
  });
  $('.swap-total-data a, .pop-a-magnific').on('click', function (e) {
    e.preventDefault();
  });

  $('.gwei').on('click', function (e) {
    $('.gwei').removeClass('active-gwei');
    $(this).addClass('active-gwei');
  });
  $('.persnt-buttons a').on('click', function (e) {
    e.preventDefault();
    $('.persnt-buttons a').removeClass('current-persent');
    $(this).addClass('current-persent');
    let persent = $(this).data('percent');
    $('#persent-input').val(persent);
  });
  $('.farm-item').on('click', function () {
    var a = $(this).find('.details>a').attr('href');
    $(a).collapse('toggle');

    if ($(window).width() < 992) {
      if ($(this).hasClass('hidemob')) {
        $(this).animate({ height: 180 }, 200).removeClass('hidemob');
      } else {
        $(this).animate({ height: 119 }, 200).addClass('hidemob');
      }
    }
    console.log(this);
  });

  if ($(window).width() < 992) {
    $('.referal-data-item').on('click', function () {
      if ($(this).hasClass('hidemob')) {
        $(this).animate({ height: 147 }, 200).removeClass('hidemob');
      } else {
        $(this).animate({ height: 61 }, 200).addClass('hidemob');
      }
    });
  }

  $('#collapseFarm').on('show.bs.collapse', function () {
    $('.show-hide').html('Hide <i class="fa fa-chevron-up" aria-hidden="true"></i>');
  });
  $('#collapseFarm').on('hide.bs.collapse', function () {
    $('.show-hide').html('Details <i class="fa fa-chevron-down" aria-hidden="true"></i>');
  });

  $('.pop-a, .color-black>.pop-a').on('click', function (e) {
    e.preventDefault();
  });

  var h = $('#myChart').height();
  h = h / 2;
  h = h + 20;
  $('.burn-box .ts').css('top', h + 'px');

  var h2 = $('#myChart2').height();
  h2 = h2 / 2;
  h2 = h2 + 20;
  $('.distribution .ts').css('top', h2 + 'px');

  var handle = $('#remove-amount span');
  var slidermy = $('#slider').slider({
    value: 100,
    range: 'min',
    create: function () {
      handle.text($(this).slider('value'));
    },
    slide: function (event, ui) {
      handle.text(ui.value);
      $('.persnt-buttons a').removeClass('current-persent');
    },
  });

  $('.remove-persents a').on('click', function (e) {
    e.preventDefault();
    $('.persnt-buttons a').removeClass('current-persent');
    $(this).addClass('current-persent');
    let persent = $(this).data('percent');
    slidermy.slider('value', persent);
    handle.text(persent);
  });
});
$(function ($) {
  if ($(window).width() > 992) {
    $('.launchpool-item').equalHeights();
    $('.flex-supply-div').equalHeights();
  }

  $('.fourth-about-item').equalHeights();

  // if( $(window).width() > 768 ){
  // 	$('.third-item').equalHeights();
  // }

  // $('.new-box').equalHeights();

  // $('.open-mob').on('click', function(e){
  // 	$('#moby-mnu').addClass('active-mnu');
  // 	$('body').css('overflow-y', 'hidden');
  // 	e.preventDefault();
  // });

  // $('.close').on('click', function(e){
  // 	$('#moby-mnu').removeClass('active-mnu');
  // 	$('body').css('overflow-y', 'auto');
  // 	e.preventDefault();
  // });

  $('.open-mnu').on('click', function (e) {
    if ($('.sidebar-wrap').hasClass('active-mnu')) {
      $('.sidebar-wrap').removeClass('active-mnu');
      $('body').css('overflow-y', 'auto');
    } else {
      $('.sidebar-wrap').addClass('active-mnu');
      $('body').css('overflow-y', 'hidden');
      e.preventDefault();
    }
  });

  $(document).on('click', function (e) {
    $('.sidebar-wrap').removeClass('active-mnu');
    $('body').css('overflow-y', 'auto');
  });

  $('.sidebar, .open-mnu').click(function (e) {
    e.stopPropagation();
    console.log('sdfsf');
  });
  $('.additional-mnu').click(function (e) {
    //   e.stopPropagation();
    $('#collapsemnu').collapse('toggle');
  });
  $('.additional-mnu2').click(function (e) {
    //   e.stopPropagation();
    $('#collapsemnu7').collapse('toggle');
  });

  $('.btn-link').on('click', function () {
    $(this).toggleClass('rotate-ar');
  });

  $('.live-archive').on('click', function () {
    $('#checkbox1').trigger('click');
  });
  $('.live-archive3').on('click', function () {
    $('#checkbox3').trigger('click');
  });

  $('select').niceSelect();
  $('.open-popup').magnificPopup({
    type: 'inline',
    midClick: true,
  });
  $('.calc-open').magnificPopup({
    type: 'inline',
    midClick: true,
  });
  $('.stake').magnificPopup({
    type: 'inline',
    midClick: true,
  });
  $('.unstake').magnificPopup({
    type: 'inline',
    midClick: true,
  });
  // $('.close').on('click', function(e){
  // 	$('#mob-mnu').removeClass('active-mnu');
  // 	$('body').css('overflow-y', 'auto');
  // 	e.preventDefault();
  // });

  // $(' a.to-id').on('click', function(){
  // 	$('#mob-mnu').removeClass('active-mnu');
  // 	$('body').css('overflow-y', 'auto');
  // 	var id = $(this).attr('href');
  // 	console.log($(this).attr('href'));
  // 	$.mPageScroll2id("scrollTo", id);
  // });

  // if($(window).width() < 768){
  // 	$(header).addClass('sticky');
  // }

  $('.switch2 input').on('change', function () {
    var dad = $(this).parent();
    if ($(this).is(':checked')) dad.addClass('switch2-checked');
    else dad.removeClass('switch2-checked');
  });

  $('.ref-tab').on('click', function (e) {
    $('.ref-tab').removeClass('active-link');
    $(this).addClass('active-link');
    var a = $(this).attr('href');
    //console.log(a);
    $('.tab-content').removeClass('tab-visible');
    $(a).addClass('tab-visible');
    e.preventDefault();
  });
  $('.swap-total-data a, .pop-a-magnific').on('click', function (e) {
    e.preventDefault();
  });

  $('.gwei').on('click', function (e) {
    $('.gwei').removeClass('active-gwei');
    $(this).addClass('active-gwei');
  });
  $('.persnt-buttons a').on('click', function (e) {
    e.preventDefault();
    $('.persnt-buttons a').removeClass('current-persent');
    $(this).addClass('current-persent');
    let persent = $(this).data('percent');
    $('#persent-input').val(persent);
  });
  $('.farm-item').on('click', function () {
    var a = $(this).find('.details>a').attr('href');
    $(a).collapse('toggle');

    if ($(window).width() < 992) {
      if ($(this).hasClass('hidemob')) {
        $(this).animate({ height: 180 }, 200).removeClass('hidemob');
      } else {
        $(this).animate({ height: 119 }, 200).addClass('hidemob');
      }
    }
    console.log(this);
  });

  if ($(window).width() < 992) {
    $('.referal-data-item').on('click', function () {
      if ($(this).hasClass('hidemob')) {
        $(this).animate({ height: 147 }, 200).removeClass('hidemob');
      } else {
        $(this).animate({ height: 61 }, 200).addClass('hidemob');
      }
    });
  }

  $('#collapseFarm').on('show.bs.collapse', function () {
    $('.show-hide').html('Hide <i class="fa fa-chevron-up" aria-hidden="true"></i>');
  });
  $('#collapseFarm').on('hide.bs.collapse', function () {
    $('.show-hide').html('Details <i class="fa fa-chevron-down" aria-hidden="true"></i>');
  });

  $('.pop-a, .color-black>.pop-a').on('click', function (e) {
    e.preventDefault();
  });

  var h = $('#myChart').height();
  h = h / 2;
  h = h + 20;
  $('.burn-box .ts').css('top', h + 'px');

  var h2 = $('#myChart2').height();
  h2 = h2 / 2;
  h2 = h2 + 20;
  $('.distribution .ts').css('top', h2 + 'px');

  var handle = $('#remove-amount span');
  var slidermy = $('#slider').slider({
    value: 100,
    range: 'min',
    create: function () {
      handle.text($(this).slider('value'));
    },
    slide: function (event, ui) {
      handle.text(ui.value);
      $('.persnt-buttons a').removeClass('current-persent');
    },
  });

  $('.remove-persents a').on('click', function (e) {
    e.preventDefault();
    $('.persnt-buttons a').removeClass('current-persent');
    $(this).addClass('current-persent');
    let persent = $(this).data('percent');
    slidermy.slider('value', persent);
    handle.text(persent);
  });
});
