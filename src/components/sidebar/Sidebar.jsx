import { LineStyle, Timeline } from '@mui/icons-material'

import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <div>
            <div>
                <h3>
                    Dashboard
                </h3>
                <ul>
                    <li>
                        <LineStyle/>
                        Home
                    </li>
                    <li>
                        <Timeline/>
                        Analystics
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
