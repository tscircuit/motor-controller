// import { useBug } from "tscircuit"
import { createUseComponent } from "tscircuit"

const pinLabels = {
  1: "A01",
  2: "A02",
  3: "PGND1",
  4: "PNGD1",
  5: "A02",
  6: "B02",
  9: "PNGD2",
  10: "PNGD2",
  11: "B01",
  12: "B01",
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

export const TB6612 = ({ name }: { name: string }) => {
  return (
    <bug
      name={name}
      pinLabels={pinLabels}
      footprint="ssop24_w7.5mm"
      schPinSpacing={1}
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
