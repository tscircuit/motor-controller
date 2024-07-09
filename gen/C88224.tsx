import { createUseComponent } from "tscircuit"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "AO1",
  "2": "AO1",
  "3": "PGND1",
  "4": "PGND1",
  "5": "AO2",
  "6": "AO2",
  "7": "BO2",
  "8": "BO2",
  "9": "PGND2",
  "10": "PGND2",
  "11": "BO1",
  "12": "BO1",
  "13": "13",
  "14": "14",
  "15": "15",
  "16": "16",
  "17": "17",
  "18": "18",
  "19": "19",
  "20": "20",
  "21": "21",
  "22": "22",
  "23": "23",
  "24": "24",
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const C88224 = (props: Props) => {
  return (
    <bug
      {...props}
      footprint={
        <footprint>
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["1"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["2"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["3"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["4"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["5"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["6"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["7"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["8"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["9"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["10"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["11"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["12"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["24"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["23"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["22"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["21"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["20"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["19"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["18"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["17"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["16"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["15"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["14"]}
          />
          <smtpad
            pcbX="NaNmm"
            pcbY="NaNmm"
            width="14.331milmm"
            height="81.969milmm"
            shape="rect"
            portHints={["13"]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=47443b588a77418ba6b4ea51975c36c0&pn=C88224",
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13],
        },
      }}
    />
  )
}

export const useC88224 = createUseComponent(C88224, pinNames)
