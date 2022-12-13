import React from 'react' ;
import {useNavigate} from 'react-router-dom' ;
const TodoCard = (props) => {
    const { todo } = props ;
    const { id, title, completed } = todo ;
    let navigate = useNavigate() ;
                        return(
                            <div
                                style = {{
                                    backgroundColor: "gray",
                                    margin: "10px",
                                    padding: "15px",
                                    width:"150px"
                                }}
                                onClick={()=> navigate(`/todo/${id}`)}
                            >
                                <h4>{`ID: ${id}`}</h4>
                                <h4>{`Title: ${title}`}</h4>
                                <h5>{`Completed: ${completed}`}</h5>
                            </div>
                        ) 
}

export default TodoCard ;