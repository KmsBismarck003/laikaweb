import os
import re

def refactor_html():
    files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    header_pattern = re.compile(r'<header>.*?</header>', re.DOTALL)
    footer_pattern = re.compile(r'<footer>.*?</footer>', re.DOTALL)
    # the sidebar ends right before <main>
    sidebar_pattern = re.compile(r'<div class="sidebar">.*?</div>(?=\s*<main>)', re.DOTALL)
    head_end_pattern = re.compile(r'</head>', re.IGNORECASE)

    for f in files:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            
        if '<laika-header>' in content:
            continue
            
        # Add components.js and favicon to head
        head_injections = """
    <link rel="icon" type="image/x-icon" href="logos/icono.ico">
    <script src="js/components.js" defer></script>
</head>"""
        content = head_end_pattern.sub(head_injections, content)
        
        # Replace blocks
        content = header_pattern.sub('<laika-header></laika-header>', content)
        content = sidebar_pattern.sub('<laika-sidebar></laika-sidebar>', content)
        content = footer_pattern.sub('<laika-footer></laika-footer>', content)
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)

if __name__ == '__main__':
    refactor_html()
    print("Refactoring done.")
