import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities } from "../../../redux/actions";


const ActivityList = () => {
    const dispatch = useDispatch()
    let actividades = useSelector(state => state.activitis)
    console.log(actividades)

    return (
        <div>

        </div>
    )
}

export default ActivityList;