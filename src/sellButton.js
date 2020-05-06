import React from "react"
import {Button} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const sellButton = () =>(
    <div id="sell-button">
    <Button variant="primary" className="font-weight-bold">
        <FontAwesomeIcon className="mr-2" icon={faCamera}></FontAwesomeIcon>
        <span>SELL</span> 
    </Button>
    </div>
)

export default sellButton