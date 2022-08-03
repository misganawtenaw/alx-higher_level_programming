#!/usr/bin/python3
"""
Method 9-student
"""


class Student:
    """ defines a student based on full name and age """

    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self):
        return self.__dict_
