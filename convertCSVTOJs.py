import csv
import re
import math

def clean_special_characters(text):
    return re.sub(r"[^a-zA-Z0-9]+", "", text)

def get_course_level(course_number):
    numeric_part = int(''.join(filter(str.isdigit, course_number)))
    level = math.floor(numeric_part / 100) * 100
    return level


def process_csv_file(input_file, subjects_data):
    with open(input_file, newline='', encoding='latin-1') as csvfile:
        data = csv.DictReader(csvfile)
        
        for row in data:
            total_grade = int(row['Grade Regs'])
            if total_grade == 0:
                continue

            coursedetail = row["SUBJECT NAME"]
            course_number = row['CRS NBR']
            course_title = row['CRS TITLE']
            professor_name = clean_special_characters(row['Primary Instructor']).strip()
            if not professor_name:
                continue
            professor_name2 = row['Primary Instructor']
            a_grade = int(row['A'].rstrip('%'))
            b_grade = int(row['B'].rstrip('%'))
            c_grade = int(row['C'].rstrip('%'))
            d_grade = int(row['D'].rstrip('%'))
            f_grade = int(row['F'].rstrip('%'))
            withdrew = int(row['W'])
            department_name = row['DEPT NAME']

            course_level = get_course_level(course_number)

            subject = subjects_data.setdefault(coursedetail, {
                'name': coursedetail,
                'id': coursedetail,
                'image': '',
                'classes': {}
            })

            course_id = f"{coursedetail}{course_number}"
            professor_id = professor_name.lower().replace(" ", "")

            department_courses = subject['classes']

            if not any(course['classNum'] == course_id for course in department_courses.values()):
                department_courses[course_id] = {
                    'name': course_title,
                    'classNum': course_id,
                    'level': course_level,
                    'professor': {},
                }

            course_professors = department_courses[course_id]['professor']

            if professor_id not in course_professors:
                course_professors[professor_id] = {
                    'professorName': professor_name2,
                    'professorPhoto': '',
                    'professorID': professor_id,
                    'TotalGrade': total_grade,
                    'AGrade': a_grade,
                    'BGrade': b_grade,
                    'CGrade': c_grade,
                    'DGrade': d_grade,
                    'FGrade': f_grade,
                    'WithDrew': withdrew,
                    'GPA':  round((((a_grade * 4) + (b_grade * 3) + (c_grade * 2) + (d_grade * 1) + (f_grade * 0)) / total_grade), 2),
                    'APercentage': round(a_grade / total_grade * 100),
                    'BPercentage': round(b_grade / total_grade * 100),
                    'CPercentage': round(c_grade / total_grade * 100),
                    'DPercentage': round(d_grade / total_grade * 100),
                    'FPercentage': round(f_grade / total_grade * 100),
                    'WPercentage': round(withdrew / total_grade * 100),
                }
            else:
                existing_professor = course_professors[professor_id]
                existing_professor['TotalGrade'] += total_grade
                
                existing_professor['AGrade'] += a_grade
                existing_professor['BGrade'] += b_grade
                existing_professor['CGrade'] += c_grade
                existing_professor['DGrade'] += d_grade
                existing_professor['FGrade'] += f_grade
                existing_professor['WithDrew'] += withdrew
                existing_professor['GPA'] =  round((((existing_professor['AGrade'] * 4) + (existing_professor['BGrade'] * 3) + (existing_professor['CGrade'] * 2) + (existing_professor['DGrade'] * 1) + (existing_professor['FGrade'] * 0)) / existing_professor['TotalGrade']), 2)
                existing_professor['APercentage'] = round(existing_professor['AGrade'] / existing_professor['TotalGrade'] * 100)
                existing_professor['BPercentage'] = round(existing_professor['BGrade'] / existing_professor['TotalGrade'] * 100)
                existing_professor['CPercentage'] = round(existing_professor['CGrade'] / existing_professor['TotalGrade'] * 100)
                existing_professor['DPercentage'] = round(existing_professor['DGrade'] / existing_professor['TotalGrade'] * 100)
                existing_professor['FPercentage'] = round(existing_professor['FGrade'] / existing_professor['TotalGrade'] * 100)
                existing_professor['WithDrew'] = round(existing_professor['WithDrew'] / existing_professor['TotalGrade'] * 100)

