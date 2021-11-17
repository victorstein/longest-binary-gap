# What is a binary gap?

```
A binary gap is any sequence of consecutive zeros that is surrounded by ones at both ends.
```

For example:

Number 9 has binary representation 1001 and contains a binary gap of length 2. <br/><br/>
The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. <br/><br/>
The number 20 has binary representation 10100 and contains one binary gap of length 1. <br/><br/>
The number 15 has binary representation 1111 and has no binary gaps. <br/><br/>
The number 32 has binary representation 100000 and has no binary gaps.

<hr/>

**Challenge:**

Create a fuction that returns the length of the longest binary gap of a positive integer. 

- If there's no binary gap the function should return 0
- No need of edge cases validation (negatives, decimal, etc) assume you will always receive a positive integer
