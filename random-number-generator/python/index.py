import random

class Generator:
  def __init__(self, min, max):
    self.min = min
    self.max = max

  def getRandomNumber(self):
    print(random.randint(self.min, self.max))

gen = Generator(1, 100)
gen.getRandomNumber()
    
