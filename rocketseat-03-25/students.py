
students = {
    1: {'name': 'Victor', 'age': 29, 'course': 'Computer Science'},
    2: {'name': 'Alice', 'age': 22, 'course': 'Mathematics'},
    3: {'name': 'Bob', 'age': 24, 'course': 'Computer Science'},
    4: {'name': 'Charlie', 'age': 27, 'course': 'Engineering'},
    5: {'name': 'David', 'age': 23, 'course': 'Biology'},
    6: {'name': 'Emma', 'age': 26, 'course': 'Computer Science'},
    7: {'name': 'Frank', 'age': 28, 'course': 'Economics'},
    8: {'name': 'Grace', 'age': 21, 'course': 'Mathematics'},
    9: {'name': 'Henry', 'age': 25, 'course': 'History'},
    10: {'name': 'Isabella', 'age': 20, 'course': 'Mathematics'}
}

courses = {
    'Computer Science', 'Mathematics', 'Physics', 'Engineering', 'Biology', 'Chemistry', 'Economics',    'Philosophy', 'History', 'Literature'
}

students_course = {
    'Computer Science': {1, 3, 6},
    'Mathematics': {2, 8, 10}
}


def addPerson(registration, name, age, course):
    person = {'name': name, 'age': age, 'course': course}
    students[registration] = person
    if course not in students_course:
        students_course[course] = set()
    students_course[course].add(registration)


# print(students_course)
# addPerson(11, 'Rubens', 27, 'Mathematics')

# addPerson(12, 'Brunna', 27, 'Cinema')
# print(students_course)

print(f'All people: {students_course['Computer Science'] - students_course['Mathematics'] }')

# p1 = students.get(1)
# {'name': 'Victor', 'age': 29, 'course': 'Computer Science'}
# p1.keys()
# dict_keys(['name', 'age', 'course'])
# p1.values()
# dict_values(['Victor', 29, 'Computer Science'])
# p1.items()
# dict_items([('name', 'Victor'), ('age', 29), ('course', 'Computer Science')])
# for key,value in p1.items():
# print(f'ket: {key} - value: {value}')
