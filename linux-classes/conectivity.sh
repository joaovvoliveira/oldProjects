#!/bin/bash

LOG_DIR="systems"
WEBSITE="https://www.alura.com.br/"

status=$(curl -s --head https://www.alura.com.br/ | grep "HTTP/2 200")

mkdir -p $LOG_DIR

function try_logs() {
        grep -E "fail(ed)?|error|denied|unauthorized" /var/log/syslog | awk '{print $1,$2,$3,$5,$6,$7}' > $LOG_DIR/log_syslog.txt
        grep -E "fail(ed)?|error|denied|unauthorized" /var/log/auth.log | awk '{print $1,$2,$3,$5,$6,$7}' > $LOG_DIR/log_authlog.txt
}

function try_connection() {
        if ping -c 1 8.8.8.8 > /dev/null; then
                echo "$(date +%F): Conectividade OK." >> $LOG_DIR/log_rede.txt
        else
                echo "$(date +%F): Conectividade DOWN." >> $LOG_DIR/log_rede.txt
        fi

        if curl -s --head $WEBSITE | grep "HTTP/2 200" > /dev/null; then
                echo "$(date): Conectividade $status" >> $LOG_DIR/log_rede.txt
        else
                echo "$(date): Conectividade falhou com a Alura." >> $LOG_DIR/log_rede.txt
        fi
}

function monitor_memory(){
        echo "$(date)" >> $LOG_DIR/log_rede.txt
        df -h | grep -v "snapfuse" | awk '$5+0 > 15 {print $1 " esta com " $5 " de uso."}' >> $LOG_DIR/log_rede.txt
        echo "uso do main dir: " >> $LOG_DIR/log_rede.txt
        du -sh /home/ubuntu | awk '{print $1}' >> $LOG_DIR/log_rede.txt

}

function monitor_hardware(){
        echo "$(date)" >> $LOG_DIR/log_hardware.txt
        free -h | grep Mem | awk '{print "Total: "$2,"Usada: " $3, "Livre: " $4}' >> $LOG_DIR/log_hardware.txt
}

function monitor_logs_connection(){
        try_logs
        try_connection
        monitor_memory
        monitor_hardware
}

monitor_logs_connection