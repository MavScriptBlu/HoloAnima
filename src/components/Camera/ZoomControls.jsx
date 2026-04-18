/*
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useStore} from '../../lib/store'
import './ZoomControls.css'

/**
 * Renders the zoom controls for the camera view.
 */
export default function ZoomControls() {
  const zoom = useStore.useZoom()
  const {setZoom} = useStore.getState()

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.5, 3))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.5, 1))
  }

  return (
    <div className="zoom-controls">
      <button 
        className="zoom-btn" 
        onClick={handleZoomIn}
        disabled={zoom >= 3}
        title="Zoom In"
      >
        <span className="icon">add</span>
      </button>

      <div className="zoom-level">
        {zoom.toFixed(1)}x
      </div>

      <button 
        className="zoom-btn" 
        onClick={handleZoomOut}
        disabled={zoom <= 1}
        title="Zoom Out"
      >
        <span className="icon">remove</span>
      </button>
    </div>
  )
}
