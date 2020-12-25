$(function() {
  const $btn = $('button')
  const $modal = $('.modal')
  let isClicked = false;
  $btn.click(function() {
    if(isClicked === false) {
      $modal.css('display','block');
      isClicked = true;
    } else {
      $modal.css('display','none');
      isClicked = false;
    }
    
    // if($modal.hasClass('open')) {
    //   $modal.removeClss('open');
    //   $modal.css('display','none');
    // }else{
    //   $modal.addClass('open');
    //   $modal.css('display','block');
    // }
    // // $modal.css('display','block');
  });
})