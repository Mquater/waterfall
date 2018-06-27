var colCount;
var colHeightArray=[];
var imgWidth=$('.waterfall img').outerWidth(true);
colCount=Math.floor($('.waterfall').width()/imgWidth);
for(var i=0;i<colCount;i++){
  colHeightArray[i]=0;
}
$('.waterfall img').on('load',function(){
    var minValue=colHeightArray[0];
    var minIndex=0;
    for(var i=0;i<colCount;i++){
        if(colHeightArray[i] < minValue){
            minValue=colHeightArray[i];
            minIndex=i;
        }
    }
    $(this).css({
        left:minIndex * imgWidth,
        top:minValue
    });
    colHeightArray[minIndex] += $(this).outerHeight(true);
    });