@echo off
set var=
setlocal enabledelayedexpansion
for /f "tokens=1,2 delims==" %%a in (config.ini) do set var=!var! --scale %%a=%%b
set var=docker-compose up -d !var:~1!
echo iniciando docker com comando !var!
call !var!
endlocal