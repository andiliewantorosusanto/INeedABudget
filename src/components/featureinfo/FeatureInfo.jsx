import { ArrowDownward } from '@mui/icons-material'
import React from 'react'

export default function FeatureInfo() {
  return (
    <div>
        <div>
            <span>Revenue</span>
            <div>
                <span>
                    RP. 12.000.000
                </span>
                <span>
                    -11.4
                    <ArrowDownward />
                </span>
            </div>
            <span>
                Compared to last month
            </span>
        </div>
    </div>
  )
}
