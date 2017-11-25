# Novy 433Mhz cooker hood remote webservice

> A node webservice that exposes GET routes which match the commands of the Novy cooker hood remote on channel 1 (=default channel).


## Dependencies
  - WiringPi : https://projects.drogon.net/raspberry-pi/wiringpi/


## Connecting the 433Mhz transmitter
![Transmitter pins](https://raw.githubusercontent.com/martijndierckx/novy-433/master/transmitter-pins.jpg)
> See http://wiringpi.com/pins/ for the correct WiringPi pin number. Pin 15 (BCM 14) is the default transmitter pin.
> The transmitter may be powered by 5V, but if you also want to connect a receiver, make sure you connect it to a 3.3V power source.


## Installation

```sh
$ git clone https://github.com/martijndierckx/novy-433.git
$ cd novy-433
$ cp config_sample.json config.json
$ npm install -d
$ node app
```


## Configuration
> After copying the ***config_sample.json*** file to ***config.json***, you can adjust that file to match your GPIO pin and HTTP port. The other settings should, normally, not be altered.



## Based on / With the help of

  - **rpi-433**: https://github.com/eroak/rpi-43
  This library allowed me to quickly test the setup before cleaning up everything
  - **pigpio**: http://abyz.me.uk/rpi/pigpio
  This tool allowed me to analyse the signal received from the original Novy remote and to see if my mimicked signal matched the original one. (I had to run the service on my raspberry pi and the visualizer on a separate machine, since the rpi was not powerful enough to do both)
  - **433Utils**: https://github.com/ninjablocks/433Utils
  The underlying C code that talks to WiringPi to get the signal out. I had to modify/simplify it to have it take binary signals