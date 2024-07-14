export default () => (
  <board width="40mm" height="40mm" pcbCenterX={0} pcbCenterY={0}>
    <component name="Example2">
      <platedhole
        pcbX={0}
        pcbY={0}
        portHints={["1"]}
        shape="circle"
        holeDiameter="2mm"
        outerDiameter="4mm"
      />
    </component>
  </board>
)
