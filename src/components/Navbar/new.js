import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function Particle(props) {
  const { hertz, modelUrl, ...rest } = props
  const ref = useRef()

  useEffect(() => {
    new GLTFLoader().load(modelUrl, gltf => {
      const model = gltf.scene
      ref.current.add(model)
    })
  }, [modelUrl])

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(2 * Math.PI * hertz * t)
    ref.current.rotation.y = Math.sin(2 * Math.PI * hertz * t)
    ref.current.rotation.z = Math.sin(2 * Math.PI * hertz * t)
  })

  return (
    <mesh ref={ref} {...rest}>
      <meshStandardMaterial color= "lime"  />
    </mesh>
  )
}
