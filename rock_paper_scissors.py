import random

game_choice = ["Rock", "Paper", "Scissors"]
continue_game = 1
while(continue_game == 1):
    user_choice = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))
    print("User chose:")
    print(game_choice[user_choice])

    computer_choice = random.randint(0, 2)
    print("Computer chose:")
    print(game_choice[computer_choice])

    if user_choice >= 3 or user_choice < 0:
      print("You typed an invalid number, you lose!")
    elif user_choice == 0 and computer_choice == 2:
      print("You win!")
    elif computer_choice == 0 and user_choice == 2:
      print("You lose")
    elif computer_choice > user_choice:
      print("You lose")
    elif user_choice > computer_choice:
      print("You win!")
    elif computer_choice == user_choice:
      print("It's a draw")
    continue_game = int(input("Do you want to continue? If yes type 1 or type 0 for exit : "))
