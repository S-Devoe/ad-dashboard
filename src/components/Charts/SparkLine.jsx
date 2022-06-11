import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import react from "react";

class SparkLine extends react.PureComponent{
  render () {
  const { id, height, color, data, currentColor, width, type }  = this.props
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      lineWidth={1}
      xName="x"
      yName="y"
      type={type}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line 
        format: '${x}: data ${y}',
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={{ SparklineTooltip }} />
    </SparklineComponent>
  )
    }
  
}
export default SparkLine;
