import os
from PIL import Image

def convert_to_webp(directory):
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist.")
        return

    print(f"Optimizing images in: {directory}")
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            file_path = os.path.join(directory, filename)
            
            # Skip if it is already a webp or favicon
            if filename.lower() == 'favicon.png':
                continue

            base_name = os.path.splitext(filename)[0]
            output_path = os.path.join(directory, base_name + '.webp')

            print(f"Converting {filename} to WebP...")
            try:
                with Image.open(file_path) as img:
                    # Convert transparent images properly
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        # Keep alpha channel for WebP
                        img.save(output_path, 'WEBP', quality=80, method=6)
                    else:
                        # Convert to RGB and save
                        img.convert('RGB').save(output_path, 'WEBP', quality=80, method=6)
                
                # Delete original file
                os.remove(file_path)
                print(f"✓ Saved {output_path} and deleted original.")
            except Exception as e:
                print(f"✗ Error processing {filename}: {e}")

if __name__ == "__main__":
    # Optimize banner images
    banner_dir = os.path.join('public', 'banner images')
    convert_to_webp(banner_dir)

    # Optimize portfolio covers
    portfolio_dir = os.path.join('public', 'portfolio-covers')
    convert_to_webp(portfolio_dir)
    
    print("\nOptimization completed! All images have been converted to WebP.")
