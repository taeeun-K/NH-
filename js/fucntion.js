// header , aside버튼 fixed처리
const $header = document.querySelector('header');
const $Top = document.querySelector('.contents-title');
const $btnAside = document.querySelector('aside');

window.addEventListener('scroll', function(){
  const scrollTop = Math.ceil(window.scrollY);
  
  if(scrollTop>1){
    $header.classList.add('scrolled');
    console.log(111111);
  }else{
    $header.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function(){
  const scrollTop = Math.ceil(window.scrollY);
  
  if(scrollTop>549){
    $btnAside.classList.add('fixed');
  }else{
    $btnAside.classList.remove('fixed');
  }
});



// 주메뉴버튼 활성화
const $menuOpen = document.querySelector('button.open');
const $menuClose = document.querySelector('button.close');
const $gnb = document.querySelector('.gnb-box');
const $mainHead = document.querySelector('.main-header');

$gnb.style.display = 'none';

$menuOpen.addEventListener('click', function(){
  $gnb.style.display = 'block'; 
  $mainHead.style.display = 'none';
});

$menuClose.addEventListener('click', function(){
  $gnb.style.display = 'none'; 
  $mainHead.style.display = 'block';
});




// 서브메뉴 활성화
const $gnbs = document.querySelectorAll('.gnb-menu ul.gnb li a');
const $lnbs = document.querySelectorAll('.lnb-container ul.lnb-box li.lnb');
// let nowIdx = idx;


$gnbs.forEach(function(gnb,idx){
  gnb.addEventListener('click',function(evt){
    evt.preventDefault();

    $gnbs.forEach(function(lis,j){
      lis.parentElement.classList.remove('on');
    });

    $lnbs.forEach(function(lis,j){
      lis.style.display = 'none';
    });

    $gnbs[idx].parentElement.classList.add('on');
    $lnbs[idx].style.display = 'block'; 
  });
});

/*
// 내장함수
NodeList.prototype.forEach = function(callback){
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    callback(element, index)
  }
}
*/



// 본문탭 활성화
const $tabName = document.querySelectorAll('.tab-part .tab-menu ul.tab li a');
const $tabContents = document.querySelectorAll('.tab-part .tab-page .page');

$tabName.forEach(function(tab,idx){
  tab.addEventListener('click',function(evt){
    evt.preventDefault();

    $tabName.forEach(function(obj){
      obj.parentElement.classList.remove('on');
    });

    $tabContents.forEach(function(obj){
      obj.style.display = 'none';
    });

    $tabName[idx].parentElement.classList.add('on');
    $tabContents[idx].style.display = 'block'; 
  });
});