def convert_csv_to_txt(input_files, output_file):
    subjects_data = {}  

    for input_file in input_files:
        process_csv_file(input_file, subjects_data)

    with open(output_file, 'w') as txtfile:
        txtfile.write("export const coursesData = [\n")
        for subject in subjects_data.values():
            txtfile.write("  {\n")
            txtfile.write(f"    name: \"{subject['name']}\",\n")
            txtfile.write(f"    id: \"{subject['id']}\",\n")
            txtfile.write(f"    image: \"{subject['image']}\",\n")
            txtfile.write("    classes: {\n")

            sorted_classes = sorted(subject['classes'].values(), key=lambda x: (x['level'], x['classNum']))  # Sort by level and CRS NBR
            
            for class_info in sorted_classes:
                txtfile.write(f"      {class_info['classNum']}: {{\n")
                txtfile.write(f"        name: \"{class_info['name']}\",\n")
                txtfile.write(f"        classNum: \"{class_info['classNum']}\",\n")
                txtfile.write(f"        level: \"{class_info['level']}\",\n")
                txtfile.write("        professor: {\n")
                for prof_id, prof_info in class_info['professor'].items():
                    txtfile.write(f"          {prof_id}: {{\n")
                    txtfile.write(f"            professorName: \"{prof_info['professorName']}\",\n")
                    txtfile.write(f"            professorPhoto: \"{prof_info['professorPhoto']}\",\n")
                    txtfile.write(f"            professorID: \"{prof_info['professorID']}\",\n")
                    txtfile.write(f"            TotalGrade: \"{prof_info['TotalGrade']}\",\n")
                    txtfile.write(f"            AGrade: \"{prof_info['AGrade']}\",\n")
                    txtfile.write(f"            BGrade: \"{prof_info['BGrade']}\",\n")
                    txtfile.write(f"            CGrade: \"{prof_info['CGrade']}\",\n")
                    txtfile.write(f"            DGrade: \"{prof_info['DGrade']}\",\n")
                    txtfile.write(f"            FGrade: \"{prof_info['FGrade']}\",\n")
                    txtfile.write(f"            WithDrew: \"{prof_info['WithDrew']}\",\n")
                    txtfile.write(f"            GPA: \"{prof_info['GPA']}\",\n")
                    txtfile.write(f"            APercentage: \"{prof_info['APercentage']}%\",\n")
                    txtfile.write(f"            BPercentage: \"{prof_info['BPercentage']}%\",\n")
                    txtfile.write(f"            CPercentage: \"{prof_info['CPercentage']}%\",\n")
                    txtfile.write(f"            DPercentage: \"{prof_info['DPercentage']}%\",\n")
                    txtfile.write(f"            FPercentage: \"{prof_info['FPercentage']}%\",\n")
                    txtfile.write(f"            WPercentage: \"{prof_info['WPercentage']}%\",\n")
                    txtfile.write("          },\n")
                txtfile.write("        }\n")
                txtfile.write("      },\n")
            txtfile.write("    }\n")
            txtfile.write("  },\n")
        txtfile.write("]\n")

# Usage:
input_files = ['spring2023.csv', 'fall2022.csv', 'spring2022.csv', 'fall2021.csv', 'spring2021.csv', 'fall2020.csv', 'spring2020.csv', 'fall2019.csv','spring2019.csv', 'fall2018.csv', 'spring2018.csv', 'fall2017.csv', 'spring2017.csv', 'fall2016.csv', 'spring2016.csv', 'fall2015.csv']  
convert_csv_to_txt(input_files, 'output.txt')
