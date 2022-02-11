# StrongWises web
雄材大智材料科技股份有限公司

## Install
  1. Install docker desktop : https://www.docker.com/products/docker-desktop
  2. Install make : http://gnuwin32.sourceforge.net/packages/make.htm
  3. Install cmder : https://cmder.net/
  4. Turn on windows Hyper-V in programs and feature
  5. Install this https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
  6. Open Cmd, and run this command
    <br>``dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart``
    <br>``dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart``
  7. Reboot
  8. Set make environment 
  
  
## Build
  1. Open cmder and cd to your dir
  2. make init
  3. make

  
## Make command
  - make init : Init project
  - make (or make start) : Build project
  - make logs : logs container
  - make stop : Stop container
  - make clean : Stop and remove container
  - make re : Run clean and start
  
## Document
  - https://fontawesome.com/ Font Awesome Icons
