// import { useBug } from "tscircuit"
import { createUseComponent } from "tscircuit"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  1: "AOUT1_1",
  2: "AOUT1_2",
  3: "PGND1_1",
  4: "PGND1_2",
  5: "AOUT2_1",
  6: "AOUT2_2",
  7: "BOUT2_1",
  8: "BOUT2_2",
  9: "PGND2_1",
  10: "PGND2_2",
  11: "BOUT1_1",
  12: "BOUT1_2",
  13: "VM2",
  14: "VM3",
  15: "PWMB",
  16: "BIN2",
  17: "BIN1",
  18: "GND",
  19: "STBY",
  20: "VCC",
  21: "AIN1",
  22: "AIN2",
  23: "PWMA",
  24: "VM1",
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const TB6612 = (props: Props) => {
  return (
    <bug
      {...props}
      pinLabels={pinLabels}
      footprint="ssop24_w7.5mm"
      schPinSpacing={0.75}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [20, 21, 22, 23, 19, 17, 16, 15, 18],
        },
        rightSide: {
          // TODO: use top-to-bottom when tscircuit bug is fixed
          direction: "bottom-to-top",
          pins: [24, 1, 2, 5, 6, 3, 4, 13, 14, 11, 12, 7, 8, 9, 10].reverse(),
        },
      }}
    />
  )
}

export const useTB6612 = createUseComponent(TB6612, pinNames)
