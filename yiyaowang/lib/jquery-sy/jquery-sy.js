jQuery.fn.sylunbotu = function(options){
    let defaults = {
        width:500,
        height:300,
        type:"horizontal",    //horizontal、fade
        duration:2000,
        seamless:false,
        // direction:"top",
        img:[],
        idx:0
    };



    this.each(function(idx,item){
    let $self = $(item);
    let opt = Object.assign({},defaults,options); 
    // console.log(opt);

    let $ul;
    let $li;
    let prev;
    let $page;
    let $span;


  

    let len = opt.img.length;
    let init = function(){
        $ul = $("<ul/>");
        for(var i=0;i<len;i++){
            $li = $("<li/>");
            let $a = $('<a/ href="#">');
            let $img = $("<img src=\""+opt.img[i]+"\"/>");

            $img.appendTo($a);
            $img.width(opt.width).height(opt.height);

            $a.appendTo($li);
            $a.width(opt.width).height(opt.height); 

            $li.appendTo($ul);    
            $li.width(opt.width).height(opt.height);
        }
        $ul.appendTo($self);
        if(opt.type == "horizontal"){
            $ul.addClass('horizontal');
            $ul.width(opt.width*len).height(opt.height);
        }else if(opt.type == "fade"){
            $ul.addClass('fade');
            $ul.width(opt.width).height(opt.height);
            $ul.children().css("opacity",0);
            $ul.children().eq(opt.idx).css("opacity",1);
        }
        $self.width(opt.width).height(opt.height);
        $self.addClass('sylunbotu');
        creatPage();
        move();
        $page.on("click","span",function(){
            let $curidx = this.innerHTML-1;
            opt.idx = $curidx;
            lunbo();
            $page.children().removeClass('active');
            $page.children().eq(opt.idx).addClass('active');
            // console.log($curidx);   
        })
        $self.on("mouseover",function(){
            // console.log(666);
            clearInterval($self.timer);
        }).on("mouseout",function(){
            move();
        })
    };
    
    let move = function(){
        $self.timer = setInterval(function(){
            prev = opt.idx;
            opt.idx++;
            lunbo();
            $page.children().removeClass('active');
            $page.children().eq(opt.idx).addClass('active');
       },opt.duration) 
    };
    function lunbo(){
        if(opt.idx > len-1){
               opt.idx = 0; 
        }else if(opt.idx <0){
           opt.idx = len-1; 
        };
        if(opt.type == "vertical"){
            $ul.animate({"top":-opt.height*opt.idx+"px"});    
        }else if(opt.type == "horizontal"){
            $ul.animate({"left":-opt.width*opt.idx+"px"});
        }else if(opt.type == "fade"){
            $ul.children().eq(prev).animate({"opacity":0});
            $ul.children().eq(opt.idx).animate({"opacity":1});
            prev = opt.idx;
        };
    };
    function creatPage(){
        $page = $("<div/>");
        for(var i=0;i<len;i++){
            $span = $("<span/>");
            $span[0].innerHTML = i+1;
            $span.appendTo($page);  
        }
        // console.log(opt.idx);
        $page.addClass('page');   
        $page.children().removeClass('active');
        $page.children().eq(opt.idx).addClass('active');
        $page.appendTo($self);
    };
    init();
    })
}

    /*初始方法，创建所有需要的元素，并插入对应的位置，记得设置对应的sylunbotu、ul以及img的宽高，改sylunbotu是最外层显示的div，内部需要嵌套ul，ul嵌套li，每个li再嵌套a标签，a标签里面再嵌套img标签，嵌套的img需要进行遍历，将对应的url地址赋予给对应的img*/


    /*move方法，设置定时器，使sylunbotu里面的ul在动画滚动，根据opt.idx滚动到对应的位置，即用设置对应的left值，left值等于
    imgwidth*len，并当idx>len-1的时候需要将idx变为0，考虑多个方向滚动，所以当idx<0的时候，将idx变为len-1*/

    /*鼠标悬停在sylunotu的时候页面需要停止定时器，移开开启定时器*/


    /*设置页码方法，生成一个div嵌套多个span(span的多少根据图片的长度决定的)，并赋予对应的值，插入在sylunbotu中，并需要定
    位在右下角，根据页码=当前索引值+1，并且在每一次变换页面给对应的索引值的page添加相应的类名，清除其他page的类名先，
    在初始方法的时候需要需要添加设置页面的执行，以及设置页码的事件，点击就可以跳转到对应的页面，即点击的时候获取它的内容的值减1，就可以获取当前索引值，改变索引值，然后执行页面的move方法*/


    /*如果想多个同样类名可以同时执行代码不发生冲突，可以将this值提交保存好，然后就不会发生this被覆盖，多个模块都可以执行，且不冲突*/

    /*考虑无缝连接时候需要如何改进，1、需要将最后一张图片复制一份出来，记得在获取总长度之前2、每次滚动得到len-1的时候需要将idx改为1，且将原本的left值该为0，继续执行move*/

