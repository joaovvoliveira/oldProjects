#!/bin/bash

LOG_DIR="../../myapp/logs"
FILE_DIR="../../myapp/logs-processados"
TEMP_DIR="../../myapp/logs-temp"

mkdir -p $FILE_DIR
mkdir -p $TEMP_DIR


find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' file; do
        grep "ERROR" $file > "../logs/${file}.filtrado"
        grep "SENSITIVE_DATA" $file >> "../logs/${file}.filtrado"

        sed -i 's/User password is .*/User password is REDACTED/g' "${file}.filtrado"
        sed -i 's/User password reset request with token .*/User password reset request with token REDACTED/g' "${file}.filtrado"
        sed -i 's/API key leaked: .*/API key leaked: REDACTED/g' "${file}.filtrado"


        sort "${file}.filtrado" -o "${file}.filtrado"
        uniq "${file}.filtrado" > "${file}.clean"

        cat ${file}.clean >> "${FILE_DIR}/logs_$(date +%F).log"

        num_words=$(wc -w < "${file}.clean")
        num_lines=$(wc -l < "${file}.clean")

        file_name=$(basename "${file}.clean")

        echo "File: $file_name" >> "${FILE_DIR}/log_stats_$(date +%F).txt"
        echo "Lines: $num_lines" >> "${FILE_DIR}/log_stats_$(date +%F).txt"
        echo "Words: $num_words" >> "${FILE_DIR}/log_stats_$(date +%F).txt"

        echo "---------------------" >> "${FILE_DIR}/log_stats_$(date +%F).txt"


        if [[ "$file_name" == *frontend* ]];
        then
                sed 's/^/[FRONTEND] /' "${file}.clean" >> ${FILE_DIR}/logs_$(date +%F).log 
        elif [[ "$file_name" == *backend* ]];
        then
                sed 's/^/[BACKEND] /' "${file}.clean" >> ${FILE_DIR}/logs_$(date +%F).log
        else
                cat ${file}.clean >> "${FILE_DIR}/logs_$(date +%F).log"
        fi

done

sort -k2 "${FILE_DIR}/logs_$(date +%F).log" -o "${FILE_DIR}/logs_$(date +%F).log"


mv "${FILE_DIR}/logs_$(date +%F).log" "$TEMP_DIR/"
mv "${FILE_DIR}/log_stats_$(date +%F).txt" "$TEMP_DIR/"

tar -czf "${FILE_DIR}/logs_$(date +%F).tar.gz" -C "$TEMP_DIR" .

rm -r "$TEMP_DIR"