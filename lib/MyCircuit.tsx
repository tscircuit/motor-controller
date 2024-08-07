import { layout, useResistor, useCapacitor, useBug } from "tscircuit"
import manual_edits from "./MyCircuit.manual-edits"
import { TB6612, useTB6612 } from "gen/TB6612"
import { DMP3098L, useDMP3098L } from "gen/DMP3098L"
import { MountingHole } from "./MountingHole"

export const MyCircuit = () => {
  const R1 = useResistor("R1", {
    resistance: "10k", // TODO
    footprint: "res0402",
    schX: -5,
    schY: 0,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=25f113603be24a279bc54a86db776d75&pn=C100195",
    },
  })
  const U1 = useTB6612("U1")
  const C2 = useCapacitor("C2", {
    capacitance: "1uF", // TODO
    footprint: "cap0603",
    schX: -4,
    schY: 1,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ac9b32e974bc448eab36b1293f859dcb&pn=C100040",
    },
  })
  const C3 = useCapacitor("C3", {
    capacitance: "1uF", // TODO
    footprint: "cap0603",
    schX: -6,
    schY: -2,
    cadModel: {
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ac9b32e974bc448eab36b1293f859dcb&pn=C100040",
    },
  })

  const JP1 = useBug("JP1", {
    footprint: "pinrow10",
    pcbRotation: "90deg",
    pinLabels: {
      1: "PWRIN",
      2: "VCC",
      3: "PWMB",
      5: "BIN2",
      6: "BIN1",
      7: "STBY",
      8: "AIN1",
      9: "AIN2",
      10: "PWMA",
    },
    schPortArrangement: {
      rightSize: 10,
    },
    schX: -12,
    schY: 4,
  })

  const J1 = useBug("J1", {
    footprint: "pinrow2",
    pinLabels: {
      1: "PWRIN",
      2: "GND",
    },
    schX: -12,
    schY: -2,
    schPortArrangement: {
      rightSide: {
        direction: "top-to-bottom",
        pins: [2, 1],
      },
    },
  })

  const JP3 = useBug("JP3", {
    footprint: "pinrow5",
    supplierPartNumbers: {
      jlcpcb: ["C124379"],
    },
    layer: "bottom",
    pinLabels: {
      1: "MA1",
      2: "MA2",
      3: "GND",
      4: "MB2",
      5: "MB1",
    },
    schX: 5,
    schY: 0,
    schPortArrangement: {
      leftSize: 5,
    },
    cadModel: {
      rotationOffset: { x: 0, y: 180, z: 0 },
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=6331f645d89e4b919bdba0cb4f3544ce&pn=C124379",
    },
  })

  const Q1 = useDMP3098L("Q1", {
    schX: -8,
    schY: -2,
    pcbX: 10,
    pcbY: 10,
  })

  // Why is autolayout not working!!!!!! It puts JP3 on the left!
  return (
    <group
      layout={
        layout().manualEdits(manual_edits)
        // .autoLayoutSchematic()
      }
    >
      <MountingHole pcbX={-6} pcbY={10} />
      <MountingHole pcbX={-6} pcbY={-10} />
      <U1
        pcbRotation="90deg"
        VM1="net.VMOTOR"
        VM2="net.VMOTOR"
        VM3="net.VMOTOR"
        GND="net.GND"
        AIN1="net.AIN1"
        AIN2="net.AIN2"
        PWMA="net.PWMA"
        BIN1="net.BIN1"
        BIN2="net.BIN2"
        PWMB="net.PWMB"
        PGND2_1="net.GND"
        PGND2_2={U1.PGND2_1}
        BOUT1_1={JP3.MB1}
        BOUT1_2={U1.BOUT1_1}
        BOUT2_1={JP3.MB2}
        BOUT2_2={U1.BOUT2_1}
        PGND1_1="net.GND"
        PGND1_2="net.GND"
        AOUT1_1={JP3.MA1}
        AOUT1_2={U1.AOUT1_1}
        AOUT2_1={JP3.MA2}
        AOUT2_2={U1.AOUT2_1}
      />
      <J1 GND="net.GND" PWRIN="net.PWRIN" />
      <JP1
        PWRIN="net.PWRIN"
        VCC="net.VCC"
        PWMB="net.PWMB"
        BIN2="net.BIN2"
        BIN1="net.BIN1"
        STBY="net.STBY"
        AIN1="net.AIN1"
        AIN2="net.AIN2"
        PWMA={U1.PWMA}
      />
      <JP3 GND="net.GND" pcbRotation="90deg" />
      <R1
        pcbRotation="180deg"
        schRotation="90deg"
        right={U1.VCC}
        left={U1.STBY}
      />
      <C2 schRotation="-90deg" left={U1.VCC} right="net.GND" />
      <C3 schRotation="-90deg" left="net.VMOTOR" right="net.GND" />
      <Q1 S={C3.left} G={C3.right} D={J1.PWRIN} />
    </group>
  )
}
