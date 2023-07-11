import csv

filename = 'life-expectancy.csv'
year_input = input("Enter a country: ")
print()
with open(filename) as life_expectancies:
    i = 0
    for life in life_expectancies:
        i += 1
        life_details = life.strip()
        life_detail_clean = life_details.split(",")

        if i > 1 and life_detail_clean[0] == year_input.title():
            # Print all details for the specified year
            # print("Country:", life_detail_clean[0])
            # print("Code:", life_detail_clean[1])
            # print("Year:", life_detail_clean[2])
            # print("Life Expectancy:", life_detail_clean[3])
            
            print(f"{life_detail_clean[0]}, {life_detail_clean[1]}, {life_detail_clean[2]}, {life_detail_clean[3]}\n")