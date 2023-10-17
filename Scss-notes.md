Basic Scss Syntax
```scss
// 1. variable
$color: #fff;
$font-size: 20px;
$font-family: 'Arial'; 

$ means variable in scss

// 2. mixin
@mixin center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
@ means mixin in scss

// 3. extend
%center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

% means extend in scss. it is not output in css file.

//4. nesting
.ac-contentBox{
    &.active{
        .ac-content{
            height: 200px;
        }
    }
}

& means parent in scss.

//5. # 
 # in css is id selector. 
we use id selector in scss, too. 
    #ac-1{
        background-color: #fff;
    }


    # in scss is placeholder selector.
    % in scss is placeholder selector.
for example, in css, we use id selector to setting style.
    #ac-1{
        background-color: #fff;
    }
    #ac-2{
        background-color: #fff;
    }
    #ac-3{
        background-color: #fff;
    }
in scss, we use # to setting style.
    #%ac-1{
    #    background-color: #fff;
    #}
    #%ac-2{
    #    background-color: #fff;
    #}
    #%ac-3{
    #    background-color: #fff;
    #}


//6. @import
@import 'reset';
@import 'variables';
@import 'mixin';
@import 'extend';
@import 'nesting';
@import 'placeholder';
@import 'media';
@import 'function';
@import 'loop';
@import 'sass';
