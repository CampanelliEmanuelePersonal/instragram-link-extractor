import sys
import subprocess

if len(sys.argv) != 2:
    print("Uso: python script.py file.txt")
    sys.exit(1)

file_name = sys.argv[1]

with open(file_name, "r") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        shortcode = line.rstrip("/").split("/")[-1]
        subprocess.run(["instaloader", "--", f"-{shortcode}"])
