It took me a long time to adjust overflow part,
overflow: hidden; is the key to solve this problem.
- we should give .content a height, and overflow: hidden;
- after that, adjust content1 transition: translateX(0), 
content2 and content 3 transition：translateX(150%), this value will make sure that content2 and content3 will be hidden.
The value 150% is not fixed, it depends on the width of the content1. You can try 200% or 300% to see the difference as long as the content2 and content3 are hidden.
