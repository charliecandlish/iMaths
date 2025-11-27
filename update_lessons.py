import os
import re

LESSONS_DIR = '/Users/charliecandlish/Desktop/iMaths/lessons'

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Update Viewport
    viewport_regex = r'<meta name="viewport" content="[^"]+">'
    new_viewport = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">'
    if '<meta name="viewport"' in content:
        content = re.sub(viewport_regex, new_viewport, content)
    else:
        # Insert after <head>
        content = content.replace('<head>', f'<head>\n    {new_viewport}')

    # 2. Remove existing horizontal progress bar container
    # Matches <div id="progress-bar-container">...</div> including nested content
    # This is tricky with regex, but usually it's a specific block.
    # Let's try to match the specific structure seen in BIDMASBoss.html
    if 'id="progress-bar-container"' in content:
        # Simple removal of the block if it's standard
        # We'll look for the start and try to find the closing div
        start_marker = '<div id="progress-bar-container">'
        start_idx = content.find(start_marker)
        if start_idx != -1:
            # Find the matching closing div is hard without a parser.
            # But we can assume it ends after "progress-bar-bg" div closes.
            # Let's just comment it out or hide it via CSS if we can't safely remove.
            # actually, let's just replace the whole known block if it matches the standard one.
            pass # Skip complex removal for now, maybe just hide it with CSS? 
                 # Or better, just add a style to hide it.
    
    # Actually, let's just add a style to hide the old progress bar to be safe
    if 'id="progress-bar-container"' in content and '#progress-bar-container { display: none !important; }' not in content:
        content = content.replace('</head>', '<style>#progress-bar-container { display: none !important; }</style>\n</head>')

    # 3. Inject Progress Update
    # Look for renderStep() {
    if 'function renderStep() {' in content:
        replacement = 'function renderStep() {\n            if (window.updateLessonProgress) window.updateLessonProgress(STATE.step, STEPS.length);'
        content = content.replace('function renderStep() {', replacement)
    elif 'function loadQuestion() {' in content:
        # Some quizzes might use loadQuestion
        # We need to know what the total is. Usually QUESTIONS.length
        if 'QUESTIONS.length' in content:
            replacement = 'function loadQuestion() {\n            if (window.updateLessonProgress) window.updateLessonProgress(currentQuestionIndex, QUESTIONS.length);'
            content = content.replace('function loadQuestion() {', replacement)
        elif 'questions.length' in content:
             replacement = 'function loadQuestion() {\n            if (window.updateLessonProgress) window.updateLessonProgress(currentQuestion, questions.length);'
             content = content.replace('function loadQuestion() {', replacement)
    elif 'function loadLevel(idx) {' in content:
        replacement = 'function loadLevel(idx) {\n            if (window.updateLessonProgress) window.updateLessonProgress(idx, STEPS.length);'
        content = content.replace('function loadLevel(idx) {', replacement)
    elif 'function renderLevel(idx) {' in content:
        replacement = 'function renderLevel(idx) {\n            if (window.updateLessonProgress) window.updateLessonProgress(idx, STEPS.length);'
        content = content.replace('function renderLevel(idx) {', replacement)
    elif 'function loadStep(idx) {' in content:
        replacement = 'function loadStep(idx) {\n            if (window.updateLessonProgress) window.updateLessonProgress(idx, STEPS.length);'
        content = content.replace('function loadStep(idx) {', replacement)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {os.path.basename(filepath)}")
    else:
        print(f"No changes for {os.path.basename(filepath)}")

def main():
    for filename in os.listdir(LESSONS_DIR):
        if filename.endswith('.html'):
            update_file(os.path.join(LESSONS_DIR, filename))

if __name__ == '__main__':
    main()
