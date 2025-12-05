import sys
import subprocess
from pathlib import Path

if len(sys.argv) != 3:
    print("Uso: python code.py file_link download_path")
    sys.exit(1)

file_name = sys.argv[1]
download_path = sys.argv[2]

# Creiamo la cartella di destinazione se non esiste
Path(download_path).mkdir(parents=True, exist_ok=True)

with open(file_name, "r") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        shortcode = line.rstrip("/").split("/")[-1]
        subprocess.run([
            "instaloader",
            "--dirname-pattern", download_path,
            "--",
            f"-{shortcode}"
        ])
