from debian:buster

run apt  update && apt install -y curl bash 
run curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs

copy dockerconf/script.sh /

ENTRYPOINT ["bash", "script.sh"]
CMD [""]