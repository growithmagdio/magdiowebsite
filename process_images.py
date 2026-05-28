import os
from rembg import remove
from PIL import Image

def process_images(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpeg', '.jpg')):
            input_path = os.path.join(directory, filename)
            # Create output PNG name
            base_name = os.path.splitext(filename)[0]
            output_path = os.path.join(directory, base_name + '.png')
            
            print(f"Processing: {filename}")
            try:
                # Open image
                input_img = Image.open(input_path)
                
                # Remove background
                output_img = remove(input_img)
                
                # Save as PNG
                output_img.save(output_path, "PNG")
                print(f"Saved: {output_path}")
                
                # Close files
                input_img.close()
                output_img.close()
                
                # Delete original JPEG
                os.remove(input_path)
                print(f"Deleted original: {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    banner_dir = os.path.join('public', 'banner images')
    process_images(banner_dir)
    print("Done processing all images!")
