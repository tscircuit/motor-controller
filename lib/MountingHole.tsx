export const MountingHole = ({
  pcbX = 0,
  pcbY = 0,
}: { pcbX: number; pcbY: number }) => {
  return (
    <component name="MountingHole">
      <platedhole
        pcbX={pcbX}
        pcbY={pcbY}
        portHints={["1"]}
        shape="circle"
        holeDiameter="2.5mm"
        outerDiameter="3.2mm"
      />
    </component>
  )
}
