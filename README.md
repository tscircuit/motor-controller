# motor-controller

[![tscircuit version badge](https://registry-api.tscircuit.com/badges/view?package_name=tscircuit/motor-controller)](https://tscircuit.com/tscircuit/motor-controller)

This is a generic `<MotorController />` that contains a variety of chips and
configurations for common motor controllers.

> [!WARNING]
> This library is a work in progress, and is not yet ready for production use.

## Bill of Materials

| Part      | Quantity | MPN       | JLCPN                                                                    | Description |
| --------- | -------- | --------- | ------------------------------------------------------------------------ | ----------- |
| TB6612FNG | 1        | TB6612FNG | [C88224](https://jlcpcb.com/partdetail/TOSHIBA-TB6612FNG_O_C_8EL/C88224) | TB6612FNG   |

| [DMB J3/DMP3098L](https://www.diodes.com/assets/Datasheets/ds31447.pdf) | 1   | DMB J3/DMP3098L | C4355039 |
| ------------------------------------------------------------------------ | --- | --------------- | -------- |
| C1                                                                       | 1   | 10uF            | 0805     |
| C2                                                                       | 1   | 100nF           | 0805     |
| R1                                                                       | 1   | 10k             |          |

> NOTE: The C1 and R1 values haven't been measured yet- just guessing

## Dev Log

This looks like a pretty good motor controller chip, the [TB6612FNG](https://cdn.sparkfun.com/assets/3/c/c/9/0/TB6612FNG_datasheet_en_20121101.pdf)

Here's a repo where the TB6612FNG is used: [github](https://github.com/adafruit/Adafruit-TB6612-Motor-Driver-Breakout-PCB/tree/master)

Another great board: https://www.sparkfun.com/products/25167
