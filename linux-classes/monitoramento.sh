#!/bin/bash

LOG_DIR="../../myapp/logs"

echo "verificando $LOG_DIR"

find $LOG_DIR -name "*.log" -print0 | while IFS= read -r -d '' file; do
        grep "ERROR" $file > "../logs/${file}.filtrado"
        grep "SENSITIVE_DATA" $file >> "../logs/${file}.filtrado"

        sed -i 's/User password is .*/User password is REDACTED/g' "${file}.filtrado"
        sed -i 's/User password reset request with token .*/User password reset request with token REDACTED/g' "${file}.filtrado"
        sed -i 's/API key leaked: .*/API key leaked: REDACTED/g' "${file}.filtrado"
        sed -i 's/User credit card last four digits: .*/User credit card last four digits: REDACTED/g' "${file}.filtrado"
        sed -i 's/User session initiated with token: .*/User session initiated with token: REDACTED/g' "${file}.filtrado"


        sort "${file}.filtrado" -o "${file}.filtrado"
        uniq "${file}.filtrado" > "${file}.clean"    
done