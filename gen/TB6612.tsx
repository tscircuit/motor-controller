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
      footprint={
        <footprint>
          <smtpad
            pcbX="-3.58mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["1"]}
          />
          <smtpad
            pcbX="-2.93mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["2"]}
          />
          <smtpad
            pcbX="-2.28mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["3"]}
          />
          <smtpad
            pcbX="-1.63mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["4"]}
          />
          <smtpad
            pcbX="-0.98mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["5"]}
          />
          <smtpad
            pcbX="-0.32mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["6"]}
          />
          <smtpad
            pcbX="0.33mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["7"]}
          />
          <smtpad
            pcbX="0.98mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["8"]}
          />
          <smtpad
            pcbX="1.63mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["9"]}
          />
          <smtpad
            pcbX="2.28mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["10"]}
          />
          <smtpad
            pcbX="2.93mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["11"]}
          />
          <smtpad
            pcbX="3.58mm"
            pcbY="3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["12"]}
          />
          <smtpad
            pcbX="-3.58mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["24"]}
          />
          <smtpad
            pcbX="-2.93mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["23"]}
          />
          <smtpad
            pcbX="-2.28mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["22"]}
          />
          <smtpad
            pcbX="-1.63mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["21"]}
          />
          <smtpad
            pcbX="-0.98mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["20"]}
          />
          <smtpad
            pcbX="-0.32mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["19"]}
          />
          <smtpad
            pcbX="0.33mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["18"]}
          />
          <smtpad
            pcbX="0.98mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["17"]}
          />
          <smtpad
            pcbX="1.63mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["16"]}
          />
          <smtpad
            pcbX="2.28mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["15"]}
          />
          <smtpad
            pcbX="2.93mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["14"]}
          />
          <smtpad
            pcbX="3.58mm"
            pcbY="-3.49mm"
            width="0.36400738835176355mm"
            height="2.0820125333755986mm"
            shape="rect"
            portHints={["13"]}
          />
        </footprint>
      }
      cadModel={{
        rotationOffset: 90,
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=47443b588a77418ba6b4ea51975c36c0&pn=C88224",
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schWidth={2}
      schPortArrangement={{
        // leftSide: {
        //   direction: "top-to-bottom",
        //   pins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        // },
        // rightSide: {
        //   direction: "bottom-to-top",
        //   pins: [24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13],
        // },
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

export const useTB6612= createUseComponent(TB6612, pinNames)
