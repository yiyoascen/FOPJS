# procedural example
s = 0
for n in range(1, 10):
    if n % 3 == 0 or n % 5 == 0:
        s += n
print(s)
# OOP example
m = list()
for n in range(1, 10):
    if n % 3 == 0 or n % 5 == 0:
        m.append(n)
print(sum(m))


class Summable_List(list):
    def sum(self):
        s = 0
        for v in self:
            s += v
        return s


sl_example = Summable_List([1, 1, 1])
print(sl_example.sum())

# functional example


def sumr(seq):
    if len(seq) == 0:
        return 0
    return seq[0] + sumr(seq[1:])
# lambda example that gets changed with autopep8


def mult_3_5(x): return x % 3 == 0 or x % 5 == 0


print(mult_3_5(3))


#  hybrid functional
print(sum(n for n in range(1, 10) if n % 3 == 0 or n % 5 == 0))
