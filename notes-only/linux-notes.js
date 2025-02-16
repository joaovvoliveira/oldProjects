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

searchingOnLinux:

find . -name "*.log" => bring all the files ending in .log

find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' arquivo; do
        echo "arquivo $arquivo"
done

IFS= => (Internal Field Separator) Defined as empty
read -r=> read for reading each file -r understand only letter 
-d '' delimiter null and -print0 => has to be use together
arquivo is the variable defined for each item

sed -i 's/User password is .*/User password is REDACTED/g' "${arquivo}.filtrado"
sed -i 's/API key leaked: .*/API key leaked: REDACTED/g' "${arquivo}.filtrado"

sed -i swap the first text for the second one in the file $arquivo.filtrado

-i swap for al

-r: sort in reverse (descending) order.
-n: use numeric sort instead of alphabetical sort, useful for sorting numbers.
-k: specify a column to sort by (e.g. -k 2 sort by the second column).
-u: remove duplicate lines from the output, leaving only one instance of each.
-t: set a field delimiter, useful for files with columns separated by commas or other characters (e.g. -t ,).
-o: save the sorted output to a specified file, useful for overwriting the original file without having to use redirection.
-f: treat uppercase and lowercase letters equally, useful when you need to ignore the distinction between them for a purely alphabetical sort.

REGEX:
ubuntu@planetary-nutcracker:~$ grep -E "fail(ed)?|error|denied|unauthorized" /var/log/syslog

()? makes it look even for fail or failed

awk '{print $1,$2,$3,$5,$6,$7}' => it brings Collums 1,2,3...