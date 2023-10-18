when I use scss file to setting style,
I use wrong syntax.
    ac-contentBox.active{
        .ac-content{
            height: 200px;
        }
    }
it cannot work. I should use &.active in scss to setting style.
    ac-contentBox{
        &.active{
            .ac-content{
                height: 200px;
            }
        }
    }
```
here is another same error.
I should use &::before in scss to setting style.
        .ac-label::before{
            content: '+';
            position:absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            font-size: 15px;
        }

### mistake3: I didn't put &::before into ac-label,
that is why it cannot work.
    .ac-label{
        &::before{
            content: '+';
            position:absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            font-size: 15px;
        }
    }