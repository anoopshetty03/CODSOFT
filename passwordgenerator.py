from tkinter import *
import random
import string
from random import randint
import tkinter.messagebox as msg

def generate():
    passwordField.delete(0,END)

    lower_case_alphabets = string.ascii_lowercase*5
    upper_case_alphabets = string.ascii_uppercase
    numbers = string.digits

    length = int(lengthbox.get())
    password = ''
    for n in range(length):
        password += chr(randint(33, 126))

    def invalid():
        popup = msg.showinfo("Error", "Choose the complexity of the password")

    if choice.get() == 1:
        passwordField.insert(0, random.sample(lower_case_alphabets, length))

    if choice.get() == 2:
        passwordField.insert(0, random.sample(lower_case_alphabets + upper_case_alphabets + numbers , length))

    if choice.get() == 3:
        passwordField.insert(0, password)

    if choice.get() == 0:
        invalid()


main=Tk()
choice=IntVar()
Font=('Calibri',14,'bold')
titleLabel=Label(main,text='Password Generator',font=('Times new roman',22,'bold'))
titleLabel.grid(pady=10)

weakButton=Radiobutton(main,text='Weak',value=1,variable=choice,font=Font,relief='raised')
weakButton.grid(pady=5)

moderateButton=Radiobutton(main,text='Moderate',value=2,variable=choice,font=Font,relief='raised')
moderateButton.grid(pady=5)

strongButton=Radiobutton(main,text='Strong',value=3,variable=choice,font=Font,relief='raised')
strongButton.grid(pady=5)

lengthLabel=Label(main,text='Password Length',font=Font)
lengthLabel.grid()

lengthbox=Spinbox(main, from_=4,to=50,width=5, font=Font)
lengthbox.grid()

generateButton=Button(main,text='Generate',font=Font,command=generate)
generateButton.grid(pady=5)

passwordField=Entry(main,width=20,bd=2,font=Font)
passwordField.grid(pady=5)



main.mainloop()