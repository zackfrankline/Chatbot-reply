import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDataLayerValue } from "../../../DataLayer";

const HeaderStocks = () => {

    const [{}, dispatch] = useDataLayerValue();

    const Handler = () => {
        dispatch({
            type: 'SET_STOCKS',
            stocks: false
        })
    }

    return(
        <div className="HeaderStocks">
            <div onClick={Handler}><ArrowBackIosNewIcon /></div>
            <div>HeaderStocks</div>
            <div><p></p></div>
        </div>
    )
}

export default HeaderStocks