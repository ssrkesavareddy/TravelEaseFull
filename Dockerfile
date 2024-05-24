# Use the latest version of the Nginx image
FROM nginx:latest

# Copy the contents of the TravelEase repository into the /usr/share/nginx/html directory
COPY . /usr/share/nginx/html

