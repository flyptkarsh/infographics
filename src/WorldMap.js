import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';

// Example data: An array of objects with country ISO codes and some data value
const data = [
  { isoCode: 'DZA', value: 100 },
  { isoCode: 'BDI', value: 100 },
  { isoCode: 'CMR', value: 100 },
  { isoCode: 'TCD', value: 100 },
  { isoCode: 'COM', value: 100 },
  { isoCode: 'EGY', value: 100 },
  { isoCode: 'ERI', value: 100 },
  { isoCode: 'SWZ', value: 100 },
  { isoCode: 'ETH', value: 100 },
  { isoCode: 'GMB', value: 100 },
  { isoCode: 'GHA', value: 100 },
  { isoCode: 'GIN', value: 100 },
  { isoCode: 'KEN', value: 100 },
  { isoCode: 'LBR', value: 100 },
  { isoCode: 'LBY', value: 100 },
  { isoCode: 'MWI', value: 100 },
  { isoCode: 'MRT', value: 100 },
  { isoCode: 'MAR', value: 100 },
  { isoCode: 'NAM', value: 100 },
  { isoCode: 'NGA', value: 100 },
  { isoCode: 'SEN', value: 100 },
  { isoCode: 'SLE', value: 100 },
  { isoCode: 'SOM', value: 100 },
  { isoCode: 'SSD', value: 100 },
  { isoCode: 'SDN', value: 100 },
  { isoCode: 'TZA', value: 100 },
  { isoCode: 'TGO', value: 100 },
  { isoCode: 'TUN', value: 100 },
  { isoCode: 'UGA', value: 100 },
  { isoCode: 'ZMB', value: 100 },
  { isoCode: 'ZWE', value: 100 },
  { isoCode: 'AFG', value: 100 },
  { isoCode: 'BGD', value: 100 },
  { isoCode: 'BRN', value: 100 },
  { isoCode: 'IDN', value: 100 },
  { isoCode: 'IRN', value: 100 },
  { isoCode: 'IRQ', value: 100 },
  { isoCode: 'KWT', value: 100 },
  { isoCode: 'LBN', value: 100 },
  { isoCode: 'MYS', value: 100 },
  { isoCode: 'MDV', value: 100 },
  { isoCode: 'MMR', value: 100 },
  { isoCode: 'OMN', value: 100 },
  { isoCode: 'PAK', value: 100 },
  { isoCode: 'PSE', value: 100 },
  { isoCode: 'QAT', value: 100 },
  { isoCode: 'SAU', value: 100 },
  { isoCode: 'LKA', value: 100 },
  { isoCode: 'SYR', value: 100 },
  { isoCode: 'TKM', value: 100 },
  { isoCode: 'ARE', value: 100 },
  { isoCode: 'UZB', value: 100 },
  { isoCode: 'YEM', value: 100 },
  { isoCode: 'DMA', value: 100 },
  { isoCode: 'GRD', value: 100 },
  { isoCode: 'GUY', value: 100 },
  { isoCode: 'JAM', value: 100 },
  { isoCode: 'LCA', value: 100 },
  { isoCode: 'VCT', value: 100 },
  { isoCode: 'KIR', value: 100 }, 
  { isoCode: 'NIU', value: 100 }, 
  { isoCode: 'PNG', value: 100 }, 
  { isoCode: 'WSM', value: 100 }, 
  { isoCode: 'SLB', value: 100 },
  { isoCode: 'TON', value: 100 }, 
  { isoCode: 'TUV', value: 100 },
];


// Create a color scale based on the data range
const colorScale = scaleQuantize()
  .domain([0, 100]) // Assuming data values range from 0 to 100
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

const WorldMap = () => {
  return (
    <div>
   
      <div>
        <ComposableMap>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

    </div>
  );
};

export default WorldMap;