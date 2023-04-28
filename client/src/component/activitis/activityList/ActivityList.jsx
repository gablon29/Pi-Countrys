import React, { useEffect } from "react";
import Activitis from "../activCards/Activitis";
import { useSelector, useDispatch } from "react-redux";
import { getActivities } from "../../../redux/actions";
import './Activiti.css'
import "../activityCreation/ActivitisCreate";
import Navbar from "../../navbar/Navbar";



const ActivityList = () => {
    
    const dispatch = useDispatch()
    const activitis = useSelector(state => state.activitis);
    useEffect(() => { 
        dispatch(getActivities())
     }, [dispatch])
    return (
        <div className="div_lista">
            <Navbar/>
            {
                activitis.map(({ID, Nombre, Duracion, Temporada, Dificultad, Countries }) => {
                    return (
                        <div className="counteiner_activity" key={ID}>
                            <Activitis 
                                Nombre={Nombre}
                                Duracion={Duracion}
                                Temporada={Temporada}
                                Dificultad={Dificultad}
                                Countries={Countries}
                            />
                        </div>
                    )
                })
        }
        </div>
    )
}

export default ActivityList;