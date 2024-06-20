import { layout, useResistor, useCapacitor } from "tscircuit"
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
  return (
    <group layout={layout().manualEdits(manual_edits).autoLayoutSchematic()}>
      <U1 VM1="net.VMOTOR" VM2="net.VMOTOR" VM3="net.VMOTOR" GND="net.GND" />
      <R1 schRotation="90deg" right={U1.VCC} left={U1.STBY} />
      <C2 schRotation="-90deg" left={U1.VCC} right={U1.GND} />
      <C3 schRotation="-90deg" left="net.VMOTOR" right="net.GND" />
    </group>
  )
}
