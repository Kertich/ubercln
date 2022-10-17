import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2lwc2FuZyIsImEiOiJja3ZxcmxndXo0N2U2MnZxNW94eW43N2NlIn0.TQ4RZShVT6X4YJoyBE41gQ';


const Map = (props) => {
  console.log(props)
    useEffect(() => {
    
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
         // center: [-99.29011, 39.39172],
          center: [-1.2729285394049472, 36.8111452939167],
          zoom: 3,
        });
        if(props.pickupCoordinates){
          addToMap(map, props.pickupCoordinates)
        }

        if(props.dropoffCoordinates){
          addToMap(map, props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
          map.fitBounds([
            props.dropoffCoordinates,
            props.pickupCoordinates
          ], {
            padding: 60
          } )
        }

      }, [props.pickupCoordinates, props.dropoffCoordinates]);

      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
      }

      
      

    return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`

