function ChangeSelectionPic(src) {
    selection_pic.src=src;
};

function num_minus(){
    let number=parseInt(num.value);
    if (number>1){
        num.value=number-1;
    }else{
        num.value=1;
    }
}
function num_plus(){
    let number=parseInt(num.value);
    if (number>0){
        num.value=number+1;
    }else{
        num.value=1;
    }
}
function num_change(){
    if(/^(0|[1-9]\d*)$/.test(num.value)){
        num.value=num.value;
    }else{
        num.value=1;
    }
}
function not(){
    let number=parseInt(num.value);
    let str="В корзину добавлено " +number+ " товаров";
    notif({
            msg: str,
            type: "success"
            });
}

// function fBindFunctionToElement(){
//     $('.product__description__actions__button1').bind("click", not);
//  }
// $( document ).ready(function(){

// $("#product__description__actions__button1").on("click", function(){
//     let number=parseInt(num.value);
//     let str="В корзину добавлено " +number+ " товаров";
//     notif({
//             msg: str,
//             type: "success"
//             });
// });});


// const buttonElem = document.getElementById('product__description__actions__button1');  
// buttonElem.addEventListener('click', not);       
// let a = document.getElementById('product__description__actions__button1');
// a.onclick=function(){
//     let number=parseInt(num.value);
//         let str="В корзину добавлено " +number+ " товаров";
//         notif({
//             msg: str,
//             type: "success"
//             });
//     }

// $(function(){
//     $(".product__description__actions__button1").click(function() {
//         let number=parseInt(num.value);
//         let str="В корзину добавлено " +number+ " товаров";
//         notif({
//             msg: str,
//             type: "success"
//             });
//     });
// });