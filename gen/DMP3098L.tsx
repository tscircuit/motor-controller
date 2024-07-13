import { createUseComponent } from "tscircuit"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "G",
  "2": "S",
  "3": "D",
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const DMP3098L = (props: Props) => {
  return (
    <bug
      {...props}
      footprint={
        <footprint>
          <smtpad
            pcbX="1.00mm"
            pcbY="0.95mm"
            width="1.2500101599996745mm"
            height="0.6999985776000455mm"
            shape="rect"
            portHints={["1"]}
          />
          <smtpad
            pcbX="1.00mm"
            pcbY="-0.95mm"
            width="1.2500101599996745mm"
            height="0.6999985776000455mm"
            shape="rect"
            portHints={["2"]}
          />
          <smtpad
            pcbX="-1.00mm"
            pcbY="0.00mm"
            width="1.2500101599996745mm"
            height="0.6999985776000455mm"
            shape="rect"
            portHints={["3"]}
          />
        </footprint>
      }
      cadModel={{
        rotationOffset: { x: 0, y: 0, z: 180 },
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d777607a152f4f3aac9bb0d0c14ed6fd&pn=C4355039",
      }}
      pinLabels={pinLabels}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [3],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: [1],
        },
        rightSide: {
          direction: "left-to-right",
          pins: [2],
        },
      }}
    />
  )
}

export const useDMP3098L= createUseComponent(DMP3098L, pinNames)
