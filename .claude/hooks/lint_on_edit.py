"""PostToolUse: eslint any edited src file — the repo has no CI, and main auto-deploys.

Exit 2 on lint failure so the error is surfaced back to Claude for an immediate fix.
"""
import json
import subprocess
import sys

APP_DIR = "C:/Files/Herbert AI/website/herbertai-website"


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        sys.exit(0)

    path = (data.get("tool_input") or {}).get("file_path", "") or ""
    norm = path.replace("\\", "/")
    if "herbertai-website/src/" not in norm or not norm.endswith((".js", ".jsx")):
        sys.exit(0)

    r = subprocess.run(f'npx eslint "{path}"', shell=True, cwd=APP_DIR, capture_output=True, text=True)
    if r.returncode != 0:
        print(f"eslint failed for {path}:\n{(r.stdout + r.stderr)[-2000:]}", file=sys.stderr)
        sys.exit(2)

    sys.exit(0)


if __name__ == "__main__":
    main()
