import pymupdf
import json
from pathlib import Path
import pandas as pd

doc = pymupdf.open("alunos.pdf")
ordered_info = {"data": []}

for i in range(doc.page_count):
    page = doc[i]
    image_list = page.get_images()
    raw_info = (page.get_text().split("\n"))
    for i, name in enumerate(raw_info[2:]):
        if name != "":
            ordered_info["data"].append(
                {"turma": raw_info[0], "name": name.title(), "img_name": f"imgs/{name.title()}.png"})
            if image_list:
                xref = image_list[i][0]
                pix = pymupdf.Pixmap(doc, xref)

                # pix.save(f"imgs/{name.title()}.png")

with open("data.json", "w", encoding="utf-8") as new_data:
    new_data.write(json.dumps(ordered_info, indent=4, ensure_ascii=False))
