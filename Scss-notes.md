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