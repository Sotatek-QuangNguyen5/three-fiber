import {useRef, useLayoutEffect} from 'react'
import * as THREE from 'three'

function Line({ start, end }) {
    const ref = useRef()
    useLayoutEffect(() => {
      ref.current.geometry.setFromPoints([start, end].map((point) =>new THREE.Vector3(...point)))
    }, [start, end])
    return (
      <line ref={ref}>
        <bufferGeometry />
        <lineBasicMaterial color="white" />
      </line>
    )
  }

export default Line