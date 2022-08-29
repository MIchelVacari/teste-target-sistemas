quantidade = int(input('digite a quantidade de repetição:'))

num1 = 0
num2 = 1
print('{} {}' .format(num1, num2), end='')
contador = 3

while contador <= quantidade:
    num3 = num1 + num2
    print(' {}'.format(num3), end='')
    num1 = num2
    num2 = num3
    contador += 1

print(contador)
