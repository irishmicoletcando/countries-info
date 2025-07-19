import { ChevronDown } from 'lucide-react'
import React from 'react'
import type { RegionFilter } from '../types/countryDetails'

interface FilterDropdownProps {
  handleFilterChange: (region: RegionFilter) => void;
  selectedRegion: RegionFilter;
}

const regions: RegionFilter[] = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const FilterDropdown: React.FC<FilterDropdownProps> = ({ handleFilterChange, selectedRegion }) => {
  return (
    <div>
      <button
        className="bg-blue-900 btn btn-ghost"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } as React.CSSProperties}
      >
        Filter
        <ChevronDown />
      </button>

      <ul
        className="shadow-sm w-28 dropdown menu rounded-box bg-base-100"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } as React.CSSProperties}
      >
        {regions.map((region) => (
          <li
            key={region}
            onClick={() => handleFilterChange(region)}
            className={region === selectedRegion ? "bg-blue-900 font-semibold" : ""}
          >
            <a>{region}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterDropdown
