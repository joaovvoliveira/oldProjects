sudo -i => (acess with root)

top => (bring a list with all the running processs )

Collums:
pid => (process ID)

VIRT - RES - SHR => Related to Memory

virt => Virtual Memory
res => Resident Memory
shr => Shared Memory

S => state of each process
s => sleeping / r => running / t => stopped

ps => bring running process
ps aux => brings them all

Collums:
vsz => Virtual Memory 
rss => Allocated Memory
tty => using terminal / "?" means is a process from the system
stat => statuss
command => where is the process

commandLine:
ps "-u root" => brings all process from the user ROOT 

ps "-C bash" => brings info from the process BASH

ps aux "--sort=-%mem" => sort the process based on Memory
ps aux "--sort=-%mem | HEAD -n 11" => first 10 process
ps aux "--sort pid | head -n 11" => sort by PID
kill -9 pid_number => kill process by PID

creatingUserGroups:

sudo adduser user_name

cat /etc/passwd => show up all users

sudo groupadd group_name

sudo usermod -aG group_name user_name => Add user to the group

getent group devs => show groups and users












