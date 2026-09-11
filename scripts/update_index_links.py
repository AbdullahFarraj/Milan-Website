import os

directory = r"b:\milan website"
html_files = [f for f in os.listdir(directory) if f.endswith('.html')]

for file_name in html_files:
    file_path = os.path.join(directory, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content.replace('href="index.html"', 'href="/"')

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated links in {file_name}")

print("Done")
