#[Step Install]
#Step 1 for (ubuntu) please update first

apt update && apt upgrade -y && reboot

#Step 2 for (ubuntu) directly install

sysctl -w net.ipv6.conf.all.disable_ipv6=1 && sysctl -w net.ipv6.conf.default.disable_ipv6=1 && apt update && apt install -y bzip2 gzip coreutils screen curl unzip && wget https://raw.githubusercontent.com/HumamArran/ScriptVps/main/setup.sh && chmod +x setup.sh && sed -i -e 's/\r$//' setup.sh && screen -S setup ./setup.sh

#For please contact me via Telegram at @abuissac95
❤️ Support Me

You can support me by sending a donation via PayPal:

👉 [Send support via PayPal] ( homamarran1996@gmail.com )
