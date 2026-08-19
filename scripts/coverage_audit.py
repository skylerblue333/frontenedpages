from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
index = (root / "docs/VISUAL_CHECKPOINT_INDEX.md").read_text(errors="ignore")
indexed = {
    line.split("|", 2)[1].strip()
    for line in index.splitlines()
    if line.startswith("|") and "Screen |" not in line and "---" not in line
}
components = sorted(
    p.stem for p in (root / "client/src/pages").glob("*.tsx")
    if p.stem not in {"NotFound", "Home"}
)
missing = [name for name in components if name not in indexed]
print(f"page_components={len(components)}")
print(f"indexed_components={len(indexed)}")
print(f"missing_components={len(missing)}")
print("\n".join(missing[:100]))

app = (root / "client/src/App.tsx").read_text(errors="ignore")
route_literals = sorted(set(re.findall(r'path:\s*["\']([^"\']+)["\']', app)))
print(f"route_literals_in_App={len(route_literals)}")
print("\n".join(route_literals[-30:]))
