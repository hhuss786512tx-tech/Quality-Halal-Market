#!/usr/bin/env python3
"""
Generate professional product placeholder images for Quality Halal Market.
White background, clean typography, category-colored accents.
These are temporary placeholders until real product photography is available.
"""

import os
from PIL import Image, ImageDraw, ImageFont

SIZE = 1024
OUTPUT_DIR_SRC = os.path.expanduser("~/Developer/Quality-Halal-Market/src/assets")
OUTPUT_DIR_PUB = os.path.expanduser("~/Developer/Quality-Halal-Market/public/assets")

CATEGORY_COLORS = {
    "Beef": ("#8B1A1A", "#D32F2F"),      # Deep red
    "Goat & Lamb": ("#6A1B9A", "#9C27B0"), # Deep purple
    "Chicken": ("#E65100", "#FF9800"),      # Orange
}

# All products that need placeholder images
PRODUCTS = [
    ("beef_knuckle", "Beef Knuckle", "Joint Bone", "Beef"),
    ("beef_tongue", "Beef Tongue", "", "Beef"),
    ("goat_kidneys", "Goat / Lamb Kidneys", "", "Goat & Lamb"),
    ("goat_bones", "Frozen Goat Bones", "", "Goat & Lamb"),
    ("goat_paya_skin", "Goat Paya with Skin", "Trotters", "Goat & Lamb"),
    ("goat_tongue", "Goat / Lamb Tongue", "", "Goat & Lamb"),
    ("goat_stomach", "Goat / Lamb Stomach", "Tripe", "Goat & Lamb"),
    ("goat_head", "Goat / Lamb Head", "", "Goat & Lamb"),
    ("goat_burnt_paya", "Goat Burnt Paya", "Singed Trotters", "Goat & Lamb"),
    ("chicken_qeema", "Chicken Qeema", "Ground", "Chicken"),
    ("chicken_gizzard", "Chicken Gizzard", "", "Chicken"),
    ("chicken_liver", "Chicken Liver", "", "Chicken"),
    ("frozen_duck", "Frozen Duck", "Whole", "Chicken"),
]

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def get_font_path():
    # macOS system fonts
    candidates = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Supplemental/Georgia.ttf",
        "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/SFNSDisplay.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            # Helvetica.ttc is a collection - PIL handles this
            return path
    return None

