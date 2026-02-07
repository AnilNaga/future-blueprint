from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

source_path = r"d:\Anil\BIM\future-blueprint\src\assets\logo.jpg"
target_path = r"d:\Anil\BIM\future-blueprint\src\assets\logo_cropped.jpg"

img = Image.open(source_path)
cropped_img = trim(img)
# Save as high quality PNG to avoid compression artifacts, then maybe JPG if needed
cropped_img.save(target_path, quality=100)
print(f"Saved cropped image to {target_path}")
