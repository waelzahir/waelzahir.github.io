FROM node:lts

run mkdir /code
COPY package.json /code/package.json
COPY --chmod=777 package-lock.json /code/package-lock.json
workdir /code
run npm ci
run npm install -g @angular/cli
COPY . /code


CMD [ "npm", "run", "start" ]
