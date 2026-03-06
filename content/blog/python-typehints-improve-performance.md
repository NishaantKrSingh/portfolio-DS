---
title: "Does Python type annotations improve performance? TL;DR: No!"
description: "Python has type hints but is it really type safe or strongly typed language? Does the type hints have any significant impact on performance? Let's discuss."
date: 2025-04-03
tags: ["python", "typesafety"]
---
In Python the variables are _Dynamically Typed_ but you might have came across some posts/ videos claming that Python has type safety and variables can have type safety by defining the type of varibale with will make your code faster. The claim is partially true, you do can assign type to a variable in Python from version 3.6 onwards. 

For Example:
```python
msg : str = "Hello World!"
age : int = "18"
num : List[int] = [1, 2, 3, 4]
days : Dict[int, str] = {1: "Monday", 2: "Tuesday", 3: "Wednesday"}
```

And even in functions you can define the type of input parameters and even the type annotation of `return` by `-> _type_`. 

For example:
```python
def add(a : int, b : int) -> int:
    return a + b
```
> _But the question remains does it has any impact on the performance of your code?_

No! it doesnot affect code in anyway and doesnot make it fast at all, infact if you just give wrong type annotaion like this:
```python
msg : int ="Hello World"
print(msg)
```
Guess what, it will still work perfectly without any issues. The only thing that will happen is you will make your IDE/ Code Editor unhappy and it will give you warning and that's it!
```bash
Hello World!
```
There won't be any errors or performance bottlenecks while running the code.

### Why is it even used?
The question remains that if it is totally unnecessary and the answer is stright up __no__. The type annotation is used for better code redability and very useful as providing type hint allows your editor to provide you with all the context options related to the type use are currently working with which makes your life way easier as a developer.