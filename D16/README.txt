== JSON Storage Endpoint ==

📌 Endpoint URL:
    http://your-domain.com/path/to/store_json.php

📝 Description:
    This endpoint accepts POST requests with 'application/json' content.
    Each request body is saved as a text file in the "requests" folder.

🗂️ Stored File Format:
    Each file is named using the current time in the format:
        HH-MM-SSrequest.txt

    Example:
        14-25-09request.txt

📂 Storage Location:
    ./requests/   (relative to the script)

📥 How to Use:
    POST to the endpoint with Content-Type: application/json.
    Example using curl:

    curl -X POST http://your-domain.com/path/to/store_json.php \
         -H "Content-Type: application/json" \
         -d '{"name": "Alice", "age": 30}'