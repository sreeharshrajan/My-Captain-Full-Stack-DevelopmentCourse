from enum import Enum

class CountryList(Enum):
    Afghanistan = 93 
    Albania = 355 
    Algeria = 213 
    Andorra = 376 
    Angola = 244 
    Antarctica = 672

print('\nMember Name: {}'.format(CountryList.Albania.name))
print('\nMember Value: {}'.format(CountryList.Albania.value))