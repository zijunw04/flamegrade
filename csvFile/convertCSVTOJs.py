import csv
import re
import math

course_details = {
    "ACTG": "Accounting",
    "AH": "Art History",
    "AHS": "Applied Health Sciences",
    "ANAT": "Anatomy and Cell Biology",
    "ANTH": "Anthropology",
    "ARAB": "Arabic",
    "ARCH": "Architecture",
    "ART": "Art",
    "ASP": "Academic Skills Program",
    "BA": "Business Administration",
    "BCMG": "Biochemistry and Molecular Genetics",
    "BHIS": "Biomedical and Health Information Sciences",
    "BIOS": "Biological Sciences",
    "BLST": "Black Studies",
    "BME": "Biomedical Engineering",
    "BPS": "Biopharmaceutical Sciences",
    "BSTT": "Biostatistics",
    "BVIS": "Biomedical Visualization",
    "CD": "City Design",
    "CEES": "Central and Eastern European Studies",
    "CELE": "Clerkship Electives - Chicago",
    "CHE": "Chemical Engineering",
    "CHEM": "Chemistry",
    "CHIN": "Chinese",
    "CHSC": "Community Health Sciences",
    "CI": "Curriculum and Instruction",
    "CL": "Classics",
    "CLER": "Clerkship - Medicine",
    "CLJ": "Criminology, Law, and Justice",
    "CME": "Civil, Materials, and Environmental Engineering",
    "COMM": "Communication",
    "CS": "Computer Science",
    "CST": "Catholic Studies",
    "DAOB": "Dentistry - Applied Oral and Behavioral Sciences",
    "DBCS": "Dentistry - Biomedical and Clinical Sciences",
    "DCLE": "Dentistry - Community Learning Experience",
    "DES": "Design",
    "DHD": "Disability and Human Development",
    "DLG": "Dialogue",
    "DOSI": "Dentistry - Oral/Systemic Issues",
    "DOST": "Dentistry - Oral/Systemic Topics",
    "EAES": "Earth and Environmental Sciences",
    "ECE": "Electrical and Computer Engineering",
    "ECON": "Economics",
    "ED": "Education",
    "EDPS": "Educational Policy Studies",
    "ELSI": "English Language and Support for Internationals",
    "ENER": "Energy Engineering",
    "ENGL": "English",
    "ENGR": "Engineering",
    "ENTR": "Energy Engineering",
    "EOHS": "Environmental and Occupational Health Sciences",
    "EPID": "Epidemiology",
    "EPSY": "Educational Psychology",
    "FIN": "Finance",
    "FR": "French",
    "GAMD": "Guaranteed Admissions Medicine",
    "GC": "Graduate College",
    "GEMS": "Graduate Education in Medical Sciences",
    "GEOG": "Geography",
    "GER": "Germanic Studies",
    "GLAS": "Global Asian Studies",
    "GWS": "Gender and Women's Studies",
    "HIM": "Health Information Management",
    "HIST": "History",
    "HN": "Human Nutrition",
    "HON": "Honors College",
    "HPA": "Health Policy and Administration",
    "HUM": "Humanities",
    "IDEA": "Interdisciplinary Education in the Arts",
    "IDS": "Information and Decision Sciences",
    "IE": "Industrial Engineering",
    "INST": "International Studies",
    "IPHS": "Interdisciplinary Public Health Sciences",
    "ITAL": "Italian",
    "JD": "Juris Doctor",
    "JPN": "Japanese",
    "KN": "Kinesiology",
    "KOR": "Korean",
    "LAT": "Latin American and Latino Studies",
    "LAS": "Liberal Arts and Sciences",
    "LAT": "Latin",
    "LAW": "Law",
    "LCSL": "Literatures, Cultural Studies, and Linguistics",
    "LIB": "Library and Information Science",
    "LING": "Linguistics",
    "MATH": "Mathematics",
    "MBA": "Master of Business Administration",
    "MBT": "Medical Biotechnology",
    "MCS": "Mathematical Computer Science",
    "MDC": "Doctor of Medicine—Chicago",
    "MDP": "Doctor of Medicine—Peoria",
    "MDR": "Doctor of Medicine—Rockford",
    "ME": "Mechanical Engineering",
    "MENG": "Master of Engineering",
    "MGMT": "Management",
    "MHPE": "Medical Education",
    "MILS": "Military Science",
    "MIM": "Microbiology and Immunology",
    "MKTG": "Marketing",
    "MOVI": "Moving Image Arts",
    "MTHT": "Mathematics Teaching",
    "MUS": "Music",
    "MUSE": "Museum and Exhibition Studies",
    "NATS": "Natural Sciences",
    "NEUS": "Neuroscience",
    "NS": "Naval Science",
    "NUEL": "Nursing Elective",
    "NUPR": "Nursing Practicum",
    "NURS": "Nursing Core",
    "NUSP": "Nursing Specialty",
    "ORTD": "Orthodontics",
    "OSCI": "Oral Sciences",
    "OT": "Occupational Therapy",
    "PA": "Public Administration",
    "PCOL": "Pharmacology",
    "PELE": "Clerkship Electives - Peoria",
    "PERI": "Periodontics",
    "PHAR": "Pharmacy",
    "PHIL": "Philosophy",
    "PHYB": "Physiology and Biophysics",
    "PHYS": "Physics",
    "PMPR": "Pharmacy Practice",
    "POL": "Polish",
    "POLS": "Political Science",
    "PPOL": "Public Policy",
    "PROS": "Prosthodontics",
    "PSCH": "Psychology",
    "PSCI": "Pharmaceutical Sciences",
    "PSOP": "Pharmacy Systems, Outcomes, and Policy",
    "PT": "Physical Therapy",
    "PUBH": "Public Health",
    "RELE": "Clerkship Electives - Rockford",
    "RELS": "Religious Studies",
    "RES": "Real Estate Studies",
    "RUSS": "Russian",
    "SJ": "Social Justice",
    "SOC": "Sociology",
    "SOCW": "Social Work",
    "SPAN": "Spanish",
    "SPED": "Special Education",
    "STAT": "Statistics",
    "TADR": "Trial Advocacy and Dispute Resolution",
    "THTR": "Theatre",
    "UPA": "Urban and Public Affairs",
    "UPP": "Urban Planning and Policy",
    "US": "Urban",
    "GKM": "Greek, Modern",
    "ISA": "Interdisciplinary Studies in the Arts",
    "JST": "Jewish Studies",
    "LITH": "Lithuanian",
    "OMDS": "Oral Medicine and Diagnostic Sciences",
    "PTL": "Privacy and Technology Law",
    "BIOE": "Bioengineering",
    "EB": "Employee Benefits",
    "ENDO": "Endodontics",
    "IP": "Intellectual Property",
    "IT": "Information Technology",
    "PATH": "Pathology",
    "RE": "Real Estate",
    "PMMP": "Medicinal Chemistry and Pharmacognosy",
    "ARST": "Archaeology",
    "LRSC": "Learning Sciences",
    "HLP": "Healthy Living Practitioner",
    "MDCH": "Medicinal Chemistry",
    "NAST": "Native American Studies",
    "PORT": "Portuguese",
    "AAST": "African American Studies",
    "CC": "Campus Courses",
    "PMPG": "Pharmacognosy",
    "PRCL": "Preclinical Medicine",
    "BMS": "Basic Medical Sciences",
    "PSL": "Patient Safety Leadership",
    "SLAV": "Slavic and Baltic Languages and Literatures",
    "UELE": "Clerkship Electives-Urbana",
    "SPEC": "Specialty Medicine",
    "PEDD": "Pediatric Dentistry",
    "GCLS": "Graduate College - Life Sciences",
    "ASAM": "Asian American Studies",
    "ASST": "Asian Studies",
}


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
            total_grade = int(row['Grade Regs']) - int(row['W'])
            if total_grade == 0:
                continue

            coursedetail = row["SUBJECT NAME"]
            courseid = row["SUBJECT NAME"]
            if coursedetail in course_details:
                coursedetail = course_details[coursedetail]

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
            pass_grade = int(row['S'].rstrip('%'))
            fail_grade = int(row['U'].rstrip('%'))
            withdrew = int(row['W'])
            department_name = row['DEPT NAME']

            course_level = get_course_level(course_number)

            subject = subjects_data.setdefault(coursedetail, {
                'name': coursedetail,
                'id': courseid,
                'image': '',
                'classes': {}
            })

            course_id = f"{courseid}{course_number}"
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
                    'Satisfactory': pass_grade,
                    'Unsatisfactory': fail_grade,
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
                existing_professor['Satisfactory'] += pass_grade
                existing_professor['Unsatisfactory'] += fail_grade
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
                    txtfile.write(f"            professorID: \"{prof_info['professorID']}\",\n")
                    txtfile.write(f"            TotalGrade: \"{prof_info['TotalGrade']}\",\n")
                    txtfile.write(f"            AGrade: \"{prof_info['AGrade']}\",\n")
                    txtfile.write(f"            BGrade: \"{prof_info['BGrade']}\",\n")
                    txtfile.write(f"            CGrade: \"{prof_info['CGrade']}\",\n")
                    txtfile.write(f"            DGrade: \"{prof_info['DGrade']}\",\n")
                    txtfile.write(f"            FGrade: \"{prof_info['FGrade']}\",\n")
                    txtfile.write(f"            Pass: \"{prof_info['Satisfactory']}\",\n")
                    txtfile.write(f"            Fail: \"{prof_info['Unsatisfactory']}\",\n")
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
input_files = ['fall2023.csv','spring2023.csv', 'fall2022.csv', 'spring2022.csv', 'fall2021.csv', 'spring2021.csv', 'fall2020.csv', 'spring2020.csv', 'fall2019.csv','spring2019.csv', 'fall2018.csv', 'spring2018.csv', 'fall2017.csv', 'spring2017.csv', 'fall2016.csv', 'spring2016.csv', 'fall2015.csv']  
convert_csv_to_txt(input_files, 'output.txt')
