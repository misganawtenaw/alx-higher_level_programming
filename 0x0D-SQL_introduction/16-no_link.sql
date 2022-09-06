-- lists all records of the table second_table of the database hbtn_0c_0 in your MySQL server
-- don’t list rows without a name value, listed in descending order
SELECT score, name FROM second_table WHERE name IS NOT NULL ORDER BY score DESC;
