import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.courseId === courseId);
    const [moduleList, setModuleList] = useState<any[]>(modules);

    const [selectedModule, setSelectedModule] = useState(modulesList[0]);

    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        courseId: courseId,
    });

    


    return (
        <>
            {
                <div className="flex-buttons-container" style={{ marginTop: "0px" }}>
                    <div className="btn modules-button">Collapse All</div>
                    <div className="btn modules-button">View Progress</div>
                    <div className="btn modules-button">Publish All <FaCheckCircle /> </div>
                    <div className="btn modules-button-red"><FaPlus /> Module</div>
                    <div className="btn modules-button"><FaEllipsisV /> </div>
                </div>
            }

            <hr style={{ marginRight: "15px" }}></hr>

            <ul className="list-group wd-modules" style={{ marginRight: "15px" }}>

                <div className="flex-buttons-container">
                    <button className="btn add-button" >Add <FaPlus /> </button>
                </div>

                <input value={module.name} className="form-control module-menu-input"
                    onChange={(e) => setModule({
                        ...module, name: e.target.value
                    })}
                />
                <textarea value={module.description} className="form-control module-menu-input"
                    onChange={(e) => setModule({
                        ...module, description: e.target.value
                    })}
                />

                <hr style={{marginBottom: "25px"}}/>


                {modulesList.filter((module) => module.courseId === courseId).map((module, index) => (
                    <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>
                        <div style={{ marginBottom: "10px" }} >
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>

                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;