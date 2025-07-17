import { ChevronDown } from 'lucide-react'
import React from 'react'

const FilterDropdown = () => {
  return (
    <div>
      <button className="bg-blue-900 btn btn-ghost" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } as React.CSSProperties }>
        Filter
        <ChevronDown />
      </button>

      <ul className="shadow-sm w-28 dropdown menu rounded-box bg-base-100"
        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } as React.CSSProperties }>
        <li><a>Africa</a></li>
        <li><a>America</a></li>
        <li><a>Asia</a></li>
        <li><a>Europe</a></li>
        <li><a>Oceania</a></li>
      </ul>
    </div>
  )
}

export default FilterDropdown