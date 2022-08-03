#!/usr/bin/python3
"""
Method 9-student
"""


class Student:
    """Class for student"""
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        if attrs is None:
            return self.__dict__
        dictionary = {}
        for attr in attrs:
            try:
                dictionary[attr] = self.__dict__[attr]
            except Exception:
                pass
        return dictionary

    def reload_from_json(self, json):
        for key, value in json.items():
            self.__dict__[key] = value
