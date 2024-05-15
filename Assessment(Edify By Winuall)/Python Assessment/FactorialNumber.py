def recursive_factorial(n):
  if n == 1:
    return n
  else:
    return n*recursive_factorial(n-1)