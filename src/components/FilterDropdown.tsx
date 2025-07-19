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
        className="bg-white dark:bg-blue-900 text-grey-950 dark:text-white btn btn-ghost"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } as React.CSSProperties}
      >
        Filter by Region
        <ChevronDown />
      </button>

      <ul
        className="shadow-sm w-40 dropdown menu rounded-box bg-white dark:bg-blue-950"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } as React.CSSProperties}
      >
        {regions.map((region) => (
          <li
            key={region}
            onClick={() => handleFilterChange(region)}
            className={region === selectedRegion ? "bg-grey-950/10 dark:bg-blue-900 font-semibold" : ""}
          >
            <a>{region}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterDropdown
