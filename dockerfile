FROM cypress/base

# # Set the working directory in the container
WORKDIR /app

COPY package*.json ./

RUN npm install

# # Copy the rest of the application code
COPY . .

# RUN npx cypress run
CMD ["npm", "test"]