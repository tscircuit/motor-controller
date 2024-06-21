import { layout, useResistor, useCapacitor, useBug } from "tscircuit"
import manual_edits from "./MyCircuit.manual-edits"
import { TB6612, useTB6612 } from "./TB6612"

export const MyCircuit = () => {
  const R1 = useResistor("R1", {
    resistance: "10k", // TODO
    footprint: "res0402",
  })
  const U1 = useTB6612("U1")
  const C2 = useCapacitor("C2", {
    capacitance: "1uF", // TODO
    footprint: "cap0603",
  })
  const C3 = useCapacitor("C3", {
    capacitance: "1uF", // TODO
    footprint: "cap0603",
  })

  const JP3 = useBug("JP3", {
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
  })
  return (
    <group layout={layout().manualEdits(manual_edits).autoLayoutSchematic()}>
      <U1
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
        BOUT1_1={U1.BOUT1_2}
        BOUT2_1={JP3.MB1}
        // BOUT2_1={JP3}
        // BOUT1={U1.B
      />
      <JP3 />
      <R1 schRotation="90deg" right={U1.VCC} left={U1.STBY} />
      <C2 schRotation="-90deg" left={U1.VCC} right="net.GND" />
      <C3 schRotation="-90deg" left="net.VMOTOR" right="net.GND" />
    </group>
  )
}
