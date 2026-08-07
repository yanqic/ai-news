import re

path = "/Users/yanqi/.hermes/cache/web/github.com-e085860dac.md"
with open(path) as f:
    text = f.read()

# header regex (verified 2026-07-28 fixed)
header_re = re.compile(
    r"^##\s+\[(?P<owner>[^\]]+?)\s*/\\\s+\\\s+\s*(?P<name>[^\]]+?)\]\((?P<url>https://github\.com/[^)]+)\)",
    re.M,
)

matches = list(header_re.finditer(text))
print(f"Found {len(matches)} repo headings\n")

results = []
for i, m in enumerate(matches):
    owner = m.group("owner").strip()
    name = m.group("name").strip()
    url = m.group("url").strip()
    start = m.end()
    end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
    block = text[start:end]

    desc_lines = []
    for line in block.splitlines():
        s = line.strip()
        if not s:
            if desc_lines:
                break
            continue
        desc_lines.append(s)
        if len(desc_lines) >= 3:
            break
    description = " ".join(desc_lines[:2])

    star_match = re.search(r"([\d,]+)\s+stars today", block)
    stars_today = star_match.group(1) if star_match else "?"

    total_match = re.search(r"\[([\d,]+)\]\(https://github\.com/[^)]+/stargazers\)", block)
    total_stars = total_match.group(1) if total_match else "?"

    lang_match = re.search(
        r"\n([A-Za-z+#\.\- ]{2,30})\[([\d,]+)\]\(https://github\.com/[^)]+/stargazers\)",
        block,
    )
    language = lang_match.group(1).strip() if lang_match else ""

    results.append({
        "owner": owner,
        "name": name,
        "url": url,
        "description": description,
        "language": language,
        "total_stars": total_stars,
        "stars_today": stars_today,
    })

def parse_stars(s):
    try:
        return int(s.replace(",", ""))
    except ValueError:
        return 0

filtered = [r for r in results if parse_stars(r["stars_today"]) >= 30]
filtered.sort(key=lambda r: parse_stars(r["stars_today"]), reverse=True)

print("=== Top repos (stars_today >= 30, sorted desc) ===")
for r in filtered:
    print(
        f"{r['owner']}/{r['name']} | {r['language']} | {r['total_stars']} total | +{r['stars_today']}/day"
    )
    print(f"  {r['description'][:160]}")
    print()

print(f"\nTotal filtered: {len(filtered)} (raw: {len(results)})")