def render_product(filename, name, subtitle, category):
    img = Image.new("RGB", (SIZE, SIZE), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    font_path = get_font_path()

    primary, accent = CATEGORY_COLORS[category]
    primary_rgb = hex_to_rgb(primary)
    accent_rgb = hex_to_rgb(accent)

    # Subtle top accent bar
    bar_height = 8
    draw.rectangle([(0, 0), (SIZE, bar_height)], fill=accent_rgb)

    # Category tag pill (top-left)
    tag_text = category.upper()
    tag_padding_x = 40
    tag_padding_y = 24
    tag_font_size = 36
    try:
        tag_font = ImageFont.truetype(font_path, tag_font_size)
    except:
        tag_font = ImageFont.load_default()

    tag_bbox = draw.textbbox((0, 0), tag_text, font=tag_font)
    tag_w = tag_bbox[2] - tag_bbox[0]
    tag_h = tag_bbox[3] - tag_bbox[1]
    tag_x = 60
    tag_y = 60
    # Pill background
    draw.rounded_rectangle(
        [(tag_x - tag_padding_x, tag_y - tag_padding_y),
         (tag_x + tag_w + tag_padding_x, tag_y + tag_h + tag_padding_y)],
        radius=24,
        fill=primary_rgb
    )
    draw.text((tag_x, tag_y), tag_text, fill=(255, 255, 255), font=tag_font)

    # Large category icon circle (subtle decorative element)
    circle_radius = 160
    circle_center = (SIZE // 2, SIZE // 2 - 20)
    circle_color = (*primary_rgb, 18)  # Very subtle
    # Draw a subtle circle outline
    for r in range(circle_radius - 2, circle_radius + 3):
        draw.ellipse(
            [(circle_center[0] - r, circle_center[1] - r),
             (circle_center[0] + r, circle_center[1] + r)],
            outline=(*primary_rgb, 40),
            width=1
        )

    # Unicode icons for each category
    icons = {
        "Beef": "🥩",
        "Goat & Lamb": "🐑",
        "Chicken": "🍗",
    }
    icon_text = icons.get(category, "🍖")
    icon_font_size = 120
    try:
        # Try to use a font that supports emoji
        emoji_font = ImageFont.truetype("/System/Library/Fonts/Apple Color Emoji.ttc", icon_font_size)
    except:
        emoji_font = None

    if emoji_font:
        icon_bbox = draw.textbbox((0, 0), icon_text, font=emoji_font)
        icon_w = icon_bbox[2] - icon_bbox[0]
        icon_h = icon_bbox[3] - icon_bbox[1]
        draw.text(
            (SIZE // 2 - icon_w // 2, SIZE // 2 - 120),
            icon_text,
            font=emoji_font,
            embedded_color=True
        )
    else:
        # Fallback: simple letter icon
        letter = category[0].upper()
        try:
            letter_font = ImageFont.truetype(font_path, 200)
        except:
            letter_font = ImageFont.load_default()
        letter_bbox = draw.textbbox((0, 0), letter, font=letter_font)
        letter_w = letter_bbox[2] - letter_bbox[0]
        draw.text(
            (SIZE // 2 - letter_w // 2, SIZE // 2 - 170),
            letter,
            fill=primary_rgb,
            font=letter_font
        )

    # Product name (large, centered)
    name_font_size = 52
    try:
        name_font = ImageFont.truetype(font_path, name_font_size)
    except:
        name_font = ImageFont.load_default()

    name_bbox = draw.textbbox((0, 0), name, font=name_font)
    name_w = name_bbox[2] - name_bbox[0]
    draw.text(
        (SIZE // 2 - name_w // 2, SIZE // 2 + 60),
        name,
        fill=hex_to_rgb("#1A1A1A"),
        font=name_font
    )

    # Subtitle (below name)
    if subtitle:
        sub_font_size = 32
        try:
            sub_font = ImageFont.truetype(font_path, sub_font_size)
        except:
            sub_font = ImageFont.load_default()
        sub_bbox = draw.textbbox((0, 0), subtitle, font=sub_font)
        sub_w = sub_bbox[2] - sub_bbox[0]
        draw.text(
            (SIZE // 2 - sub_w // 2, SIZE // 2 + 130),
            subtitle,
            fill=hex_to_rgb("#666666"),
            font=sub_font
        )

    # Product photo unavailable notice (small, bottom)
    notice_text = "Product photo coming soon"
    notice_font_size = 24
    try:
        notice_font = ImageFont.truetype(font_path, notice_font_size)
    except:
        notice_font = ImageFont.load_default()
    notice_bbox = draw.textbbox((0, 0), notice_text, font=notice_font)
    notice_w = notice_bbox[2] - notice_bbox[0]
    draw.text(
        (SIZE // 2 - notice_w // 2, SIZE - 100),
        notice_text,
        fill=hex_to_rgb("#AAAAAA"),
        font=notice_font
    )

    # Bottom accent line
    draw.rectangle([(0, SIZE - 6), (SIZE, SIZE)], fill=accent_rgb)

    # Save to both locations
    os.makedirs(OUTPUT_DIR_SRC, exist_ok=True)
    os.makedirs(OUTPUT_DIR_PUB, exist_ok=True)

    img.save(os.path.join(OUTPUT_DIR_SRC, f"{filename}.webp"), "WEBP", quality=85)
    img.save(os.path.join(OUTPUT_DIR_PUB, f"{filename}.webp"), "WEBP", quality=85)

    size_kb = os.path.getsize(os.path.join(OUTPUT_DIR_SRC, f"{filename}.webp")) / 1024
    print(f"  ✓ {filename}.webp ({size_kb:.1f} KB)")

def main():
    print(f"Generating {len(PRODUCTS)} product placeholder images...\n")
    for filename, name, subtitle, category in PRODUCTS:
        render_product(filename, name, subtitle, category)
    print(f"\nDone! All images saved to:")
    print(f"  src/assets/")
    print(f"  public/assets/")

if __name__ == "__main__":
    main()
