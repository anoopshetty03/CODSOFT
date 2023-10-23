def calculate(a,b):
    operator = input("Enter a operator - '+', '-','*','/','%': ")
    if operator == '+':
        return a+b
    elif operator == '-':
        return a-b
    elif operator == '*':
        return a*b
    elif operator == '/':
        return a/b
    elif operator == '%':
        return a%b

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

result = float(calculate(a,b))

print(f"Result is {result}")