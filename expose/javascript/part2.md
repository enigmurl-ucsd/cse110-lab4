1. It will print out prices.length (3 in this case) since the var declaration outlives the for loop scope.
2. It will print out the the last discounted price since the score of var is the entire function, which in this case is 150.
3. It will print out the final price since the scope is the entire function, which in this case 150. 
4. It will return [50, 100, 150] since it just discounts each of the inputs by 50%, which has a halving effect
5. It will cause an error since i is a let declaration that does not outlive the function
6. It will cause an error since discountedPrice is a let declaration that does not outlive the function
7. It will print out the final price since the scope is the entire function, which in this case 150. 
8. The function is semantically equivalent to the previous one and thus return [50, 100, 150]
9. It will cause an error since i is a let declaration that does not outlive the function
10. It will print out the length of prices, which in this case is 3
11. As all variables are referenced inside of their respective scopes, there will not be any errors. Thus, the output is exactly the same as the past two cases, which is applying the discount to the specified values. In this case, that is [50, 100, 150]. Do note that there is no rounding, but that doesn't matter since the values are integers in our scenario.
12.
A. student.name
B. student['Grad Year']
C. student.greeting()
D. student['Favorite Teacher'].name
E. student.courseLoad[0]
13
A. '32'
B. 1
C. 3
D. '3null'
E. 4
F. 0
G. '3undefined'
H. NaN
14. 
A. true
B. false
C. true
D. false
E. false
F. true
15. == checks for untyped equality so that 1 == '1', whereas === checks for typed equality so that 1 !== '1' but 1 === 1
16. See javascript
17. [2,4,6]. The modifyArray is equivalent to a map function, where the transform function is simply multiplication by 2. In this case, that results in element-wise multiplication by 2
18. See javascript
19. 1 4 3 2
