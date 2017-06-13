FROM node:7.5-alpine

# install python
RUN apk add --no-cache python && \
    python -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip install --upgrade pip setuptools && \
    pip install awscli --ignore-installed six && \
    rm -r /root/.cache

ADD dist/ /opt/app/dist/
ADD package.json /opt/app/

WORKDIR /opt/app

RUN npm install --production

EXPOSE 8080

COPY entrypoint.sh entrypoint.sh

RUN chmod +x entrypoint.sh

ENTRYPOINT /opt/app/entrypoint.sh



