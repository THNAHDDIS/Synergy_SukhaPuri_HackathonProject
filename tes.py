#def find_word_in_content(word_to_find, content):

 #if word_to_find in content:
  #  return word_to_find
 #else:
  #   return ""
    



from pdf2image import convert_from_path
import pytesseract

# Convert PDF to images
pages = convert_from_path('ID Concept For Tender - Apartment Corridors [T02].pdf', 300)
output_file = 'ID Concept For Tender - Apartment Corridors [T02].pdf'
# Extract text from each page
text = ""
for i, page in enumerate(pages):
    text += pytesseract.image_to_string(page)

# Save extracted text to a file
with open("text3.txt", "w", encoding='utf-8') as f:
    f.write(text)

# Open the text file
with open("text3.txt", "r", encoding="utf-8") as f:
    # Read the contents of the file
    content = f.read()

    # Specify the word you want to find

import os
#result = find_word_in_content("11597", content)



import openai
import PyPDF2

# Set your OpenAI API key
openai.api_key = "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"


# Define the prompt
prompt = f"""Given a text paragraph containing information about a document titled '{output_file}', please identify and label the document's name and its category. The text of the document is: {content}. For instance, if the paragraph mentions 'Acoustic Report,' 'Internal Finishes Specification,' 'Hardware Schedule,' or 'Scope of Works,' extract and label 'Acoustic' as the document name and 'Report' as its category. Similarly, for other documents like 'Internal Finishes Specification,' 'Hardware Schedule,' 'Scope of Works,' or 'Contract,' identify and label the document name and category accordingly."""




# Call OpenAI API
response = openai.ChatCompletion.create(
    model='gpt-3.5-turbo',
    messages=[{"role": "user", "content": prompt}],
)

print(response["choices"][0]["message"]["content"])


response_text = response["choices"][0]["message"]["content"]
split_text = response_text.split(": ")



# ... (previous code)

response_text = response["choices"][0]["message"]["content"]
split_text = response_text.split(": ")

if len(split_text) >= 3:  # Ensure at least 3 elements for document name and category
    document_name = split_text[1].strip().replace("\n", "-")  # Replace newline with hyphen
    category = split_text[2].strip().replace("_", "-")  # Replace underscores with hyphens
    new_file_name = f"{document_name}-{category}.pdf"


    try:
        os.rename(output_file, new_file_name)
        print(f"The file name has been changed to '{new_file_name}'.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
else:
    print("Error: Insufficient information in response to extract document name and category.")



