HTTP and HTTPS Requests
	•	-X <METHOD>: Specifies the HTTP method (GET, POST, PUT, DELETE, etc.). Example: curl -X POST https://api.example.com.
	•	-d <data> or --data: Sends data in a POST request. Example: curl -d "param1=value1&param2=value2" https://api.example.com.
	•	-G or --get: Converts data provided with --data into query parameters for a GET request.

HTTP Headers
	•	-H <header>: Adds custom headers. Example: curl -H "Authorization: Bearer token" https://api.example.com.
	•	-I or --head: Retrieves only the response headers. Example: curl -I https://www.example.com.

Authentication
	•	-u <username:password>: Provides credentials for basic authentication. Example: curl -u user:password https://api.example.com.
	•	--oauth2-bearer <token>: Uses a token for OAuth2 authentication.

File Download
	•	-O: Saves the file with its original name. Example: curl -O https://example.com/file.zip.
	•	-o <filename>: Saves the file with a custom name. Example: curl -o my-file.zip https://example.com/file.zip.
	•	-C -: Resumes interrupted downloads. Example: curl -C - -O https://example.com/file.zip.

Response Display
	•	-v or --verbose: Displays detailed information about the connection and response.
	•	-s or --silent: Runs without showing progress or errors.
	•	-w <format> or --write-out: Displays formatted response information, such as time or HTTP code. Example: curl -w "HTTP Code: %{http_code}\n" https://www.example.com.

Handling Redirects
	•	-L or --location: Automatically follows redirects. Example: curl -L https://example.com/redirect.

File Upload and Transfer
	•	-F <field=value> or --form: Uploads files or data using multipart/form-data. Example: curl -F "file=@file.txt" https://api.example.com/upload.

Security
	•	-k or --insecure: Ignores SSL certificate errors.
	•	--cert <file>: Uses a certificate for authentication.

Limits and Control
	•	--max-time <seconds>: Sets a maximum execution time. Example: curl --max-time 10 https://www.example.com.
	•	--retry <num>: Retries the request in case of failure. Example: curl --retry 3 https://www.example.com.

Proxies
	•	-x <proxy> or --proxy: Sets a proxy. Example: curl -x http://proxy.example.com:8080 https://www.example.com.